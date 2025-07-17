import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Bodypart from "./pages/Bodypart";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar />
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/cart" style={{ color: "#ff6600", fontWeight: "600" }}>
          🛒 ตะกร้าสินค้า ({cartItems.length})
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/bodypart" element={<Bodypart addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onRemoveItem={removeFromCart} />}
        />
        <Route
          path="/product/:id"
          element={<ProductDetail addToCart={addToCart} />}
        />
      </Routes>
    </div>
  );
}

export default App;
