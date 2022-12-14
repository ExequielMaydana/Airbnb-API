const reservationControllers = require('./reservations.controllers')


const getAll = (req, res) => {
    reservationControllers.getAllReservations()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json({message: err.message})
    })
}

const getById = (req, res) => {
    const id = req.params.id

    reservationControllers.getReservationById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const postReservation = (req, res) => {
    const userId = req.user.id
    const data = req.body
    const accomodationId = req.params.id

    reservationControllers.createReservation(data, userId, accomodationId)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

const deleteReservations = (req, res) => {
    const id = req.params.id
    reservationControllers.deletReservations(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
}


module.exports = {
    getAll,
    getById,
    postReservation,
    deleteReservations
}