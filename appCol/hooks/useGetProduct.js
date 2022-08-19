import { useEffect, useState } from "react";
import axios from "axios";
const UseGetProduct = (API) => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const response = await axios(API);
    console.log(response);
    if (response.status === 200) {
      const { info, results } = response.data;
      // setCharacters(results);
      // setTotalResults(info.count);
      // setPages(info.pages);
      // setPrevPages(info.prev);
      // setNextPages(info.next);
    }

    setProducts(response.data);
  }, []);
  return products;
};

export { UseGetProduct };
