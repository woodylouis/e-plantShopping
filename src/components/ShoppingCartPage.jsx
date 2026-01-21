import React from "react";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { useCart } from "./CartContext";

const ShoppingCartPage = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  // 计算购物车中的总数量和总价格
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <h2 className="page-title">Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/products" className="continue-shopping-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-summary">
            <p className="total-items">Total Items: {totalItems}</p>
            <p className="total-price">Total Price: ${totalPrice.toFixed(2)}</p>
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>

          <div className="cart-actions">
            <Link to="/products" className="continue-shopping-button">
              Continue Shopping
            </Link>
            <button className="checkout-button" onClick={() => alert('Coming Soon: Checkout functionality is not implemented yet!')}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;
