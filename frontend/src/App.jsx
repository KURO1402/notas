import { useEffect, useState } from "react";

import NotaForm from "./components/NotaForm";
import NotaList from "./components/NotaList";

function App() {
  const [notas, setNotas] = useState([]);

  const cargarNotas = async () => {
    const res = await fetch("http://localhost:3001/api/notas");
    const data = await res.json();
    setNotas(data);
  };

  const agregarNota = async (titulo, contenido) => {
    const res = await fetch("http://localhost:3001/api/notas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo, contenido }),
    });
    const nueva = await res.json();
    setNotas([...notas, nueva]);
  };

  const eliminarNota = async (id) => {
    await fetch(`http://localhost:3001/api/notas/${id}`, { method: "DELETE" });
    setNotas(notas.filter((n) => n.id !== id));
  };

  useEffect(() => {
    cargarNotas();
  }, []);

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Notas App</h1>
      <NotaForm onAgregar={agregarNota} />
      <NotaList notas={notas} onEliminar={eliminarNota} />
    </div>
  );
}

export default App;
