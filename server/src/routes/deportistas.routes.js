const express = require("express");
const { getDeportistas, createDeportista,  getPartidosByDeportista } = require("../controllers/deportistas.controller.js");

const router = express.Router();

router.get("/deportista/", getDeportistas);
router.post("/deportista/", createDeportista);


module.exports = router;
