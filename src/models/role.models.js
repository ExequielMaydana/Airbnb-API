const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const roles = db.define('roles', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING, // guest->invitado, host->anfitrion, admin
        allowNull: false
    }
})


module.exports = roles