export const saveStockList = (list) => {
  localStorage.setItem("stockList", JSON.stringify(list));
};

export const getStockList = () => {
  return JSON.parse(localStorage.getItem("stockList"));
};

export const getStockByProduct = (produto) => {
  const stockList = getStockList() || [];
  return stockList.find(
    ({ codigoBarra }) => codigoBarra === produto.codigoBarra
  );
};

export const updateStock = (produto, quantidade) => {
  const stockList = getStockList() || [];
  if (getStockByProduct(produto)) {
    const index = stockList.findIndex(
      ({ codigoBarra }) => codigoBarra === produto.codigoBarra
    );
    stockList[index] = {
      ...stockList[index],
      quantidade,
    };
  } else {
    const newStock = {
      codigoBarra: produto.codigoBarra,
      nome: produto.nome,
      quantidade,
    };
    stockList.push(newStock);
  }

  saveStockList(stockList);
};

export const resetStockList = () => {
  saveStockList([]);
};
