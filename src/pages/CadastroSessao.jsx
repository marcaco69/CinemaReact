import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { getFilmes } from "../services/filmeService";
import { getSalas } from "../services/salaService";
import { salvarSessao } from "../services/sessaoService";

export default function CadastroSessao() {
  const [sessao, setSessao] = useState({
    filme: "",
    sala: "",
    horario: "",
    preco: "",
    idioma: "legendado",
  });
  const filmes = getFilmes();
  const salas = getSalas();

  function handleChange(e) {
    setSessao({ ...sessao, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    salvarSessao(sessao);
    setSessao({
      filme: "",
      sala: "",
      horario: "",
      preco: "",
      idioma: "legendado",
    });
  }

  return (
    <div>
      <h2>Cadastro de Sessão</h2>
      <div className="mb-3">
        <label className="form-label">Filme</label>
        <select
          className="form-select"
          name="filme"
          value={sessao.filme}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          {filmes.map((f, i) => (
            <option key={i} value={f.titulo}>
              {f.titulo}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label">Sala</label>
        <select
          className="form-select"
          name="sala"
          value={sessao.sala}
          onChange={handleChange}
        >
          <option value="">Selecione</option>
          {salas.map((s, i) => (
            <option key={i} value={s.nome}>
              {s.nome}
            </option>
          ))}
        </select>
      </div>
      <Input
        label="Horário"
        name="horario"
        value={sessao.horario}
        onChange={handleChange}
      />
      <Input
        label="Preço"
        name="preco"
        value={sessao.preco}
        onChange={handleChange}
      />
      <div className="mb-3">
        <label className="form-label">Idioma</label>
        <select
          className="form-select"
          name="idioma"
          value={sessao.idioma}
          onChange={handleChange}
        >
          <option value="legendado">Legendado</option>
          <option value="dublado">Dublado</option>
        </select>
      </div>
      <Button label="Salvar" icon="save" onClick={handleSubmit} />
    </div>
  );
}
