import React from "react";
import logo from "../images/logo.webp";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button className="btn1">LOGIN</button>
    </div>
  );
};

export default Navbar;
