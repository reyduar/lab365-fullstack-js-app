import {
  CaixaRegistradora,
  Produto,
  CaixaItem,
  Estoque,
} from "../../../classes";

const caixa = new CaixaRegistradora();
const estoque = new Estoque();

function criarProdutos() {
  caixa.adicionarProducto(new Produto("001", 109, "Thermite"));
  caixa.adicionarProducto(new Produto("002", 300, "Methylamine"));
  caixa.adicionarProducto(new Produto("003", 500, "Aluminum Amalgam"));
}

// Teste para aumentar o estoque
function compra() {
  estoque.limparEstoque();
  const produtoItem1 = caixa.buscarProducto("001");
  const produtoItem2 = caixa.buscarProducto("002");
  const produtoItem3 = caixa.buscarProducto("003");

  estoque.entradaEstoque(produtoItem1, 1000);
  estoque.entradaEstoque(produtoItem2, 5000);
  estoque.entradaEstoque(produtoItem3, 25000);
  // Imprimos a lista de inventário atualizada
  estoque.consultarListagemDeEstoque();
}

// Teste para reduzir o estoque
function venda() {
  const dinheiro = 250000;
  caixa.iniciarAtendimento("Jesse Pinkman");

  const produtoItem1 = caixa.buscarProducto("001");
  const produtoItem2 = caixa.buscarProducto("002");
  const produtoItem3 = caixa.buscarProducto("003");

  const caixaItems = [
    { produto: produtoItem1, quantidade: 1500 }, // Teste para criar um erro de insuficiência
    { produto: produtoItem2, quantidade: 20 },
    { produto: produtoItem3, quantidade: 10 },
  ];

  caixaItems.forEach(({ produto, quantidade }) => {
    if (!estoque.consultaEstoque(produto, quantidade)) {
      caixa.adicionarCaixaItem(new CaixaItem(produto, quantidade));
      estoque.saiaEstoque(produto, quantidade);
    } else {
      console.error(`${produto.nome} a quantidade em estoque é insuficiente`);
    }
  });

  caixa.fecharConta(dinheiro);
  // Imprimos a lista de inventário atualizada
  estoque.consultarListagemDeEstoque();
}

criarProdutos();
compra();
venda();
