import React from "react";
import IconsConnect from "../IconsConnect/IconsConnect";
import Projects from "../Projects/Projects";
import "./Homepage.css";
import Navigation from "../Navigation/Navigation";
import Footer from '../Footer/Footer'

const Homepage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <div className="main">
        <IconsConnect />
        <Projects />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
