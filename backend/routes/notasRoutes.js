const express = require("express");
const { listarNotas, agregarNota, eliminarNota } = require("../controllers/notasController");

const router = express.Router();

router.get("/", listarNotas);
router.post("/", agregarNota);
router.delete("/:id", eliminarNota);

module.exports = router;
