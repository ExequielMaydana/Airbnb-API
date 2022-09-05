const user = require('../models/users.models')
const users_images = require('../models/users.images.models')
const roles = require('../models/role.models')
const reservations = require('../models/reservations.models')

const accomodations = require('../models/accomodations.models')
const accomodations_images = require('../models/accomodations.images.models')
const places = require('../models/places.models')

const initModels = () => {
    // un usuario tiene muchas imagenes pero una imagen tiene un solo usuario.
    user.hasMany(users_images)
    users_images.belongsTo(user)
    
    // un rol tiene muchos usuarios pero un usuario tiene un solo rol.
    roles.hasMany(user)
    user.belongsTo(roles)

    // un usuario puede tener muchas reservaciones pero una reservacion solo pertenece a un usuario.
    user.hasMany(reservations)
    reservations.belongsTo(user)

    // un alojamiento puede tener muchas reservaciones pero una reservacion solo puede tener un solo alojamiento.
    accomodations.hasMany(reservations)
    reservations.belongsTo(accomodations)

    // un alojamiento puede tener muchas imagenes pero dichas imagenes pertenecen a un solo alojamiento.
    accomodations.hasMany(accomodations_images)
    accomodations_images.belongsTo(accomodations)

    // un lugar puede tener muchos alojamientos pero un alojamiento pertenece a un mismo lugar.
    places.hasMany(accomodations)
    accomodations.belongsTo(places)

}


module.exports = {
    initModels
}