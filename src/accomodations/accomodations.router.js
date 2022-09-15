const router = require('express').Router()
const passport = require('passport')


const accomodationsServices = require('./accomodations.http')

const reservationsServices = require('../reservations/reservations.http')
require('../middlewares/auth.middleware')(passport)

router.route('/')
    .get(accomodationsServices.getAll)

router.route('/:placeId/make-accommodations')
    .post(passport.authenticate('jwt', {session: false}) , accomodationsServices.postAccommodations)

router.route('/:id') 
    .get(accomodationsServices.getById)
    .put(passport.authenticate('jwt', {session: false}) ,accomodationsServices.updateAccommodations)
    .delete(passport.authenticate('jwt', {session: false}), accomodationsServices.deleteAccomm)

router.route('/:id/make-reservations')
    .post(passport.authenticate('jwt', {session: false}), reservationsServices.postReservation)

exports.router = router