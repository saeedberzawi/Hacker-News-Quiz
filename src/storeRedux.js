import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./featuresRedux/cart/cartSlice";
import modalReducer from "./featuresRedux/modal/modalSlice";

export const store = configureStore({
  reducer: { cart: cartReducer, modal: modalReducer },
});
