import { useReducer, useState } from "react";
import { useCartItems } from "./cart-context";

export const CartItems = () => {
  const itemsInCart = [
    {
      id: 1,
      name: "kala chasma",
      price: 1000
    },
    {
      id: 2,
      name: "laal chhadi",
      price: 500
    },
    {
      id: 3,
      name: "jalebi",
      price: 50
    },
    {
      id: 4,
      name: "japani joota",
      price: 10000
    }
  ];

  const { state, dispatch } = useCartItems();
  return (
    <>
      <div>
        <h1>Items In Cart</h1>
        <h3>Total Price: {state.totalPrice} Rs</h3>
        <h3>Quantity: {state.quantity}</h3>
      </div>
      <h1>Items</h1>
      {itemsInCart.map((items) => (
        <div>
          <h2>{items.name}</h2>
          <h4>{items.price} Rs</h4>
          <button
            onClick={() =>
              dispatch({ type: "INCREMENT", payload: items.price })
            }
          >
            Add To Cart
          </button>
          <button
            onClick={() =>
              dispatch({ type: "DECREMENT", payload: items.price })
            }
          >
            Remove To Cart
          </button>
        </div>
      ))}
    </>
  );
};
