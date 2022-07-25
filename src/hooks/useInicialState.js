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
  const removerFromCart = (indexValue) => {
    setState({
      ...state,
      cart: state.cart.filter((_y, index) => index !== indexValue),
    });
  };

  return {
    state,
    carToAdd,
    removerFromCart,
  };
};

export { useInitialState };
