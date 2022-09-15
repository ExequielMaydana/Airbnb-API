const usersControllers = require("./users.controllers");

// servicio para mostrar todos los usuarios.
const getAll = (req, res) => {
  usersControllers
    .getAllUsers()
    .then((response) => {
      res.status(200).json({ items: response.length, users: response });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// servicio para mostrar un usuario por id.
const getById = (req, res) => {
  const id = req.params.id;
  usersControllers
    .getUserById(id)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => {
      res
        .status(404)
        .json({ message: `The user with the ${id} does not exist` });
    });
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
    !data.birthday_date
  ) {
    return res.status(400).json({
      message: "You must provide the following data",
      fields: {
        first_name: "string",
        last_name: "string",
        email: "example@example.com",
        password: "string",
        birthday_date: "YYYY/DD/MM",
      },
    });
  } else {
    usersControllers
      .createUser(data)
      .then((response) => {
        res
          .status(201)
          .json({ message: "Successfully registered", user: response });
      })
      .catch((err) => {
        res.status(400).json({ message: err.errors[0].message });
      });
  }
};

// servicio para editar un usuario.
const updateUser = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else {
    usersControllers.editUser(id, data, req.user.rol).then(response => {
      res.status(200).json({
        message: "Data have been successfully modified",
        user: response,
      });
    })
    .catch((err) => {
      res.status(400).json({message: err.errors[0].message})
    })
  }
};

// servicio para eliminar un usuario.
const deleteUser = (req, res) => {
  const id = req.params.id;
  usersControllers.deleteUser(id).then((response) => {
    if (response) {
      res.status(204).json();
    } else {
      res
        .status(400)
        .json({ message: "You cannot delete a user that does not exist" });
    }
  });
};

//! servicios protegidos.
const getMyUser = (req, res) => {
  const id = req.user.id;
  usersControllers.getUserById(id).then(response => {
    res.status(200).json(response)
  })
  .catch((err) => {
    res.status(400).json({message: err.errors[0].message})
  })
};

const updateMyUser = (req, res) => {
  const id = req.user.id;
  const data = req.body;

  if (!Object.keys(data).length) {
    return res.status(400).json({ message: "Missing Data" });
  } else {
    usersControllers.editUser(id, data, req.user.rol).then((response) => {
      res.status(200).json({
        message: "Data have been successfully modified",
        user: response,
      });
    })
    .catch((err) => {
      res.status(400).json({message: err.errors[0].message})
    })
  }
};

const deleteMyUser = (req, res) => {
  const id = req.user.id;
  usersControllers
    .deleteUser(id)
    .then((response) => {
      res.status(204).json(response);
    })
    .catch(() => {
      res.status(400).json({ message: "invalid ID" });
    });
};

const postProfileImage = (req, res) => {
  const userId = req.user.id;
  const imgPath =
    req.hostname + "8000" + "/api/v1/uploads/" + req.file.filename;
  usersControllers
    .editProfileImg(userId, imgPath)
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => console.log(err));
};

const getUserRole = (req, res) => {
  const id = req.params.id
  usersControllers.getUserWithRole(id)
    .then((response) => {
      res.status(200).json(response)
    })
    .catch(err =>  {
      res.status(400).json({message: err})
    })
}


module.exports = {
  getAll,
  getById,
  registerUser,
  updateUser,
  deleteUser,

  // progregidas
  getMyUser,
  updateMyUser,
  deleteMyUser,
  postProfileImage,
  getUserRole
};
