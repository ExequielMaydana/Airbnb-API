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

const editUser = (id, data) => {
    const filteredUser = usersDB.findIndex(user => user.id === id);
    if(filteredUser !== -1){
        usersDB[filteredUser] = {
            id: id,
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: hashPasswordSync(data.password),
            birthday_date: data.birthday_date,
            gender: data.gender,
            phone: data.phone,
            dni: data.dni,
            country: data.country,
            addres: data.addres,
            role: data.rol,
            profile_image: data.profile_image,
            is_active: data.is_active,
            verified: false
        }
        return usersDB[filteredUser];
    }
    return createUser(data);
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