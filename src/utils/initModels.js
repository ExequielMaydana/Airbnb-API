const user = require('../models/users.models')
const users_images = require('../models/users.images.models')
const roles = require('../models/role.models')
const reservations = require('../models/reservations.models')

const accomodations = require('../models/accomodations.models')
const accomodations_images = require('../models/accomodations.images.models')
const places = require('../models/places.models')

const initModels = () => {
   
    // un rol tiene muchos usuarios pero un usuario tiene un solo rol.
    //? user <- roles
    roles.hasMany(user);
    user.belongsTo(roles)

    // un usuario tiene muchas imagenes pero una imagen tiene un solo usuario.
    //? user -> users_images
    user.hasMany(users_images)
    users_images.belongsTo(user)

    // un usuario puede ser dueno de muchos alojamientos y un alojamiento puede tener un solo dueno.
    //? user -> Acommodations (Host)
    user.hasMany(accomodations)
    accomodations.belongsTo(user)

    // relacion muchos a muchos
    //? user <-> accomodations
    user.belongsToMany(accomodations, {through: reservations});
    accomodations.belongsToMany(user, {through: reservations});

    // un alojamiento puede tener muchas imagenes pero dichas imagenes pertenecen a un solo alojamiento.
    //? Accomodations -> Accomodations_images
    accomodations.hasMany(accomodations_images)
    accomodations_images.belongsTo(accomodations)

    // un lugar puede tener muchos alojamientos pero un alojamiento pertenece a un mismo lugar.
    //? places -> accomodations
    places.hasMany(accomodations)
    accomodations.belongsTo(places)
}


module.exports = {
    initModels
}