import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        );
        const data = await res.json();
        setCryptoData(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchCrypto();
  }, []);

  const filteredCrypto = cryptoData.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()),
  );

  const displayCoins = search ? filteredCrypto : cryptoData.slice(0, 20);

  return (
    <div className="container">
      <h1>CoinPulse</h1>

      <input
        type="text"
        placeholder="Search coin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {!loading && <p className="count">Showing {displayCoins.length} coins</p>}

      {!loading && displayCoins.length === 0 && (
        <p className="empty">No coins found</p>
      )}

      {loading ? (
        <p className="loading">Fetching market data...</p>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Coin</th>
                <th>Market Cap</th>
                <th>Price (INR)</th>
                <th>Circulating Supply</th>
              </tr>
            </thead>

            <tbody>
              {displayCoins.map((coin) => (
                <tr key={coin.id}>
                  <td>{coin.market_cap_rank}</td>
                  <td className="name-cell">
                    <img src={coin.image} alt="logo" />
                    <div>
                      <span className="coin-name">{coin.name}</span>
                      <span className="coin-symbol">
                        {coin.symbol.toUpperCase()}
                      </span>
                    </div>
                  </td>
                  <td>₹ {coin.market_cap.toLocaleString()}</td>
                  <td>₹ {coin.current_price.toLocaleString()}</td>
                  <td>{coin.circulating_supply.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default App;
