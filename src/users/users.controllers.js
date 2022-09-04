const uuid = require('uuid')
const {hashPasswordSync} = require('../utils/crypt')
const usersDB = []

//? controlador para traer todos los usuarios.
const getAllUsers = () => {
    return usersDB;
}

//? controlador para traer a un usuario por ID.
const getUserById = (id) => {
    const filteredUserById = usersDB.filter(user => user.id === id);
    return filteredUserById.length ? filteredUserById[0] : null;
}

//? este controlador es para verificar si un usuario esta registrado o no, cuando quiera hacer login.
const getUserByEmail = (email) => {
    const filteredUserByEmail = usersDB.filter(user => user.email === email);
    return filteredUserByEmail.length ? filteredUserByEmail[0] : null;
}

//? controlador para crear un usuario nuevo
const createUser = (data) => {
    const newUser = {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: hashPasswordSync(data.password),
        birthday_date: data.birthday_date ? data.birthday_date : '',
        gender: data.gender,
        phone: data.phone,
        dni: data.dni,
        country: data.country,
        addres: data.addres ? data.addres : '',
        role: 'normal',
        profile_image: data.profile_image,
        is_active: true,
        verified: false
    }
    usersDB.push(newUser);
    return newUser;
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

const deleteUser = (id) => {
    const filteredUser = usersDB.findIndex(user => user.id === id);
    filteredUser !== 1 ? usersDB.splice(filteredUser, 1) : false
}



module.exports = {
    getAllUsers,
    getUserById,
    getUserByEmail,
    createUser,
    editUser,
    deleteUser
}