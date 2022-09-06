const uuid = require('uuid')
const {hashPasswordSync} = require('../utils/crypt')


const user = require('../models/users.models')

const usersDB = []

//? controlador para traer todos los usuarios.
const getAllUsers = async () => {
    const data = await user.findAll({
        attributes: {
            exclude: ['password']
        }
    })
    return data;
}

//? controlador para traer a un usuario por ID.
const getUserById = async (id) => {
    const data = await user.findOne({
        where: {
            id: id
        },
        attributes: {
            exclude: ['password']
        }
    })
    return data
}

//? este controlador es para verificar si un usuario esta registrado o no, cuando quiera hacer login.
const getUserByEmail = async (email) => {
    const data = await user.findOne({
        where: {
            email: email
        }
    })

    return data
}

//? controlador para crear un usuario nuevo
const createUser = async (data) => {
    const newUser = await user.create({
        ...data,
        id: uuid.v4(),
        password: hashPasswordSync(data.password),
        role: 'normal',
        is_active: true,
        verified: false
    })
    return newUser
}

const editUser = async(userId, data, userRol) => {
   if(userRol === 'admin') {
    const {id, password, verified, ...newData} = data
    const response = await user.update({
        ...newData
    }, {
        where: {
            id: userId
        }
    })
    return response
   }else{
    const {id, password, verified, role, ...newData} = data
    const response = await user.update({
        ...newData
    }, {
        where: {
            id: userId
        }
    })
    return response
   }
}

const deleteUser = async (id) => {
    const data = await user.destroy({
        where: {
            id: id
        }
    })
    return data;
}



module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    editUser,
    deleteUser
}