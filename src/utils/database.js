const { Sequelize } = require("sequelize");

require('dotenv').config()
const localHost = process.env.DB_HOST
const dbUser = process.env.DB_USER
const password = process.env.DB_PASSWORD
const dataB = process.env.DB

const db = new Sequelize({
  dialect: "postgres",
  host: localHost,
  username: dbUser,
  password: password,
  database: dataB,
  port: 5432,
});

module.exports = {
  db
};
