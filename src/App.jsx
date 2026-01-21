import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import ProductListingPage from "./components/ProductListingPage";
import ShoppingCartPage from "./components/ShoppingCartPage";
import AboutUs from "./components/AboutUs";

function App() {
  // 购物车状态管理
  const [cartItems, setCartItems] = useState([]);

  // 添加商品到购物车
  const addToCart = (plant) => {
    setCartItems((prevItems) => {
      // 检查商品是否已在购物车中
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === plant.id,
      );

      if (existingItemIndex !== -1) {
        // 如果商品已存在，增加数量
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        // 如果商品不存在，添加到购物车
        return [...prevItems, { ...plant, quantity: 1 }];
      }
    });
  };

  // 更新商品数量
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      // 如果数量为0，从购物车中删除商品
      removeFromCart(id);
      return;
    }

    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  // 从购物车中删除商品
  const removeFromCart = (id) => {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  return (
    <Router>
      <div className="app">
        {/* 头部组件，显示购物车图标和数量 */}
        <Header cartItems={cartItems} />

        {/* 路由配置 */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/products"
              element={<ProductListingPage addToCart={addToCart} />}
            />
            <Route
              path="/cart"
              element={
                <ShoppingCartPage
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
