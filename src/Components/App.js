import "../Css/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import Home from "./Home";
import Sweets from "./Sweets";
import Namkeen from "./Namkeen";
import Checkout from "./Checkout";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <Router>
      <Nav onCartClick={() => setIsCartOpen(true)} />

      {/* Routes for pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sweets" element={<Sweets />} />
        <Route path="/Namkeen" element={<Namkeen />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Routes>

      {isCartOpen && <Cart onClose={() => setIsCartOpen(false)} />}
    </Router>
  );
}

export default App;
