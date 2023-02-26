// We are using 3 types of Buttons in Our Application
// 1. default
// 2. Inverted
// 3. Google Sign In
import React from "react";
import "./button.style.scss";
const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};
const Button = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
