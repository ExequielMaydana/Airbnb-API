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
    host_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    places_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    commision: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})


module.exports = accomodations