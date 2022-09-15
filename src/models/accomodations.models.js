const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')
const user = require('./users.models')
const place = require('./places.models')

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
        type: DataTypes.TEXT,
        allowNull: false
    },
    guests: {
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
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    hostId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'userId',
        references: {
            model: user,
            key: 'id'
        }
    },
    score: {
        type: DataTypes.FLOAT,
    },
    placeId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'place_id',
        references: {
            model: place,
            key: 'id'
        }
    },
    commision: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        field: 'is_active'
    }
})


module.exports = accomodations