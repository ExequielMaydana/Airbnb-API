const router = require('express').Router()
const passport = require('passport')
require('../middlewares/auth.middleware')(passport)
const {adminRoleMiddleware} = require('../middlewares/adminRole')

const userServices = require('./users.http')

router.get('/', userServices.getAll)

router.route('/me')
    .get(passport.authenticate('jwt', {session: false}), userServices.getMyUser)
    .put(passport.authenticate('jwt', {session: false}), userServices.updateMyUser)
    .delete(passport.authenticate('jwt', {session: false}), userServices.deleteMyUser)

router.route(':id')
    .get(passport.authenticate('jwt', {session: false}), userServices.getById)
    .put(passport.authenticate('jwt', {session: false}), adminRoleMiddleware, userServices.updateUser)
    .delete(passport.authenticate('jwt', {session: false}), adminRoleMiddleware, userServices.deleteUser)

exports.router = router;