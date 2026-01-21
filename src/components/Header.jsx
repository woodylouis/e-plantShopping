import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ cartItems }) => {
  const location = useLocation();
  
  // 计算购物车中的总数量
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <h1>Paradise Nursery</h1>
        </div>
        
        <nav className="header-nav">
          {location.pathname !== '/' && (
            <Link to="/" className="nav-link">Home</Link>
          )}
          {location.pathname !== '/products' && (
            <Link to="/products" className="nav-link">Shop</Link>
          )}
          {location.pathname !== '/about' && (
            <Link to="/about" className="nav-link">About Us</Link>
          )}
        </nav>
        
        <div className="header-cart">
          <Link to="/cart" className="cart-link">
            <svg className="cart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;