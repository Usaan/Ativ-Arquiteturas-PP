const { Sequelize } = require("sequelize");
require("custom-env").env("development.local");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Conectado ao banco de dados");
} catch (error) {
  console.log("Houve algum erro na conexão com o banco de dado");
}

module.exports = sequelize;
