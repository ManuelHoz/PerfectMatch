const Partido = require("../models/partido.js");

// Obtener todos los partidos
const getPartidos = async (req, res) => {
  const partidos = await Partido.findAll({});
  res.send(partidos).status(200);
};

// Obtener un partido
const getOnePartido = async (req, res) => {
  const { id } = req.params;
  const partido = await Partido.findByPk(id);

  if (!partido) {
    return res.status(404).json({ error: "Partido not found" });
  }

  res.status(200).json(partido);
};

// Crear un partido
const createPartido = async (req, res) => {
  const {
    NombreDelPartido,
    DescripcionDelEvento,
    capacidadMaxima,
    HorarioDeActividad,
    TipoDeActividad,
    AccionARealizar,
    CreadorPorNickname,
  } = req.body;

  try {
    const partido = await Partido.create({
      NombreDelPartido,
      DescripcionDelEvento,
      capacidadMaxima,
      HorarioDeActividad,
      TipoDeActividad,
      AccionARealizar,
      CreadorPorNickname,
    });

    res.status(201).json(partido);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Actualizar un partido
const updatePartido = async (req, res) => {
  const { id } = req.params;
  const {
    NombreDelPartido,
    DescripcionDelEvento,
    capacidadMaxima,
    HorarioDeActividad,
    TipoDeActividad,
    AccionARealizar,
    CreadorPorNickname,
  } = req.body;

  try {
    const partido = await Partido.findByPk(id);

    if (!partido) {
      return res.status(404).json({ error: "Partido not found" });
    }
    partido.NombreDelPartido = NombreDelPartido;
    partido.DescripcionDelEvento = DescripcionDelEvento;
    partido.capacidadMaxima = capacidadMaxima;
    partido.HorarioDeActividad = HorarioDeActividad;
    partido.TipoDeActividad = TipoDeActividad;
    partido.AccionARealizar = AccionARealizar;
    partido.CreadorPorNickname = CreadorPorNickname;

    await partido.save();

    res.status(200).json(partido);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const deletePartido = async (req, res) => {
  const { id } = req.params;

  try {
    const partido = await Partido.findByPk(id);

    if (!partido) {
      return res.status(404).json({ error: "Partido not found" });
    }

    await partido.destroy();

    res.status(204).json("Partido deleted");
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getPartidos,
  getOnePartido,
  createPartido,
  updatePartido,
  deletePartido,
};
