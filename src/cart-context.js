import { createContext, useContext, useReducer } from "react";

const CartItemsContext = createContext();

const useCartItems = () => useContext(CartItemsContext);

const CartItemsContextProvider = ({ children }) => {
  const addPriceReducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          totalPrice: state.totalPrice + action.payload,
          quantity: state.quantity + 1
        };
      case "DECREMENT":
        return {
          ...state,
          totalPrice: state.totalPrice - action.payload,
          quantity: state.quantity - 1
        };
      default:
        console.log("Error");
    }
  };
  const cart = { quantity: 0, totalPrice: 0 };

  const [state, dispatch] = useReducer(addPriceReducer, cart);

  return (
    <CartItemsContext.Provider value={({ state }, dispatch)}>
      {children}
    </CartItemsContext.Provider>
  );
};

export { CartItemsContextProvider, useCartItems };
