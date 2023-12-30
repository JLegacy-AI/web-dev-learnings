import { useEffect } from "react";
import { ProductsContext } from "./hooks/products";
import { ProductsDispatchContext } from "./hooks/products";
import { useState } from "react";
import axios from "axios";
import { getLimitProductsAPI } from "./constant/api";
import ProductsContainer from "./components/ProductsContainer";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      axios
        .get(getLimitProductsAPI(10))
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    })();
  }, []);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatchContext.Provider value={setProducts}>
        <ProductsContainer />
      </ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
