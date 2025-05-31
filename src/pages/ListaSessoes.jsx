import { Link } from "react-router-dom";
import { getSessoes } from "../services/sessaoService";

export default function ListaSessoes() {
  const sessoes = getSessoes();
  return (
    <div>
      <h2>Lista de Sessões</h2>
      <ul className="list-group">
        {sessoes.map((s, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong>{s.filme}</strong> - {s.sala} - {s.horario} - {s.idioma} -
              R$ {s.preco}
            </div>
            <Link to={`/venda/${i}`} className="btn btn-success btn-sm">
              Comprar Ingresso
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
