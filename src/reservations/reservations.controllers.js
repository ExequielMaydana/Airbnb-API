const uuid = require('uuid')
const reservation = require('../models/reservations.models')
const user = require('../models/users.models')
const accommodations = require('../models/accomodations.models')


const getAllReservations = async() => {
    const data = await reservation.findAll({
        include: [
            {
                model: user
            },
            {
                model: accommodations
            }
        ]
    })

    return data
}

const createReservation = async(data, userId, accommodationId) => {
    const {isFinished, isCanceled, ...restOfData} = data
    const newReservation = await reservation.create({
        ...restOfData,
        id: uuid.v4(),
        userId: userId,
        accommodationId: accommodationId,
    })
    return newReservation
}

const editReservation = async (reservationId, data) => {
   const {id, ...restOfData} = data
   const response = await reservation.update(restOfData, {
    where: {
        id: reservationId
    }
   })
   return response
}

const deletReservations = async (id) => {
    const response = await reservation.destroy({
        where: {
            id
        }
    })
    return response
}


module.exports = {
    getAllReservations,
    createReservation,
    deletReservations,
    editReservation
}