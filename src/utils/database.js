ls
const { Sequelize } = require("sequelize");

require('dotenv').config()
const dbUser = process.env.DB_USER
const password = process.env.DB_PASSWORD
const dataB = process.env.DB
const localHost = process.env.DB_HOST

const db = new Sequelize({
  dialect: "postgres",
  host: localHost,
  username: dbUser,
  password: password,
  database: dataB,
  port: 5432,
  logging: false,
  dialectOptions: 
    process.env.NODE_ENV === 'production'
    ? {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    }
    : {},
});

module.exports = {
  db
};
