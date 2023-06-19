const express = require("express");
const { getPartidos, getOnePartido, createPartido, updatePartido, deletePartido } = require("../controllers/partidos.controller.js");

const router = express.Router();

router.get("/partido/", getPartidos);
router.get("/partido/:id", getOnePartido);
router.post("/partido/", createPartido);
router.put("/partido/:id", updatePartido);
router.delete("/partido/:id", deletePartido);

module.exports = router;
