const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("basedb", "root", "", {
  host: "localhost",
  dialect: "mariadb",
});

module.exports = sequelize;
