const pool = require("../db");

const getNotas = async () => {
  const [rows] = await pool.query("SELECT * FROM notas");
  return rows;
};

const createNota = async (titulo, contenido) => {
  const [result] = await pool.query(
    "INSERT INTO notas (titulo, contenido) VALUES (?, ?)",
    [titulo, contenido]
  );
  return { id: result.insertId, titulo, contenido };
};

const deleteNota = async (id) => {
  await pool.query("DELETE FROM notas WHERE id = ?", [id]);
};

module.exports = { getNotas, createNota, deleteNota };
