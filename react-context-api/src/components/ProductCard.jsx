import React from "react";

const ProductCard = ({ title, image, price }) => {
  return (
    <div className="card border-0 col-md-3 col-10 mt-5 pt-4">
      <div className="d-flex sale mx-4">
        <div className="btn sale-btn">SALE</div>
      </div>
      <div className="card-body d-flex w-100 justify-content-center  align-items-center">
        <img
          className="img-thumbnail border-0 "
          src={image}
          height={"auto"}
          width={"120px"}
        />
      </div>

      <div className="px-5 text-center d-flex align-items-center  flex-column w-100  h-auto ">
        <h5 className="card-title fw-light">{title}</h5>
        <p className="card-text fw-bolder">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
