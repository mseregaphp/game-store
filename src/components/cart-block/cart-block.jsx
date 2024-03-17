import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import "./cart-block.css";

export const CartBlock = () => {
  return (
    <div className="cart-block">
      <CiShoppingCart size={25} className="cart-block__icon" />
      <span className="cart-block__total-price">1580 грн.</span>
    </div>
  );
};
