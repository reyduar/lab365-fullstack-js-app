import { CaixaRegistradora, Produto, CaixaItem } from "../../../classes";

function venda1() {
  const dinheiro = 500;
  const caixa = new CaixaRegistradora();
  const produto1 = new Produto("001", 17.2, "Camiseta");
  const produto2 = new Produto("002", 20.5, "Chapéu");
  const produto3 = new Produto("003", 50.1, "Calçado");

  caixa.adicionarProducto(produto1);
  caixa.adicionarProducto(produto2);
  caixa.adicionarProducto(produto3);

  caixa.iniciarAtendimento("Neymar Jr");

  const produtoItem1 = caixa.buscarProducto("001");
  const produtoItem2 = caixa.buscarProducto("003");

  caixa.adicionarCaixaItem(new CaixaItem(produtoItem1, 5));
  caixa.adicionarCaixaItem(new CaixaItem(produtoItem2, 7));

  caixa.fecharConta(dinheiro);
}

function venda2() {
  const dinheiro = 1000;
  const caixa = new CaixaRegistradora();
  const produto1 = new Produto("004", 50.0, "Luvas");
  const produto2 = new Produto("005", 24.5, "Toalha");
  const produto3 = new Produto("006", 101.1, "Bola");

  caixa.adicionarProducto(produto1);
  caixa.adicionarProducto(produto2);
  caixa.adicionarProducto(produto3);

  caixa.iniciarAtendimento("Messi");

  const produtoItem1 = caixa.buscarProducto("005");
  const produtoItem2 = caixa.buscarProducto("006");

  caixa.adicionarCaixaItem(new CaixaItem(produtoItem1, 1));
  caixa.adicionarCaixaItem(new CaixaItem(produtoItem2, 1));

  caixa.fecharConta(dinheiro);
}

venda1();
venda2();
