const Deportista = require("../models/deportista.js");

const getDeportistas = async (req, res) => {
  const deportistas = await Deportista.findAll({});
  res.send(deportistas);
};

const createDeportista = async (req, res) => {
  try {
    const { nombre, apellido, username, contraseña } = req.body;

    if (!nombre || !apellido || !username || !contraseña) {
      return res.status(400).json({ error: "content missing" });
    }

    const deportista = await Deportista.create({
      nombre,
      apellido,
      username,
      contraseña,
    });

    res.json(deportista).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const loginDeportista = async (req, res) => {
  try {
    const { username, contraseña } = req.body;

    if (!username || !contraseña) {
      return res.status(400).json({ error: "content missing" });
    }

    const deportista = await Deportista.findOne({ where: { username } });

    if (!deportista) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    if (deportista.contraseña !== contraseña) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    res.json({ message: "Login successful" }).status(200);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { getDeportistas, createDeportista, loginDeportista };
