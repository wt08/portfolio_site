import React from "react";
import IconsConnect from "../IconsConnect/IconsConnect";
import Projects from "../Projects/Projects";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <IconsConnect />
      <Projects />
    </div>
  );
};

export default Homepage;
