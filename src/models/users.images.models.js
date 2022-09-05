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
        allowNull: false,
        validate: {
            isUrl
        }
    },
    user_id: {
        type: DataTypes.UUID,
        allowNull: false
    }
})

module.exports = users_images