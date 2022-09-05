const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: 'postgres',
  password: 'Aguantelabirra1',
  database: 'Airbnb',
  port: 5432,
});

module.exports = {
  db
};
