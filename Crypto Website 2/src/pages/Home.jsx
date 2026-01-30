import { useEffect, useState } from "react";
import { fetchCryptos } from "../api/coinGecko";
import CryptoCard from "../components/CryptoCard";

const Home = () => {
  const [cryptoList, setCryptoList] = useState([]);
  const [isloading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState("");

  useEffect(() => {
    fetchCryptoData();
  }, []);

  const fetchCryptoData = async () => {
    try {
      const data = await fetchCryptos();
      setCryptoList(data);
    } catch (err) {
      console.error("Error fetching crypto: ", err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="app">
      <div className="controls">
        <div className="filter-group"></div>
        <div className="view-toggle">
          <button
            className={viewMode === "grid" ? "active" : ""}
            onClick={() => setViewMode("grid")}
          >
            Grid
          </button>
          <button
            className={viewMode === "list" ? "active" : ""}
            onClick={() => setViewMode("list")}
          >
            List
          </button>
        </div>
      </div>
      {isloading ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Loading crypto data...</p>
        </div>
      ) : (
        <div className={`crypto-container ${viewMode}`}>
          {cryptoList.map((crypto, key) => (
            <CryptoCard crypto={crypto} key={key} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
