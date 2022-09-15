const router = require('express').Router()
const passport = require('passport')

const reservationServices = require('./reservations.http')
require('../middlewares/auth.middleware')(passport)


router.route('/')
    .get(passport.authenticate('jwt', {session: false}) ,reservationServices.getAll)

router.route('/:id')
    .put(passport.authenticate('jwt', {session: false}), reservationServices.postReservation)
    .delete(passport.authenticate('jwt', {session: false}), reservationServices.deleteReservations)

exports.router = router