const KEY = "salas";

export function getSalas() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function salvarSala(sala) {
  const salas = getSalas();
  salas.push(sala);
  localStorage.setItem(KEY, JSON.stringify(salas));
}

export function removerSala(index) {
  const salas = getSalas();
  salas.splice(index, 1);
  localStorage.setItem(KEY, JSON.stringify(salas));
}
