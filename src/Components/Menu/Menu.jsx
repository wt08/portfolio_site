import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? "show" : ""}`}>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <br />
      <Link to="/"><h3 className="menuItem">Home</h3></Link>
      <br />
      <Link to="/about"><h3 className="menuItem">About</h3></Link>
    </div>
  );
};

export default Menu;
