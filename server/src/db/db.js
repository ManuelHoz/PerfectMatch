const Sequelize = require("sequelize");

const sequelize = new Sequelize("PerfectMatch", "PerfectMatch", "1234567890", {
  host: "POSTGRES",
  dialect: "postgres",
});

module.exports = sequelize;
