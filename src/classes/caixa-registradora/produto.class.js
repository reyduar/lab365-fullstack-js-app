export class Produto {
  #codigoBarra;
  #preco;
  #nome;

  constructor(codigoBarra, preco, nome) {
    this.#codigoBarra = codigoBarra;
    this.#preco = Number(preco);
    this.#nome = nome;
  }

  get codigoBarra() {
    return this.#codigoBarra;
  }
  set codigoBarra(codigoBarra) {
    this.#codigoBarra = codigoBarra;
  }
  get preco() {
    return this.#preco;
  }
  set preco(preco) {
    this.#preco = Number(preco);
  }
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
}
