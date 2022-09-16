const { DataTypes } = require('sequelize')
const { db } = require('../utils/database')
const role = require('./role.models')


const user = db.define('user', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
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
    gender: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    birthdayDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: 'birthday_date'
    },
    dni: {
        type: DataTypes.STRING,
        unique: true
    },
    roleId: {
        type: DataTypes.UUID,
        allowNull: false,
        field: 'role_id',
        references: {
            model: role,
            key: 'id'
        }
    },
    address: {
        type: DataTypes.STRING,
    },
    profileImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: 'profile_image'
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'active', //active, non-active, deleted, suspended
    },
    verified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'created_at'
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: 'updated_at'
    }
})


module.exports = user