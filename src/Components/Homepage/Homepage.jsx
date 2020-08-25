import React from "react";
import IconsConnect from "../IconsConnect/IconsConnect";
import Projects from "../Projects/Projects";
import "./Homepage.css";
import Navigation from "../Navigation/Navigation";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <div className="main">
        <IconsConnect />
        <Projects />
      </div>
    </div>
  );
};

export default Homepage;
