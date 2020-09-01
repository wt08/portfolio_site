import React, { useState } from "react";
import "./CollapseNav.css";
import Burger from "../Burger/Burger";
import Menu from "../Menu/Menu";


const CollapseNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="collapseNav">
      <h1>will tidwell</h1> 
      <h4>Software Developer</h4>
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default CollapseNav;
