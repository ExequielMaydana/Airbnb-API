const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')
const user = require('./users.models')

const reservations = db.define('reservations', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id',
        references: {
            model: user,
            key: 'id'
        }
    },
    arrival: {
        type: DataTypes.DATE,
        allowNull: false
    },
    departure: {
        type: DataTypes.DATE,
        allowNull: false
    },
    accommodationId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'accommodation_id'
    },
    adults: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    kids: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    babies: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    pets: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    score: {
        type: DataTypes.DECIMAL,
    },
    isFinished: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_finished'
    },
    isCanceled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        field: 'is_canceled'
    }
})

module.exports = reservations