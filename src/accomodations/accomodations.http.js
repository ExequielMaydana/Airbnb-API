const accomodationsControllers = require('./accomodations.controllers')

const getAll = (req, res) => {
    accomodationsControllers.getAllAccomodations()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
}

const getById = (req, res) => {
    const id = req.params.id
    accomodationsControllers.getAccomodationById(id)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json({message: 'error'})
    })
}

const postAccommodations = (req, res) => {

    const data = req.body
    const hostId = req.user.id
    const placeId = req.params.placeId
    accomodationsControllers.createAccomodations(data, hostId, placeId)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

const updateAccommodations = (req, res) => {
    const id = req.params.id
    const data = req.body
    accomodationsControllers.editAccomodations(id, data)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(400).json({message: err.message, stack: err.stack})
    })
}

const deleteAccomm = (req, res) => {
    const id = req.params.id
    accomodationsControllers.deleteAccommodations(id)
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
    postAccommodations,
    updateAccommodations,
    deleteAccomm
}