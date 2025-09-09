import React, { use, useEffect, useState } from "react";
import Contact from "./Contact";
import Img1 from "../Img/Img1.webp";
import Img2 from "../Img/Img2.webp";
import Nav from "./Nav";
import Kaju from "../Img/Kajubarfi.webp";
import Moti from "../Img/Motichor.webp";
import Milk from "../Img/Milkcake.webp";
import Chana from "../Img/Chanadal.webp";
import Cart from "./Cart";
import New1 from "../Img/Counter.webp";

import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const featured = [
    { src: Kaju, description: "Kaju Barfi", price: 250 },
    { src: Moti, description: "Motichoor Ladoo", price: 150 },
    { src: Milk, description: "Milk Cake", price: 200 },
    { src: Chana, description: "Chana Dal Sweet", price: 180 },
  ];

  const Images = [Img1, Img2];
  const [index, setIndex] = useState(0);
  const handleNext = () => {
    if (index < Images.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setIndex(0);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 2000);

    return () => clearTimeout(timer);
  });

  const handleClick = (value) => {
    setShowCart(true);
    dispatch(addItem(value));
  };

  return (
    <>
      <div className={`home-content ${showCart ? "shaded" : ""}`}>
        <div className="Slider">
          <img src={Images[index]} alt="Home"></img>
        </div>
        <div>
          <p
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bolder",
              fontSize: "20px",
            }}
          >
            Featured Items
          </p>
          <div className="Featured">
            {featured.map((value, index) => (
              <div key={index}>
                <img src={value.src} onClick={() => handleClick(value)}></img>
                <p className="FeaturedDescription">{value.description}</p>
                <p className="FeaturedPrice">₹ {value.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="Counter">
          <img src={New1}></img>
        </div>
        <div className="Contact">
          <Contact />
        </div>
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </>
  );
}
