import { useParams } from "react-router-dom";
import { useState } from "react";
import { getSessoes } from "../services/sessaoService";
import { salvarVenda } from "../services/vendaService";
import Input from "../components/Input";
import Button from "../components/Button";

export default function VendaIngresso() {
  const { id } = useParams();
  const sessao = getSessoes()[id];
  const [venda, setVenda] = useState({
    nome: "",
    cpf: "",
    assento: "",
    pagamento: "",
  });

  function handleChange(e) {
    setVenda({ ...venda, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    salvarVenda({ ...venda, sessao });
    alert("Ingresso comprado com sucesso!");
    setVenda({ nome: "", cpf: "", assento: "", pagamento: "" });
  }

  return (
    <div>
      <h2>Venda de Ingresso</h2>
      <p>
        <strong>Filme:</strong> {sessao.filme}
      </p>
      <p>
        <strong>Sala:</strong> {sessao.sala}
      </p>
      <p>
        <strong>Horário:</strong> {sessao.horario}
      </p>
      <p>
        <strong>Idioma:</strong> {sessao.idioma}
      </p>
      <p>
        <strong>Preço:</strong> R$ {sessao.preco}
      </p>
      <hr />
      <Input
        label="Nome"
        name="nome"
        value={venda.nome}
        onChange={handleChange}
      />
      <Input label="CPF" name="cpf" value={venda.cpf} onChange={handleChange} />
      <Input
        label="Assento"
        name="assento"
        value={venda.assento}
        onChange={handleChange}
      />
      <Input
        label="Forma de Pagamento"
        name="pagamento"
        value={venda.pagamento}
        onChange={handleChange}
      />
      <Button label="Confirmar Compra" icon="cash" onClick={handleSubmit} />
    </div>
  );
}
