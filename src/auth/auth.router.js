const router = require('express').Router()

const authServices = require('./auth.http')
const { registerUser } = require('../users/users.http')

router.post('/login', authServices.login)
router.post('/register', registerUser)

exports.router = router