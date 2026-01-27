import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (err) {
      setError("Failed to load data");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const showMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  const visibleProducts = products.slice(0, visibleCount);
  console.log(visibleProducts);

  return (
    <div className="main">
      <h1 className="shop-title">VYBE STORE</h1>
      {error && <p className="error">{error}</p>}
      <div className="product-container">
        {visibleProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt="product" />
            <h3>{product.title}</h3>
            <p className="category">{product.category}</p>
            <p className="price">${product.price}</p>
          </div>
        ))}
      </div>

      {visibleCount < products.length && (
        <button onClick={showMore} className="show-more-btn">
          Show More
        </button>
      )}
    </div>
  );
};

export default App;
