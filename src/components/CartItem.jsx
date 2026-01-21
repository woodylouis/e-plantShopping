import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const CartItem = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  // 计算购物车总金额
  const totalCartAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // 计算购物车中的总数量
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // 增加数量
  const handleIncrement = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1);
  };

  // 减少数量
  const handleDecrement = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  // 删除商品
  const handleDelete = (id) => {
    removeFromCart(id);
  };

  // 结账按钮点击
  const handleCheckout = () => {
    alert('Coming Soon: Checkout functionality is not implemented yet!');
  };

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
          {/* 购物车总金额显示 */}
          <div className="cart-summary">
            <p className="total-items">Total Items: {totalItems}</p>
            <p className="total-price">Total Cart Amount: ${totalCartAmount.toFixed(2)}</p>
          </div>

          {/* 购物车商品列表 */}
          <div className="cart-items">
            {cartItems.map((item) => {
              // 计算每个商品的总成本
              const itemTotal = item.price * item.quantity;

              return (
                <div key={item.id} className="cart-item">
                  {/* 商品缩略图 */}
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>

                  {/* 商品名称和单价 */}
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
                  </div>

                  {/* 数量增减按钮 */}
                  <div className="cart-item-quantity">
                    <button
                      className="quantity-button"
                      onClick={() => handleDecrement(item.id, item.quantity)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button
                      className="quantity-button"
                      onClick={() => handleIncrement(item.id, item.quantity)}
                    >
                      +
                    </button>
                  </div>

                  {/* 每个商品的总成本 */}
                  <div className="cart-item-total">
                    Subtotal: ${itemTotal.toFixed(2)}
                  </div>

                  {/* 删除按钮 */}
                  <button
                    className="delete-button"
                    onClick={() => handleDelete(item.id)}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>
              );
            })}
          </div>

          {/* 购物车操作按钮 */}
          <div className="cart-actions">
            {/* 继续购物按钮 */}
            <Link to="/products" className="continue-shopping-button">
              Continue Shopping
            </Link>
            {/* 结账按钮 */}
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;