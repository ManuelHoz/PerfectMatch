const Partido = require("../models/partido.js")

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
  const { titulo, descripcion, capacidadMaxima } = req.body;

  if (!titulo || !descripcion || !capacidadMaxima) {
    return res.status(400).json({ error: "Content missing" });
  }

  const partido = await Partido.create({
    titulo,
    descripcion,
    capacidadMaxima,
  });

  res.status(201).json(partido);
};

// Actualizar un partido
const updatePartido = async (req, res) => {
  const { id } = req.params;
  const { titulo, descripcion, capacidadMaxima } = req.body;

  try {
    const partido = await Partido.findByPk(id);

    if (!partido) {
      return res.status(404).json({ error: "Partido not found" });
    }

    partido.titulo = titulo;
    partido.descripcion = descripcion;
    partido.capacidadMaxima = capacidadMaxima;

    await partido.save();

    res.status(200).json(partido);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

// Eliminar un partido
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
