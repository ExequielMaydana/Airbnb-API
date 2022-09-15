const jwt = require("jsonwebtoken");

const { loginUser } = require("./auth.controllers");

require("dotenv").config();
const secretWord = process.env.JWT_KEY;

const login = (req, res) => {
  const data = req.body;

  if (!data.email || !data.password) {
    return res.status(400).json({ message: "Missing Data" });
  }

  loginUser(data.email, data.password)
    .then((response) => {
      if(response){
        const token = jwt.sign(
          {
            id: response.id,
            email: response.email,
            rol: response.rol,
          },secretWord);
          return res
        .status(200)
        .json({ message: "Tus credenciales son correctas", token });
      }else {
        return res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(() => {
      return res.status(401).json({ message: "Invalid Credentials" });
    });
};


exports.login = login;
