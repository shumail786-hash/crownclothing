import React, { useContext } from "react";
import Button from "../button/button.component";
import "./cartDropDown.styles.scss";
import CartItem from "../cart-item/cartItem.component";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router-dom";
const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);

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
