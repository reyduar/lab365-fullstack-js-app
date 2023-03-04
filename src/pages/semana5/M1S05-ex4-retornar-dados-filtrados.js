usuarios = [
  { nome: "luis", idade: 26 },
  { nome: "norma", idade: 16 },
  { nome: "daiana", idade: 26 },
  { nome: "jorge", idade: 16 },
  { nome: "kauan", idade: 16 },
  { nome: "charles", idade: 26 },
  { nome: "marco", idade: 16 },
  { nome: "bruno", idade: 16 },
];

const listaMaiores18 = () => usuarios.filter((usuario) => usuario.idade > 18);
const listaMenores18 = () => usuarios.filter((usuario) => usuario.idade <= 18);
const imprimirLista = (lista) => JSON.stringify(lista);

console.log("====================================");
console.log("[M1S05] Ex 4 - Função para retornar dados filtrados");
console.log("====================================");
console.log(`Usuarios maiores a 18: ${imprimirLista(listaMaiores18())}`);
console.log(`Usuarios menores a 18: ${imprimirLista(listaMenores18())}`);
console.log("====================================");
