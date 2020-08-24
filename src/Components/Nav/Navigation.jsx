import React, { useState } from "react";
import "./Navigation.css";
import Menu from "../Menu/Menu";
import Burger from "../Burger/Burger";

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navigation">
      <div>
        <h1>Will Tidwell</h1>
      </div>
      <div className="links">
        <h3>Home</h3>
        <h3>About</h3>
      </div>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Navigation;
