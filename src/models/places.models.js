const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const places = db.define('places', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    continent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    create_at: {
        type: DataTypes.DATE,
    },
    update_at: {
        type: DataTypes.DATE
    }
})

module.exports = places