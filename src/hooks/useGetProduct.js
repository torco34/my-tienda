import { useEffect, useState } from "react";
import axios from "axios";
const UseGetProduct = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);

    setProducts(response.data);
  }, []);
  return products;
};

export { UseGetProduct };
