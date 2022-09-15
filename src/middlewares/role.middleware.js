const role = require("../models/role.models");

const adminRoleMiddleware = (req, res, next) => {
  role
    .findOne({
      where: {
        name: "admin",
      },
    })
    .then((response) => {
      const rol = req.user.rol;
      if (rol === response.id) {
        next();
      } else {
        res.status(401).json({
          status: "error",
          message: "User not authorized to make this request",
        });
      }
    })
    .catch(() => {
      res.status(401).json({
        status: "error",
        message: "User not authorized to make this request",
      });
    });
};

const roleHostMiddleware = (req, res, next) => {
  role
    .findOne({
      where: {
        name: "host",
      },
    })
    .then((response) => {
      const rol = req.user.rol;
      if (rol === response.id) {
        next();
      } else {
        res.status(401).json({
          status: "error",
          message: "User not authorized to make this request",
        });
      }
    })
    .catch(() => {
      res.status(401).json({
        status: "error",
        message: "User not authorized to make this request",
      });
    });
};

exports.adminRoleMiddleware = adminRoleMiddleware;
exports.roleHostMiddleware = roleHostMiddleware;
