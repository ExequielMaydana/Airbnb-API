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
    createAt: {
        type: DataTypes.DATE,
        field: 'create_at'
    },
    updateAt: {
        type: DataTypes.DATE,
        field: 'update_at'
    }
})

module.exports = places