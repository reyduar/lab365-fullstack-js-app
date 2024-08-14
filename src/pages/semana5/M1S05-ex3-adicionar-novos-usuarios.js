const usuarios = ["Pedro", "José", "Aderbal", "Danilo", "Luisa", "Vitoria"];

const criarNovoUsuario = (...newUsers) => {
  newUsers.forEach((newUser) => {
    if (typeof newUser === "string") {
      if (!usuarios.includes(newUser)) {
        usuarios.push(newUser);
      } else {
        console.log(`Usuario ${newUser} já existe na lista`);
      }
    } else {
      console.log(`Usuario ${newUser} não é um nome valido`);
    }
  });
  console.log(usuarios);
};

console.log("====================================");
console.log("[M1S05] Ex 3 - Função para adicionar novos usuários na lista");
console.log("====================================");
criarNovoUsuario("Carla", false, "Danilo", 12225); // teste vários usuarios
criarNovoUsuario("Zola"); // teste um usuario
console.log("====================================");
