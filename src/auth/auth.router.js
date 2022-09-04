const router = require('express').Router()

const authServices = require('./auth.http')
const {} = require('../users/users.http')

router.post('/login', authServices.login)
router.post('/register',)