import React, { useRef, useEffect } from "react";
import "../Css/Cart.css";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, increment, decrement } from "../Redux/cartSlice";
import Checkout from "./Checkout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Cart({ onClose }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const cartRef = useRef(null);

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleChekout = () => {
    navigate("/Checkout", { state: { subtotal } });
    onClose();
  };

  return (
    <>
      <div className="Cart-overlay" onClick={onClose} />
      <div className="Cart" ref={cartRef}>
        <div className="Cart-header">
          <h2>Cart</h2>
          <button onClick={onClose}>X</button>
        </div>

        {!items.length ? (
          <p>No Product Selected</p>
        ) : (
          items.map((value, index) => (
            <div className="Cart-item" key={index}>
              <img src={value.src} alt={value.description} />
              <div className="Cart-item-details">
                <p>{value.description}</p>
                <div className="Quantity-controls">
                  <button onClick={() => dispatch(decrement(index))}>-</button>
                  <span>{value.quantity}</span>
                  <button onClick={() => dispatch(increment(index))}>+</button>
                </div>
                <p className="Cart-item-price">
                  Price: Rs. {value.price * value.quantity}.00
                </p>
                <button onClick={() => dispatch(removeItem(index))}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <div className="Cart-total" style={{ marginBottom: "50px" }}>
          <p>Subtotal: Rs. {subtotal}.00</p>
          <button className="Checkout" onClick={handleChekout}>
            Checkout
          </button>
        </div>
      </div>
    </>
  );
}
