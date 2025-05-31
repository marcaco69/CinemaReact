import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
  return (
    <div className="container mt-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            🎬 Cinema App
          </Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="filmes">
                Filmes
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="salas">
                Salas
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="sessoes">
                Sessões
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="lista">
                Ver Sessões
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
