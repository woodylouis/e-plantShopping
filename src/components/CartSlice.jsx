import { useReducer } from "react";
import { CartContext } from "./CartContext";

// 初始状态
const initialState = {
  cartItems: [],
};

// Action类型
const ADD_ITEM = "ADD_ITEM";
const REMOVE_ITEM = "REMOVE_ITEM";
const UPDATE_QUANTITY = "UPDATE_QUANTITY";

// Reducer函数
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      // 检查商品是否已在购物车中
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id,
      );

      if (existingItemIndex !== -1) {
        // 如果商品已存在，增加数量
        const updatedItems = [...state.cartItems];
        updatedItems[existingItemIndex].quantity += 1;
        return {
          ...state,
          cartItems: updatedItems,
        };
      } else {
        // 如果商品不存在，添加到购物车
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }
    }

    case REMOVE_ITEM: {
      // 从购物车中删除商品
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }

    case UPDATE_QUANTITY: {
      // 更新商品数量
      if (action.payload.newQuantity <= 0) {
        // 如果数量为0，从购物车中删除商品
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id,
          ),
        };
      }

      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: action.payload.newQuantity };
          }
          return item;
        }),
      };
    }

    default:
      return state;
  }
};

// Action creators
const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});

const updateQuantity = (id, newQuantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, newQuantity },
});

// Cart Provider组件
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // 提供给组件的值
  const cartValue = {
    cartItems: state.cartItems,
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (id) => dispatch(removeItem(id)),
    updateQuantity: (id, newQuantity) =>
      dispatch(updateQuantity(id, newQuantity)),
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
};
