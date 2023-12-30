import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../hooks/products";
import ProductCard from "./ProductCard";
const ProductsContainer = () => {
  const products = useContext(ProductsContext);
  return (
    <div className="col-12 d-flex gap-5 flex-wrap justify-content-center ">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductsContainer;
