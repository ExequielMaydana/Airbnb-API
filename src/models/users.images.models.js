const { DataTypes} = require('sequelize')
const { db } = require('../utils/database')


const users_images = db.define('users_images', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'user_id'
    }
})

module.exports = users_images