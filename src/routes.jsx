import { Routes, Route } from "react-router-dom";
import CadastroFilme from "./pages/CadastroFilme";
import CadastroSala from "./pages/CadastroSala";
import CadastroSessao from "./pages/CadastroSessao";
import ListaSessoes from "./pages/ListaSessoes";
import VendaIngresso from "./pages/VendaIngresso";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/filmes" element={<CadastroFilme />} />
      <Route path="/salas" element={<CadastroSala />} />
      <Route path="/sessoes" element={<CadastroSessao />} />
      <Route path="/listar" element={<ListaSessoes />} />
      <Route path="/venda/:id" element={<VendaIngresso />} />
    </Routes>
  );
}
