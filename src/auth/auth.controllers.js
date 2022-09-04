const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypt");

const loginUser = (email, password) => {
  const user = getUserByEmail(email);

  if (user) {
    const verify_password = comparePassword(password, user.password);
    verify_password ? user : false; // si la password es correcta retornamos el usuario, de lo contrario false.
  }
};

module.exports = {
  loginUser,
};
