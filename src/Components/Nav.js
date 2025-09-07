import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Img/Logo.jpeg";

export default function Nav() {
  return (
    <div className="NavHeader">
      {/* Left navigation */}
      <div className="NavLeft">
        <nav className="NavbarLinks">
          <Link to="/">Home</Link>
          <Link to="/Namkeen">Namkeen</Link>
          <Link to="/Sweets">Sweets</Link>
        </nav>
      </div>

      {/* Centered logo */}
      <div className="NavLogo">
        <img src={Logo} alt="Logo" />
      </div>

      {/* Right navigation (optional for future) */}
    </div>
  );
}
