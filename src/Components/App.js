import "../Css/App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Sweets from "./Sweets";
import Namkeen from "./Namkeen";
import Cart from "./Cart";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Namkeen" element={<Namkeen />} />
          <Route path="/Sweets" element={<Sweets />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
