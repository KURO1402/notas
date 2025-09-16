import { useState } from "react";

export default function NotaForm({ onAgregar }) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !contenido) return;
    onAgregar(titulo, contenido);
    setTitulo("");
    setContenido("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        className="w-full border rounded p-2 mb-2"
      />
      <textarea
        placeholder="Contenido"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
        className="w-full border rounded p-2 mb-2"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Agregar</button>
    </form>
  );
}
