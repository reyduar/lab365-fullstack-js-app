const arrNames = [
  "Pedro",
  "José",
  "Aderbal",
  "Danilo",
  "Luisa",
  "Vitoria",
  "Luis",
  "Danilo",
  "José",
];

const removeDuplicateItems = (list) => {
  const uniqueNames = [];
  const duplicateNames = [];
  list.forEach((_, index) => {
    const indexDuplicated = uniqueNames.indexOf(list[index]);
    if (indexDuplicated === -1) {
      uniqueNames.push(list[index]);
    } else {
      duplicateNames.push(list[indexDuplicated]);
    }
  });
  return `${duplicateNames.join(", ")}, [${uniqueNames}]`;
};

console.log("==[M1S05] Ex 1 - Função deletar dados duplicados==");
console.log(removeDuplicateItems(arrNames));
console.log("================================================");
