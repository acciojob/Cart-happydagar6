import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  createContext,
} from "react";
import { cartItemsData } from "./data";

const AppContext = createContext(); // create context object

const initialState = {
  cart: cartItemsData,
  total: 0,
  amount: 0,
};

const reducer = (state, action) => {
  if (action.type === "CLEAR") {
    return { ...state, cart: [] };
  }

  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem; // destructure price and amount from cartItem
        const itemTotal = price * amount; // calculate total price for each item
        cartTotal.total += itemTotal; // add item total to cart total
        cartTotal.amount += amount; // add item amount to cart amount
        return cartTotal; // return the updated cart total and amount
      },
      {
        total: 0,
        amount: 0,
      },
    );
    total = parseFloat(total.toFixed(2)); // round total to 2 decimal places
    return { ...state, total, amount }; // return updated state with new total and amount
  }
  return state; // return current state if action type is not recognized
};


const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const clearCart = () => {
        dispatch({ type: "CLEAR" });
    };
    const remove = (id) => {
        dispatch({ type: "REMOVE", payload: id });
    };
    const decrease = (id) => {
        dispatch({ type: "DECREASE", payload: id });
    };
    const increase = (id) => {
        dispatch({ type: "INCREASE", payload: id });
    };

    React.useEffect(() => {
        dispatch({ type: "GET_TOTALS" });
    }, [state.cart]);

    return (
        <AppContext.Provider value={{ ...state, clearCart, remove, increase, decrease }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };