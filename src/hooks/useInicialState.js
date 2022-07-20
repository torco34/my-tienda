import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const carToAdd = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removerFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    state,
    carToAdd,
    removerFromCart,
  };
};

export { useInitialState };
