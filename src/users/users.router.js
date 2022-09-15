const router = require("express").Router();
const passport = require("passport");
require("../middlewares/auth.middleware")(passport);
const { adminRoleMiddleware } = require("../middlewares/role.middleware");
const { upload } = require("../utils/multer");

const userServices = require("./users.http");

router.get("/", userServices.getAll);

router
  .route("/me")
  .get(passport.authenticate("jwt", { session: false }), userServices.getMyUser)
  .put(
    passport.authenticate("jwt", { session: false }),
    userServices.updateMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    userServices.deleteMyUser
  );

router
  .route("/me/profile-img")
  .post(
    passport.authenticate("jwt", { session: false }),
    upload.single("profile_img"),
    userServices.postProfileImage
  );

router
  .route("/:id")
  .get(userServices.getById)
  .put(
    passport.authenticate("jwt", { session: false }),
    adminRoleMiddleware,
    userServices.updateUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminRoleMiddleware,
    userServices.deleteUser
  );

router.route("/:id/role").get(userServices.getUserRole);

exports.router = router;
