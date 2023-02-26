import React from "react";
import "./cartItem.styles.scss";
const CartItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span>
          {quantity} * ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
