import { Person } from "./dataPerson.class";

export class Profissao extends Person {
  #profissao;
  constructor(nome, idade, altura, profissao) {
    super(nome, idade, altura);
    this.#profissao = profissao;
  }

  set profissao(profissao) {
    this.#profissao = profissao;
  }

  get profissao() {
    return this.#profissao;
  }

  apresentar() {
    console.log("===========Apresentacao=============");
    super.apresentar();
    console.log(`e sou ${this.profissao}`);
    console.log("====================================");
  }
}
