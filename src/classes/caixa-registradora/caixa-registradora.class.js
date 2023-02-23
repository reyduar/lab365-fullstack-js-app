export class CaixaRegistradora {
  #cliente = null;
  #productos = [];
  #caixaItems = [];
  #dinheiro = 0;
  #troco = 0;

  iniciarAtendimento(cliente) {
    this.#cliente = cliente;
  }

  get cliente() {
    return this.#cliente;
  }

  adicionarCaixaItem(caixaItem) {
    this.#caixaItems.push(caixaItem);
  }

  get caixaItems() {
    return this.#caixaItems;
  }

  adicionarProducto(produto) {
    this.#productos.push(produto);
  }

  get produtos() {
    return this.#productos;
  }

  buscarProducto(codigoBarra) {
    return this.#productos.find((p) => p.codigoBarra === codigoBarra);
  }

  get dinheiro() {
    return this.#dinheiro;
  }

  get troco() {
    return this.#troco;
  }

  valorTotalDaConta() {
    let total = 0;
    this.#caixaItems.forEach((item) => {
      total += item.quantidade * item.produto.preco;
    });
    return total.toFixed(2);
  }

  fecharConta(dinheiro) {
    const total = this.valorTotalDaConta();
    if (dinheiro >= total) {
      this.#dinheiro = parseFloat(dinheiro);
      this.#troco = (this.dinheiro - total).toFixed(2);
      this.imprimirCupom();
    } else {
      console.log("====================================");
      console.log("Dinheiro é menor do valor total");
      console.log("====================================");
    }
  }

  imprimirCupom() {
    let results = ` Padaria Tech Mega Plus  \n`;
    results += `================================= \n`;
    results += `CLIENTE: R$ ${this.cliente}\n`;
    results += `================================= \n`;
    this.caixaItems.forEach((item) => {
      results += `+ ${item.produto.nome} ${item.quantidade} R$ ${
        item.quantidade * item.produto.preco
      }\n`;
    });
    results += `========================= \n`;
    results += `Total: R$ ${this.valorTotalDaConta()}\n`;
    results += `Dinheiro: R$ ${this.dinheiro}\n`;
    results += `Troco: R$ ${this.troco}\n`;
    results += `========================= \n`;
    console.log(results);
  }
}
