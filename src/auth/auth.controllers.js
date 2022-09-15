const { getUserByEmail } = require("../users/users.controllers");
const { comparePassword } = require("../utils/crypt");

const loginUser = async (email, password) => {
  try{
    const user = await getUserByEmail(email)
    const verify_password = comparePassword(password, user.password);
    if(verify_password){
      return user  // si la password es correcta retornamos el usuario, de lo contrario false.
    }
    console.log(user);
    return false;
  } catch(err){
    return false
  }
};

module.exports = {
  loginUser,
};
