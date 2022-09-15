const { Sequelize } = require("sequelize");

require('dotenv').config()
const password = process.env.PASSWORD_POSTGRESLQ
const dataB = process.env.DATABASE
const portt = process.env.PORT_POSTGRE

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: 'postgres',
  password: password,
  database: dataB,
  port: portt,
});

module.exports = {
  db
};
