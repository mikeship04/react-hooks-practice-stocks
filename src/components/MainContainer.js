import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [buyStocks, setBuyStocks] = useState([])
  const [stockState, setStockState] = useState('')
  const copyOfStocks = [...stocks]

  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(r => r.json())
    .then((stockData) => setStocks(stockData))
  }, [])

  const filteredStocks = stocks.filter((stock) => {
    if (stockState === '') {
      return true
    }
    return stock.type === stockState
  })

  function handleBuyStocks(stockToAdd) {
    const matchingStock = buyStocks.find((stock) => stock.id === stockToAdd.id) // if matchingStock is undefined means it's not in our array
    //console.log(matchingStock) // if it finds matching stock, return that stock, otherwise return undefined
    if (matchingStock === undefined) { // if boughtStocks is an object, it's truthy, not operater converts it to false, if undefined vica versa
      setBuyStocks([...buyStocks, stockToAdd])  // only runs if condition on line 19 evaluates to true
  }
}

  function handleSellStocks(stockToRemove) {
    setBuyStocks((buyStocks) => 
      buyStocks.filter((stock) => stock.id !== stockToRemove.id)
    )
  }
  
  // pass a function down that allows us to filter alphabetically and by ascending price
  function handleSortAlphabet() {
    copyOfStocks.sort((a, b) => {
      let textA = a.ticker
      let textB = b.ticker

      if (textA < textB) {
        return -1
      }

      if (textA > textB) {
        return 1
      }

      return 0
    })

    setStocks(copyOfStocks)
  }

  function handleSortPrice() {
    copyOfStocks.sort((a, b) => {
      let priceA = a.price
      let priceB = b.price
      return (priceA-priceB)
    })
    setStocks(copyOfStocks)
  }

  function handleStocktypeChange (e) {
    setStockState(e.target.value)
  }

  return (
    <div>
      <SearchBar 
      handleSortAlphabet={handleSortAlphabet} 
      handleSortPrice={handleSortPrice} 
      handleStocktypeChange={handleStocktypeChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer 
          stocks={filteredStocks} 
          handleBuyStocks={handleBuyStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer 
          buyStocks={buyStocks} 
          handleSellStocks={handleSellStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

// function handleBuyStocks(stockToAdd) {
//   const boughtStocks = buyStocks.find((stock) => {
//     if (stock.id === stockToAdd.id) {
//       return (buyStocks)
//     } else if (!boughtStocks) {
//       setBuyStocks([...buyStocks, stockToAdd])
//     }
//   })
// }
