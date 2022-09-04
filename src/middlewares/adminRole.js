const adminRoleMiddleware = (req, res, next) => {
  const rol = req.user.rol;

  if (rol === "admin") {
    next();
  } else {
    return res.status(401).json({
      status: "error",
      message: "User not authorized to make this request",
    });
  }
};

exports.adminRoleMiddleware = adminRoleMiddleware;
