const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const reservations = db.define('reservations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    arrival: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    departure: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    accomodation_id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    adults: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kids: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    babies: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    pets: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    score: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    is_finished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    is_canceled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})

module.exports = reservations