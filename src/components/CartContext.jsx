import { createContext, useContext } from 'react';

// 创建购物车上下文
export const CartContext = createContext();

// 自定义Hook，用于访问购物车上下文
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};