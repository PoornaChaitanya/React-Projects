import React from "react";
import "./styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Bento<span>Fit</span>
      </div>
      <ul className="nav-links">
        <a href="#hero">
          <li>Home</li>
        </a>
        <a href="#programs">
          <li>Programs</li>
        </a>
        <a href="#trainers">
          <li>Trainers</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>
      <button className="join-btn">Join Now</button>
    </nav>
  );
};

export default Navbar;
