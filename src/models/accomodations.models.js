const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const accomodations = db.define('accomodations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    guest: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    rooms: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    beds: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bathrooms: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hostId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'host_id'
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    placesId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'places_id'
    },
    commision: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


module.exports = accomodations