const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const accomodations_images = db.define('accomodations_images', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accomodations_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = accomodations_images