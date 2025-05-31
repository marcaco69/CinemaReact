const KEY = "vendas";

export function getVendas() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function salvarVenda(venda) {
  const vendas = getVendas();
  vendas.push(venda);
  localStorage.setItem(KEY, JSON.stringify(vendas));
}
