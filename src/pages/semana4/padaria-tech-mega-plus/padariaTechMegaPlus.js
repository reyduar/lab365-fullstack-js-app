import { CaixaRegistradora } from "../../../classes/caixa-registradora/caixa-registradora.class";
import { Produto } from "../../../classes/caixa-registradora/produto.class";
import { CaixaItem } from "../../../classes/caixa-registradora/caixa-item.class";
const dinheiro = 500;
const caixa = new CaixaRegistradora();
const produto1 = new Produto("001", 17.2, "Camiseta");
const produto2 = new Produto("002", 20.5, "Chapéu");
const produto3 = new Produto("003", 50.1, "Calçado");

caixa.adicionarProducto(produto1);
caixa.adicionarProducto(produto2);
caixa.adicionarProducto(produto3);
const produtos = caixa.produtos;

caixa.iniciarAtendimento("Neymar Jr");

const produtoItem1 = caixa.buscarProducto("001");
const produtoItem2 = caixa.buscarProducto("003");

caixa.adicionarCaixaItem(new CaixaItem(produtoItem1, 5));
caixa.adicionarCaixaItem(new CaixaItem(produtoItem2, 7));

caixa.fecharConta(dinheiro);
