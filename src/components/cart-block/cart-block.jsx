import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import "./cart-block.css";
import { useSelector } from "react-redux";
import { CartMenu } from "../cart-menu/cart-menu";
import { calcTotalPrice } from "../utils";
import { ItemsInCart } from "../items-in-cart/items-in-cart";

export const CartBlock = () => {
  //видимость меню
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);

  const items = useSelector((state) => state.cart.itemsInCart);

  //общая цена
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length} />
      <CiShoppingCart
        size={25}
        className="cart-block__icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="cart-block__total-price">{totalPrice} uah</span>
      ) : null}
      {isCartMenuVisible && <CartMenu items={items} onClick={() => null} />}
    </div>
  );
};
