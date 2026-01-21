import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { CartProvider } from "./components/CartSlice";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          {/* 头部组件，显示购物车图标和数量 */}
          <Header />

          {/* 路由配置 */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductListingPage />} />
              <Route path="/cart" element={<ShoppingCartPage />} />
              <Route path="/about" element={<AboutUs />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
