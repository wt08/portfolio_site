import React from "react";
import Navigation from "../Navigation/Navigation";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <div className="mainAbout">
        <img
          src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1598397683/GA%20-%20Project%201/IMG_0324_xhl175.jpg"
          alt="Will Tidwell"
        />
        <div >
          <p className="infoAbout">
            <span className="name">Hi, I'm Will, </span>
            <br />a Charleston, SC based software developer. I have a background
            in client relations and can bring a skillset that will creatively
            enhance business efficiency.
          </p>
          <br />
          <br />
          <div className="logosAbout">
            <h4>Language Proficiencies</h4>
            <div className="logosIcons">
              <div className="iconDiv">
                <FontAwesomeIcon icon={faJsSquare}  className="icon"/>
                <p>Javascript
                  <br/> 
                  (ES6)</p>
              </div>
              <div className="iconDiv">
                <FontAwesomeIcon icon={faHtml5}  className="icon"/>
                <p>HTML5</p>
              </div>
              <div className="iconDiv">
                <FontAwesomeIcon icon={faCss3Alt}  className="icon"/>
                <p>CSS3</p>
              </div>
              <div className="iconDiv">
                {" "}
                <img
                  src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1598398307/ruby_bn1nsl.png"
                  alt="ruby logo"
                />
                <p>Ruby on Rails</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
