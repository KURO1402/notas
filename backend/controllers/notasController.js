const { getNotas, createNota, deleteNota } = require("../models/notasModel");

const listarNotas = async (req, res) => {
  try {
    const notas = await getNotas();
    res.json(notas);
  } catch (error) {
    res.status(500).json({ error: "Error al listar notas" });
  }
};

const agregarNota = async (req, res) => {
  try {
    const { titulo, contenido } = req.body;
    const nuevaNota = await createNota(titulo, contenido);
    res.json(nuevaNota);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar nota" });
  }
};

const eliminarNota = async (req, res) => {
  try {
    await deleteNota(req.params.id);
    res.json({ mensaje: "Nota eliminada" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar nota" });
  }
};

module.exports = { listarNotas, agregarNota, eliminarNota };
