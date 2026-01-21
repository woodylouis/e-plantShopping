import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./components/CartSlice";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="app">
          {/* 头部组件，显示购物车图标和数量 */}
          <Header />

          {/* 路由配置 */}
          <main className="main-content">
            {!showProducts ? (
              <div className="landing-page">
                <div className="landing-background">
                  <div className="landing-content">
                    <h1>Welcome to Paradise Nursery</h1>
                    <p className="landing-description">
                      Welcome to Paradise Nursery, your one-stop shop for beautiful houseplants.
                      We offer a wide variety of healthy and vibrant plants to bring life to your home or office.
                      Our mission is to make plant ownership accessible and enjoyable for everyone.
                    </p>
                    <button
                      className="get-started-button"
                      onClick={() => setShowProducts(true)}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<ProductListingPage />} />
                <Route path="/products" element={<ProductListingPage />} />
                <Route path="/cart" element={<CartItem />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
            )}
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
