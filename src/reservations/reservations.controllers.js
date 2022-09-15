const uuid = require('uuid')
const reservation = require('../models/reservations.models')
const user = require('../models/users.models')
const accommodations = require('../models/accomodations.models')


const getAllReservations = async() => {
    const data = await reservation.findAll({
        include: [
            {
                model: accommodations,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
                }
            },{
                model: user,
                as: 'user',
                attributes: {
                    exclude: ['password', 'createdAt', 'updatedAt', 'roleId']
                }
            }
            
        ],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
    })
    return data
}

const getReservationById = async(id)=> {
    const data = await reservation.findOne({
        where: {
            id: id
        },
        include: [{
            model: user,
            attributes: {
                exclude: ["createdAt", "updatedAt", "password",'roleId'],
            }
        },{
            model: accommodations,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'userId', 'placeId', 'hostId']
            }
        }],
        attributes: {
            exclude: ['createdAt', 'updatedAt']
        }
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
    editReservation,
    getReservationById
}