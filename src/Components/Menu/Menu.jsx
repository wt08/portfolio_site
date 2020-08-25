import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? "show" : ""}`}>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <br />
      <h3 className="menuItem">Home</h3>
      <br />
      <h3 className="menuItem">About</h3>
    </div>
  );
};

export default Menu;
