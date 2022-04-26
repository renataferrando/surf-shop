import React from "react";
import "./_products-layout.scss";
import Navigation from "../common/navigation/Navigation";

const ProductsLayout = ({ children, filters }) => {
  return (
    <div className="product-layout">
      <div className="products">{children}</div>
    </div>
  );
};

export default ProductsLayout;
