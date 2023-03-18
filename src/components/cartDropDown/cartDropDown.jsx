import React from "react";
import Button from "../button/button.component";
import "./cartDropDown.styles.scss";
import CartItem from "../cart-item/cartItem.component";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
const CartDropDown = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <Link to="/checkout">
        <Button to="/checkout">Go to Checkout</Button>
      </Link>
    </div>
  );
};

export default CartDropDown;
