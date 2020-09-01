import React from "react";
import IconsConnect from "../IconsConnect/IconsConnect";
import Projects from "../Projects/Projects";
import "./Homepage.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navigation />
      <div className="intro">
        <h3>
          Hi, I'm <span>will</span>, a Charleston-based software developer.
          <br />
          I love implementing creative design and user interactivity.
          <br />
          Check out some of my projects below and contact me to partner on a
          project.
        </h3>
      </div>
      <div className="main">
        <Projects />
        <IconsConnect />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
