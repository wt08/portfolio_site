import React from "react";
import "./Navigation.css";
import ExpandNav from "../ExpandNav/ExpandNav";
import CollapseNav from "../CollapseNav/CollapseNav";

const Navigation = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="navigation">
      <ExpandNav />
      <CollapseNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
};

export default Navigation;
