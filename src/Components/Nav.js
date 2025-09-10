import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Img/Logo.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../Css/Navbar.css";
import { useNavigate } from "react-router-dom";

export default function Nav({ onCartClick }) {
  const [isOpen, setOpen] = useState(false);
  const Navigate = useNavigate();

  return (
    <div className="NavHeader">
      <div className="NavLeft">
        <div className="Ham" onClick={() => setOpen(!isOpen)}>
          ☰
        </div>
        <ul className={isOpen ? "nav-links-Mobile" : "nav-links"}>
          <Link to="/">Home</Link>
          <Link to="/Namkeen">Namkeen</Link>
          <Link to="/Sweets">Sweets</Link>
          <button onClick={onCartClick} className="CartButton">
            <i
              className="fas fa-shopping-cart"
              style={{
                backgroundColor: "none",
                marginLeft: "10px",
                fontSize: "18px",
                cursor: "pointer",
              }}
            ></i>
          </button>
        </ul>
      </div>

      {/* Center: Logo */}
      <div className="NavLogo">
        <img src={Logo} alt="Logo" onClick={() => Navigate("/")} />
      </div>
    </div>
  );
}
