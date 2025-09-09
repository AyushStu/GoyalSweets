import React, { useState } from "react";
import Nav from "./Nav";
import Barfi from "../Img/Barfi.jpeg";
import Mewa from "../Img/Mewa.jpeg";
import Gulab from "../Img/GulabJamun.jpeg";
import Milkcake from "../Img/Milkcake.webp";
import Chana from "../Img/Chanadal.webp";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";
import Cart from "./Cart";
import Contact from "./Contact";
export default function Sweets() {
  const data = [
    { src: Barfi, desciption: "Barfi", price: 500 },
    { src: Gulab, desciption: "Gulab Jamun", price: 350 },
    { src: Milkcake, desciption: "Milkcake", price: 500 },
    { src: Chana, desciption: "Chana Dal Ladoo", price: 700 },
    { src: Mewa, desciption: "Nariyal Barfi", price: 480 },
  ];

  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const handleClick = (value) => {
    dispatch(addItem(value));
    setShowCart(true);
  };
  const onClose = () => {
    setShowCart(false);
  };

  return (
    <div>
      <div className="head">
        <h1>Sweets</h1>
      </div>
      <div className="Featured">
        {data.map((value, index) => (
          <div key={index}>
            <img src={value.src} onClick={() => handleClick(value)}></img>
            <p className="FeaturedDescription">{value.desciption}</p>
            <p className="FeaturedPrice">Price: Rs.{value.price}</p>
          </div>
        ))}
        {showCart && <Cart onClose={onClose} />}
      </div>
      <Contact />
    </div>
  );
}
