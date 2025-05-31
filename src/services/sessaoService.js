const KEY = "sessoes";

export function getSessoes() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function salvarSessao(sessao) {
  const sessoes = getSessoes();
  sessoes.push(sessao);
  localStorage.setItem(KEY, JSON.stringify(sessoes));
}
