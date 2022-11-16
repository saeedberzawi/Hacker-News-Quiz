import React, { useEffect } from "react";
import CartContainer from "../../components/redux/CartContainer";
import Navbar from "../../components/redux/Navbar";
import "./redux.css";
import Modal from "../../components/redux/Modal";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "../../featuresRedux/cart/cartSlice";

const RedCart = () => {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
    // eslint-disable-next-line
  }, [cartItems]);
  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
};

export default RedCart;
