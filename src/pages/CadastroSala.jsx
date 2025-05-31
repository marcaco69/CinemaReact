import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { getSalas, salvarSala, removerSala } from "../services/salaService";

export default function CadastroSala() {
  const [sala, setSala] = useState({ nome: "", capacidade: "", tipo: "2D" });
  const [salas, setSalas] = useState(getSalas());

  function handleChange(e) {
    setSala({ ...sala, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    salvarSala(sala);
    setSalas(getSalas());
    setSala({ nome: "", capacidade: "", tipo: "2D" });
  }

  function handleRemove(index) {
    removerSala(index);
    setSalas(getSalas());
  }

  return (
    <div>
      <h2>Cadastro de Sala</h2>
      <Input
        label="Nome"
        name="nome"
        value={sala.nome}
        onChange={handleChange}
      />
      <Input
        label="Capacidade"
        name="capacidade"
        value={sala.capacidade}
        onChange={handleChange}
      />
      <div className="mb-3">
        <label className="form-label">Tipo</label>
        <select
          className="form-select"
          name="tipo"
          value={sala.tipo}
          onChange={handleChange}
        >
          <option value="2D">2D</option>
          <option value="3D">3D</option>
          <option value="IMAX">IMAX</option>
        </select>
      </div>
      <Button label="Salvar" icon="save" onClick={handleSubmit} />

      <ul className="mt-4 list-group">
        {salas.map((s, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between"
          >
            {s.nome}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemove(i)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
