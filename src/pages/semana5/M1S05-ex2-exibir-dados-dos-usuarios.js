const usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];
const frutas = ["Banana", "Morango", "Maca", "Uva", "Pera", "Laranja"];
frutas.reverse();

const listaAgrupada = usuarios.map(
  (usuario, index) => `${usuario}-${frutas[index]}`
);
console.log("====================================");
console.log("[M1S05] Ex 2 - Função de exibir dados dos usuários");
console.log("====================================");
console.log(listaAgrupada);
console.log("====================================");
