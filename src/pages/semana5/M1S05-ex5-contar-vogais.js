const contarVogais = (palabra) => {
  let contador = 0;
  const arrVocais = ["a", "e", "i", "o", "u"];
  if (typeof palabra === "string") {
    const arrPalabras = palabra.split("");
    arrPalabras.forEach((letra) => {
      if (arrVocais.includes(letra.toLowerCase())) {
        contador += 1;
      }
    });
  } else {
    return `${palabra} não é uma palavra válido`;
  }
  return contador === 0
    ? `A palavra não conste nenhuma vogal`
    : `Total vogais: ${contador}`;
};

console.log("====================================");
console.log("[M1S05] Ex 5 - Função para contar vogais");
console.log("====================================");
console.log(contarVogais("algOrItmO AAbbuuU"));
console.log(contarVogais(1124545)); // teste error
console.log("====================================");
