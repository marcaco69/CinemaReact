const KEY = "filmes";

export function getFilmes() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function salvarFilme(filme) {
  const filmes = getFilmes();
  filmes.push(filme);
  localStorage.setItem(KEY, JSON.stringify(filmes));
}

export function removerFilme(index) {
  const filmes = getFilmes();
  filmes.splice(index, 1);
  localStorage.setItem(KEY, JSON.stringify(filmes));
}
