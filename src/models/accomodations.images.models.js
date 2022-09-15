const {DataTypes} = require('sequelize')
const {db} = require('../utils/database')

const accomodations_images = db.define('accomodations_images', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accomodationsId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'accomodations_id'
    },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isUrl: true
        }
    }
})


module.exports = accomodations_images