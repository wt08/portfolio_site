import React from "react";
import "./Menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { HashLink as Link } from "react-router-hash-link";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? "show" : ""}`}>
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="icon"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <br />
      <Link to="/">
        <h3 className="menuItem">Home</h3>
      </Link>
      <br />
      <Link to="/#iconsConnect">
        <h3 className="menuItem">Connect</h3>
      </Link>
      <br />
      <Link to="/resume">
        <h3 className="menuItem">Resume</h3>
      </Link>
    </div>
  );
};

export default Menu;
