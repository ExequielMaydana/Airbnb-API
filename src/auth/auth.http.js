const jwt = require("jsonwebtoken");

const { loginUser } = require("./auth.controllers");

require("dotenv").config();
const secretWord = process.env.JWT_KEY;

const login = (req, res) => {
  const data = req.body;
  const response = loginUser(data.email, data.password);

  if (!data.email || !data.password) {
    return res
      .status(400)
      .json({ message: "Your email or password is incorrect" });
  } else if (response) {
    const token = jwt.sign(
      {
        id: response.id,
        email: response.email,
        rol: response.rol,
      }`${secretWord}`
    );

    return res.status(200).json({ token });
  } else {
    return res.status(401).json({ message: "Your credentials are invalid" });
  }
};

exports.login = login;
