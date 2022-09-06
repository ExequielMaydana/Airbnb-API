const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')

const user = db.define('user', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'first_name'
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'last_name'
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.INTEGER ,
        allowNull: false,
        validate: {
            min: 8
        }
    },
    birthdayDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'birthday_date'
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    addres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // role: {
    //     type: DataTypes.UUID,
    //     allowNull: false,
    //     defaultValue: 'normal'
    // },
    profileImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: 'profile_image'
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        field: 'is_active' 
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
})


module.exports = user