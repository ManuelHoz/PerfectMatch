const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Administrador = sequelize.define(
  "Administrador",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    contraseña: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Administrador;
