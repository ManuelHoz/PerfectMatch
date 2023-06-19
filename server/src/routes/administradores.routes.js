const express = require("express");
const { getAdministradores, createAdministrador } = require("../controllers/administradores.controller.js");

const router = express.Router();

router.get("/administrador/", getAdministradores);
router.post("/administrador/", createAdministrador);

module.exports = router;
