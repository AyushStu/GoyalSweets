import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Img/Logo.jpeg";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Nav({ onCartClick }) {
  return (
    <div className="NavHeader">
      {/* Left navigation */}
      <div className="NavLeft">
        <nav className="NavbarLinks">
          <Link to="/">Home</Link>
          <Link to="/Namkeen">Namkeen</Link>
          <Link to="/Sweets">Sweets</Link>

          {/* Cart icon opens overlay */}
          <button
            onClick={onCartClick}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <i className="fas fa-shopping-cart"></i>
          </button>
        </nav>
      </div>

      {/* Centered logo */}
      <div className="NavLogo">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}
