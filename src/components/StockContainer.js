import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, handleBuyStocks}) {

  const stockList = stocks.map((stock) => {
    return <Stock 
    onStockClick={handleBuyStocks}
    key={stock.id} 
    stock={stock}/>
  })

  return (
    <div>
      <h2>Stocks</h2>
      {stockList}
    </div>
  );
}

export default StockContainer;
