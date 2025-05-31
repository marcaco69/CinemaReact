import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          🎬 Cinema
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/filmes">
                Filmes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/salas">
                Salas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sessoes">
                Sessões
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/listar">
                Lista de Sessões
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
