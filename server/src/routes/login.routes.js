const express = require("express");
const { loginDeportista } = require("../controllers/deportistas.controller.js");
const { loginAdministrador } = require("../controllers/administradores.controller.js");

const router = express.Router();

router.post("/login/deportista", loginDeportista);
router.post("/login/administrador", loginAdministrador);

module.exports = router;
