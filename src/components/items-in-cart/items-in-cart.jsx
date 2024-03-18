import React from "react";
import "./items-in-cart.css";

export const ItemsInCart = ({ quantity = 2 }) => {
  return quantity > 0 ? <div className="items-in-cart">{quantity}</div> : null;
};
