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
  return {
    state,
    carToAdd,
  };
};

export { useInitialState };
