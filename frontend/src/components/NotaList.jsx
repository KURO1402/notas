export default function NotaList({ notas, onEliminar }) {
    return (
      <ul>
        {notas.map((nota) => (
          <li key={nota.id} className="border p-3 rounded mb-2 flex justify-between">
            <div>
              <h2 className="font-semibold">{nota.titulo}</h2>
              <p>{nota.contenido}</p>
            </div>
            <button
              onClick={() => onEliminar(nota.id)}
              className="text-red-500 font-bold"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }
  