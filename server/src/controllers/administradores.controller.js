const Administrador = require("../models/administrador.js");

const getAdministradores = async (req, res) => {
  const administradores = await Administrador.findAll({});
  res.send(administradores);
};

const createAdministrador = async (req, res) => {
  try {
    const { nombre, apellido, username, contraseña } = req.body;

    if (!nombre || !apellido || !username || !contraseña) {
      return res.status(400).json({ error: "content missing" });
    }

    const administrador = await Administrador.create({
      nombre,
      apellido,
      username,
      contraseña,
    });

    res.json(administrador).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const loginAdministrador = async (req, res) => {
  try {
    const { username, contraseña } = req.body;

    if (!username || !contraseña) {
      return res.status(400).json({ error: "content missing" });
    }

    const administrador = await Administrador.findOne({ where: { username } });

    if (!administrador) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (administrador.contraseña !== contraseña) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.json({ message: "Login successful" }).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getAdministradores, createAdministrador, loginAdministrador };
