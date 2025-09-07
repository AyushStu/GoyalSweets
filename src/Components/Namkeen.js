import React, { useState } from "react";
import Nav from "./Nav";
import Mathi from "../Img/Mathi.jpeg";
import Mattar from "../Img/Mattar.jpeg";
import Shakar from "../Img/Shakarparre.jpeg";
import namkeen from "../Img/Namkeen.webp";
import Contact from "./Contact";
import "../Css/Namkeen.css";
import Cart from "./Cart";
import Bakar from "../Img/Bakarwadio.jpeg";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

export default function Namkeen() {
  const data = [
    { src: Mathi, descriptiom: "Mathi", price: 200 },
    { src: Mattar, descriptiom: "Mattar", price: 180 },
    { src: Shakar, descriptiom: "Shakarparre", price: 180 },
    { src: namkeen, descriptiom: "Namkeen", price: 350 },
    { src: Bakar, descriptiom: "Bakarwadi", price: 400 },
  ];

  const [showCart, setShowCart] = useState(false);

  const onClose = () => {
    setShowCart(false);
  };

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setShowCart(true);
    dispatch(addItem(value));
  };
  return (
    <div>
      <Nav />

      <div className="head">
        <h1>Namkeen</h1>
      </div>
      <div className="Featured">
        {data.map((value, index) => (
          <div key={index}>
            <img src={value.src} onClick={() => handleClick(value)} />

            <p className="FeaturedDescription">{value.descriptiom}</p>
            <p className="FeaturedPrice">Rs. {value.price}</p>
          </div>
        ))}
        {showCart && <Cart onClose={onClose} />}
      </div>

      <Contact />
    </div>
  );
}
