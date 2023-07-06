const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");


const Partido = sequelize.define(
  "Partido",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    NombreDelPartido: {
      type: DataTypes.STRING,
    },
    DescripcionDelEvento: {
      type: DataTypes.STRING,
    },
    capacidadMaxima: {
      type: DataTypes.INTEGER,
    },
    HorarioDeActividad: {
      type: DataTypes.STRING,
    },
    TipoDeActividad: {
      type: DataTypes.STRING,
    },
    AccionARealizar: {
      type: DataTypes.STRING,
    },
    CreadorPorNickname: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Partido;
