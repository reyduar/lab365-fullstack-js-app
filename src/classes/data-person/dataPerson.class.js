export class Person {
  #nome;
  #idade;
  #altura;

  constructor(nome, idade, altura) {
    this.#nome = nome;
    this.#idade = idade;
    this.#altura = altura;
  }

  set nome(nome) {
    this.#nome = nome;
  }

  get nome() {
    return this.#nome;
  }

  set idade(idade) {
    this.#idade = idade;
  }

  get idade() {
    return this.#idade;
  }

  set altura(altura) {
    this.#altura = altura;
  }

  get altura() {
    return this.#altura;
  }

  apresentar() {
    let results = `Ola me llamo: ${this.nome}  \n`;
    results += `tenho ${this.idade} anos\n`;
    results += `e ${this.altura} de altura\n`;
    console.log(results);
  }
}
