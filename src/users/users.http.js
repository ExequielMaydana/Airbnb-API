const usersControllers = require("./users.controllers");

// servicio para mostrar todos los usuarios.
const getAll = (req, res) => {
  const data = usersControllers.getAllUsers();
  return res.status(200).json({ items: data.length, users: data });
};

// servicio para mostrar un usuario por id.
const getById = (req, res) => {
  const id = req.params.id;
  const user = usersControllers.getUserById(id);
  if (user) {
    return res.status(200).json(user);
  } else {
    return res
      .status(404)
      .json({ message: `The user with the ${id} does not exist` });
  }
};

// servicio para crear un usuario.
const registerUser = (req, res) => {
  const data = req.body;
  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.first_name ||
    !data.last_name ||
    !data.email ||
    !data.password ||
    !data.birthday_date ||
    !data.country ||
    !data.addres ||
    !data.dni
  ) {
    return res.status(400).json({
      message: "You must provide the following data",
      fields: {
        first_name: "string",
        last_name: "string",
        email: "example@example.com",
        password: "sdasd12313",
        birthday_date: "DD/MM/YYYY",
        country: "string",
        addres: "string",
        dni: "123123123",
      },
    });
  } else {
    const response = usersControllers.createUser(data);
    return res
      .status(201)
      .json({ message: "Successfully registered", user: response });
  }
};

// servicio para editar un usuario.
const updateUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.first_name ||
    !data.last_name ||
    !data.email ||
    !data.password ||
    !data.birthday_date ||
    !data.gender ||
    !data.phone ||
    !data.dni ||
    !data.country ||
    !data.addres ||
    !data.rol ||
    !data.is_active
  ) {
    return res.status(400).json({
      message: "You must complete all fields",
      fields: {
        first_name: "string",
        last_name: "string",
        email: "example@example.com",
        password: "sdasd12313",
        birthday_date: "DD/MM/YYYY",
        gender: "string",
        phone: "+543242342",
        dni: "123123123",
        country: "string",
        addres: "string",
        rol: "normal",
        is_active: true,
      },
    });
  } else {
    const response = usersControllers.editUser(id, data);
    return res.status(200).json({
      message: "Data have been successfully modified",
      user: response,
    });
  }
};

// servicio para eliminar un usuario.
const deleteUser = (req, res) => {
  const id = req.params.id;
  const user = usersControllers.deleteUser(id);

  if (user) {
    return res.status(204).json();
  } else {
    return res
      .status(400)
      .json({ message: "You cannot delete a user that does not exist" });
  }
};

//! servicios protegidos.
const getMyUser = (req, res) => {
  const id = req.user.id;
  const user = usersControllers.getUserById(id);
  return res.status(200).json(user);
};

const updateMyUser = (req, res) => {
  const id = req.user.id;
  const data = req.body;

  if (!data) {
    return res.status(400).json({ message: "Missing Data" });
  } else if (
    !data.first_name ||
    !data.last_name ||
    !data.email ||
    !data.password ||
    !data.birthday_date ||
    !data.gender ||
    !data.phone ||
    !data.dni ||
    !data.country ||
    !data.addres ||
    !data.rol ||
    !data.is_active
  ) {
    return res.status(400).json({
      message: "You must complete all fields",
      fields: {
        first_name: "string",
        last_name: "string",
        email: "example@example.com",
        password: "sdasd12313",
        birthday_date: "DD/MM/YYYY",
        gender: "string",
        phone: "+543242342",
        dni: "123123123",
        country: "string",
        addres: "string",
        rol: "normal",
        is_active: true,
      },
    });
  } else {
    const response = usersControllers.editUser(id, data);
    return res.status(200).json({
      message: "Data have been successfully modified",
      user: response,
    });
  }
};

const deleteMyUser = (req, res) => {
    const id = req.user.id;
    const user = usersControllers.deleteUser(id)
    if(user){
        return res.status(204).json()
    }else{
        return res.status(400).json({message: 'invalid ID'})
    }
};

module.exports = {
  getAll,
  getById,
  registerUser,
  updateUser,
  deleteUser,

  // progregidas
  getMyUser,
  updateMyUser,
  deleteMyUser
};
