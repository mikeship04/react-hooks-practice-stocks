import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ buyStocks, handleSellStocks }) {

  const stockList = buyStocks.map((stock) => {
    return <Stock 
    key={stock.id} 
    stock={stock}
    onStockClick={handleSellStocks}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {
        stockList
      }
    </div>
  );
}

export default PortfolioContainer;
