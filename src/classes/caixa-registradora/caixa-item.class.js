export class CaixaItem {
  #produto;
  #quantidade;

  constructor(produto, quantidade) {
    this.#produto = produto;
    this.#quantidade = Number(quantidade);
  }

  get produto() {
    return this.#produto;
  }
  get quantidade() {
    return this.#quantidade;
  }
  set produto(produto) {
    this.#produto = produto;
  }
  set quantidade(quantidade) {
    this.#quantidade = Number(quantidade);
  }
}
