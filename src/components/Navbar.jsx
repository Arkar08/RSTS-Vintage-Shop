import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="nav">
      <div className="logo">
        <img src='/profile.png' alt="RSTS Logo" className="logoImage"/>
        <h2>RSTS Vintage Shop</h2>
      </div>

      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/category">Category</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}