import {
  getStockList,
  getStockByProduct,
  updateStock,
  resetStockList,
} from "../../services/estoque.service";

export class Estoque {
  entradaEstoque(produto, quantidade) {
    const stock = getStockByProduct(produto);
    const stockQty = stock?.quantidade || 0;
    updateStock(produto, stockQty + Number(quantidade));
  }

  saiaEstoque(produto, quantidade) {
    const stock = getStockByProduct(produto);
    const stockQty = stock?.quantidade || 0;
    updateStock(produto, stockQty - Number(quantidade));
  }

  consultaEstoque(produto, quantidade) {
    const stock = getStockByProduct(produto);
    const stockQty = stock?.quantidade || 0;
    return Number(quantidade) > stockQty;
  }

  consultarListagemDeEstoque() {
    const stockList = getStockList() || [];
    if (!!stockList.length) {
      let results = `================================= \n`;
      results += `Listagem de Inventário\n`;
      results += `================================= \n`;
      results += `    Codigo  |   Nome  |  Quantidade\n`;
      stockList.forEach(({ codigoBarra, nome, quantidade }) => {
        results += `- ${codigoBarra} | ${nome} | ${quantidade} \n`;
      });
      results += `================================= \n`;
      console.log(results);
    }
  }

  limparEstoque() {
    resetStockList();
  }
}
