import React from "react";
import IconsConnect from "../IconsConnect/IconsConnect";
import Projects from "../Projects/Projects";
import "./Homepage.css";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="heading">
        <Navigation />
        <div className="intro">
          <div className="introMobile">
            <h3>
              Hi, I'm <span>will</span>,
              <br />
              a Charleston-based software developer.
              <br />
              I love implementing creative design
              <br />
              and user interactivity.
              <br />
              Check out some of my projects below,
              <br />
               and contact me to partner on a project.
            </h3>
          </div>
          <div className="introExpand">
            <h3>
              Hi, I'm <span>will</span>, a Charleston-based software developer.
              <br />
              I love implementing creative design and user interactivity.
              <br />
              Check out some of my projects below and contact me to partner on a
              project.
            </h3>
          </div>
        </div>
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
