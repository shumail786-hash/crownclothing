import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navigation.component.scss";
import { Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cartIconComponent/cartIcon.component";
import CartDropDown from "../../components/cartDropDown/cartDropDown";
import { CartContext } from "../../context/cart.context";
import { selectCurrentUser } from "../../store/user/user.selector";
const Navigation = () => {
  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartContext);
  // console.log(currentUser);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
