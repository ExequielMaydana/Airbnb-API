const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const roles = db.define('roles', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = roles