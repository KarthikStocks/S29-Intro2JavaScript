import React from "react";
import "./App.css";

function App() {
  // 1. Using const for immutable values (Values that won't change)
  const companyName = "Apple";
  const stockSymbol = "AAPL";
  const initialPrice = 185.67;

  // 2. Using let for mutable values (Values that can change)
  let priceChange = "+1.23%";
  priceChange = "-0.50%"; // Later update for change in stock price

  // 3. Using var (not recommended in modern JavaScript)
  var marketStatus = "Open"; // Can be changed, but not recommended for modern code
  marketStatus = "Closed"; // Update the market status later

  // 4. Storing data in an array (for dynamic data storage)
  const stockArray = [
    { company: "Apple", symbol: "AAPL", price: 185.67, change: "+1.23%" },
    { company: "Tesla", symbol: "TSLA", price: 237.89, change: "-0.56%" },
    { company: "Amazon", symbol: "AMZN", price: 141.93, change: "+2.15%" },
    { company: "Microsoft", symbol: "MSFT", price: 319.45, change: "+0.76%" },
    { company: "Google", symbol: "GOOGL", price: 138.69, change: "-0.45%" },
    { company: "Meta", symbol: "META", price: 303.72, change: "+1.56%" },
    { company: "Netflix", symbol: "NFLX", price: 456.77, change: "-1.32%" },
    { company: "NVIDIA", symbol: "NVDA", price: 455.12, change: "+0.85%" },
    { company: "AMD", symbol: "AMD", price: 95.43, change: "+2.65%" },
    { company: "Intel", symbol: "INTC", price: 36.84, change: "+0.41%" },
    {
      company: "Berkshire Hathaway",
      symbol: "BRK.B",
      price: 330.45,
      change: "+1.11%",
    },
  ];

  // 5. Using an object for structured data (for storing stock info)
  const stockInfo = {
    company: "Apple",
    symbol: "AAPL",
    price: 185.67,
    change: "+1.23%",
  };

  // 6. Function for determining stock status
  const getMarketStatus = () => {
    return marketStatus === "Open" ? "Trading" : "Not Trading";
  };

  // 7. Using a loop to iterate through array data (to display each stock)
  const renderStockList = () => {
    return stockArray.map((stock, index) => (
      <div
        key={index}
        className="data-section"
        onMouseEnter={handleCardHover}
        onMouseLeave={handleCardLeave}
      >
        <h3 className="stock-name">
          {stock.company} ({stock.symbol})
        </h3>
        <p>
          <strong>Price:</strong> ${stock.price}
        </p>
        <p>
          <strong>Change:</strong>
          <span
            style={stock.change.includes("+") ? positiveChange : negativeChange}
          >
            {stock.change}
          </span>
        </p>
        <p>
          <strong>Status:</strong> {getMarketStatus()}
        </p>
      </div>
    ));
  };

  // Style for layout and data section
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial",
    lineHeight: "1.6",
    maxWidth: "90%",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const headerStyle = {
    textAlign: "center",
    color: "#333",
    borderBottom: "2px solid #ccc",
    paddingBottom: "10px",
    fontSize: "2rem",
    marginBottom: "30px",
  };

  const positiveChange = { color: "green", fontWeight: "bold" };
  const negativeChange = { color: "red", fontWeight: "bold" };

  // Flexbox container for the cards
  const flexRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "20px",
    flexWrap: "wrap",
    width: "100%",
  };

  // Hover effect for the cards
  const handleCardHover = (event) => {
    event.target.style.transform = "scale(1.05)";
    event.target.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
  };

  const handleCardLeave = (event) => {
    event.target.style.transform = "scale(1)";
    event.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Stock Market Overview</h1>

      <div style={flexRow}>
        {/* Rendering the dynamic stock data from array */}
        {renderStockList()}
      </div>
    </div>
  );
}

export default App;
