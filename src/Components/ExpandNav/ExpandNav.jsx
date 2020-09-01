import React from "react";
import "./ExpandNav.css";
import { Link } from "react-router-dom";

const ExpandNav = () => {
  return (
    <div className="expandNav">
      <div>
        <h1>will tidwell</h1>
        <h4>Software Developer</h4>
      </div>
      <div className="links">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/resume">
          <h3>Resume</h3>
        </Link>
      </div>
    </div>
  );
};

export default ExpandNav;
