const bcrypt = require('bcrypt');

//? esta funcion recibe la password en texto plano y la encripta.
const hashPasswordSync = (plainTextPwd) => {
    return bcrypt.hashSync(plainTextPwd, 10)
}

//? esta funcion compara la password en texto plano con la encriptada.
const comparePassword = (plainPassword, hashPassword, done) => {
    bcrypt.compare(plainPassword, hashPassword, done)
}

module.exports = {
    hashPasswordSync,
    comparePassword
}