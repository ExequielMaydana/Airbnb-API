const uuid = require("uuid");
const { hashPasswordSync } = require("../utils/crypt");

const user = require("../models/users.models");
const roles = require("../models/role.models");

const userDB = [
  {
    id: "74cd6011-7e76-4d6d-b25b-1d6e4182ec2f",
    firstName: "Sahid",
    lastName: "Kick",
    gender: "male",
    email: "sahid.kick@academlo.com",
    password: "$2b$10$TNGcRFonQH98rVqFaBVfpOEEv2Xcu5ej14tWqKim3z3L6Tr.ZIaqC",
    phone: "1234567890",
    birthdayDate: "22/10/2000",
    dni: "",
    address: "",
    roleId: "5ee551ed-7bf4-44b0-aeb5-daaa824b9473",
    profile_image: "",
    status: "active",
    verified: false,
  },
];

//? controlador para traer todos los usuarios.
const getAllUsers = async () => {
  const data = await user.findAll({
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "roleId"],
    },
  });
  return data;
};

//? controlador para traer a un usuario por ID.
const getUserById = async (id) => {
  const data = await user.findOne({
    where: {
      id: id,
    },
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "roleId"],
    },
  });
  return data;
};

//? este controlador es para verificar si un usuario esta registrado o no, cuando quiera hacer login.
const getUserByEmail = async (email) => {
  const data = await user.findOne({
    where: {email: email},
      attribute: {
        exclude: ["createdAt", "updatedAt", "roleId"]
      }
  });
  return data;
};

//? controlador para crear un usuario nuevo
const createUser = async (data) => {
  const newUser = await user.create({
    id: uuid.v4(),
    firstName: data.first_name,
    lastName: data.last_name,
    email: data.email,
    password: hashPasswordSync(data.password),
    birthdayDate: data.birthday_date,
    gender: data.gender,
    phone: data.phone,
    dni: data.dni,
    address: data.address,
    roleId: "fef3a08d-2cec-4728-9745-7cbd2b37e557",
    profileImage: data.profile_image,
    status: "active",
    verified: false,
  });
  return newUser;
};

const editUser = async (userId, data, userRol) => {
  const { id, password, verified, role_id, ...restOfProperties } = data;
  if ("5ee551ed-7bf4-44b0-aeb5-daaa824b9473" === userRol) {
    const response = await user.update(
      { 
        ...restOfProperties, 
        role_id 
      },
      { where: { id: userId } }
    );
    return response;
  } else {
    const response = await user.update(
      restOfProperties, 
      {
      where: { id: userId },
      });
    return response;
  }
};

const deleteUser = async (id) => {
  const data = await user.destroy({
    where: {
      id: id,
    },
  });
  return data;
};

const editProfileImg = async (userId, imgUrl) => {
  const response = await user.update(
    {
      profileImage: imgUrl
    },
    {
      where: {
        id: userId,
      },
    }
  );
  return response;
};

const getUserWithRole = async (userId) => {
  const data = await user.findOne({
    where: {
      id: userId,
    },
    include: {
      model: roles,
      as: "role",
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"],
      },
    },
    attributes: {
      exclude: ["roleId", "createdAt", "updatedAt", "password"],
    },
  });
  return data;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  editUser,
  deleteUser,
  editProfileImg,
  getUserWithRole
};
