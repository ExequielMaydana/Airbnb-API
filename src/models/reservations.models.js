const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const reservations = db.define('reservations', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id'
    },
    arrival: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    departure: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    accomodationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'accomodation_id'
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
    isFinished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
        field: 'is_finished'
    },
    isCanceled: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false.valueOf,
        field: 'is_canceled'
    }
})

module.exports = reservations