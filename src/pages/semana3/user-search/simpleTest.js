// Lista de usuarios from json file
const usuarios = require("../../../data/users.json");

const userNameTest = "Tabitha_";

const buscarUsuarioPorUsername = (userName) => {
  if (userName) {
    return usuarios.filter(({ username }) =>
      username.toUpperCase().includes(userName.toUpperCase())
    );
  }
  return usuarios;
};

const imprimirResultado = (lista) => console.log(JSON.stringify(lista));

imprimirResultado(buscarUsuarioPorUsername(userNameTest));
