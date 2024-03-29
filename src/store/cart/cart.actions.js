import { CART_ACTION_TYPES } from "./cart.types";
import {createAction} from '../../utils/reducer/reducers.utils'

const addCartItems = (cartItems, productToAddInCart) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === productToAddInCart.id
    );  
    if (existingCartItem) {
      return cartItems.map((cartItem) => 
        cartItem.id === productToAddInCart.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
    return [...cartItems, { ...productToAddInCart, quantity: 1 }];
  };
  const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }  
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };
  
  const clearCartItem = (cartItems, cartItemToClear) =>
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

    export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)

    export const addItemsToCart = (cartItems, productToAdd) => {
        const newCartItems = addCartItems(cartItems, productToAdd);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
      };
      
      export const removeItemToCart = (cartItems, cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
      };
    
      export const clearItemFromCart = (cartItems, cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        return createAction(CART_ACTION_TYPES.SET_CART_ITEMS ,newCartItems);
      };
    