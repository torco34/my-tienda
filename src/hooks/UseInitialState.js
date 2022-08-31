import { useState } from "react";
import useInitialState from "../inicialstaste";

const UseInitialState = () => {
  const [state, setState] = useState(useInitialState);
  const addTocart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id != payload.id),
    });
  };

  return {
    addTocart,
    removeFromCart,
    state,
  };
};

export { UseInitialState };
