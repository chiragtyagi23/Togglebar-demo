

import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer"


const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("tyagiCart");

  if (localCartData == []) {
    return [];
  } else{
    return JSON.parse(localCartData);
  }
}


const initialState = {
  //cart: [],
  cart: getLocalCartData(),
  total_item: "",
  total_price: "",
  shipping_fee: 50000,
};

const CartProvider = ({children}) => {

  const [state,dispatch] = useReducer(reducer, initialState)

  const addToCart = (id, amount, product) => {
    dispatch({type: "ADD_TO_CART", payload:{id, amount, product}})
  };

  // increment and decrement in cart items

  const setDecrease = (id) => {
    dispatch({type:"SET_DECREMENT", payload: id})
  }

  const setIncrease = (id) => {
    dispatch({type:"SET_INCREMENT", payload: id})
  }

  const removeItem = (id) => {
    dispatch({type: "REMOVE_ITEM" , payload: id});
  };

  //clear cart
  const clearCart = () => {
    dispatch({type: "CLEAR_CART"});
  }


  // to add data in local storage
  // refresh ka baad bhi data add raha cart ma

  useEffect(()=>{
    dispatch({type:"CART_TOTAL_ITEM"})
    dispatch({type: "CART_TOTAL_PRICE"})
    localStorage.setItem("tyagiCart", JSON.stringify(state.cart))
  }, [state.cart]);

  return (<CartContext.Provider value={{...state, addToCart, removeItem, clearCart, setDecrease, setIncrease}}>
  {children}
  </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
}


export {CartProvider, useCartContext};