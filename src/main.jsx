import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import CadastroFilme from "./pages/CadastroFilme";
import CadastroSala from "./pages/CadastroSala";
import CadastroSessao from "./pages/CadastroSessao";
import ListaSessoes from "./pages/ListaSessoes";
import VendaIngresso from "./pages/VendaIngresso";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="filmes" element={<CadastroFilme />} />
          <Route path="salas" element={<CadastroSala />} />
          <Route path="sessoes" element={<CadastroSessao />} />
          <Route path="lista" element={<ListaSessoes />} />
          <Route path="venda/:id" element={<VendaIngresso />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
