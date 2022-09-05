const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const roles = db.define('roles', {
    id: {
        type: DataTypes.UUID,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})


module.exports = roles