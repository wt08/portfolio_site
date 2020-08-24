import React from "react";
import "./Menu.css";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? "show" : ""}`}>
      <p onClick={() => setMenuOpen(!menuOpen)}>X</p>
      <h3>Home</h3>
      <h3>About</h3>
    </div>
  );
};

export default Menu;
