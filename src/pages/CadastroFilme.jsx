import { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { getFilmes, salvarFilme, removerFilme } from "../services/filmeService";

export default function CadastroFilme() {
  const [filme, setFilme] = useState({
    titulo: "",
    descricao: "",
    genero: "",
    classificacao: "",
    duracao: "",
    estreia: "",
  });
  const [filmes, setFilmes] = useState(getFilmes());

  function handleChange(e) {
    setFilme({ ...filme, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    salvarFilme(filme);
    setFilmes(getFilmes());
    setFilme({
      titulo: "",
      descricao: "",
      genero: "",
      classificacao: "",
      duracao: "",
      estreia: "",
    });
  }

  function handleRemove(index) {
    removerFilme(index);
    setFilmes(getFilmes());
  }

  return (
    <div>
      <h2>Cadastro de Filme</h2>
      <Input
        label="Título"
        name="titulo"
        value={filme.titulo}
        onChange={handleChange}
      />
      <Input
        label="Descrição"
        name="descricao"
        value={filme.descricao}
        onChange={handleChange}
      />
      <Input
        label="Gênero"
        name="genero"
        value={filme.genero}
        onChange={handleChange}
      />
      <Input
        label="Classificação"
        name="classificacao"
        value={filme.classificacao}
        onChange={handleChange}
      />
      <Input
        label="Duração"
        name="duracao"
        value={filme.duracao}
        onChange={handleChange}
      />
      <Input
        label="Data de Estreia"
        name="estreia"
        type="date"
        value={filme.estreia}
        onChange={handleChange}
      />
      <Button label="Salvar" icon="save" onClick={handleSubmit} />

      <ul className="mt-4 list-group">
        {filmes.map((f, i) => (
          <li
            key={i}
            className="list-group-item d-flex justify-content-between"
          >
            {f.titulo}
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
