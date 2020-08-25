import React from "react";
import Navigation from "../Navigation/Navigation";
import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJsSquare } from "@fortawesome/free-brands-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { faCss3Alt } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="about">
      <Navigation />
      <div className="mainAbout">
        <img
          src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1598397683/GA%20-%20Project%201/IMG_0324_xhl175.jpg"
          alt="Will Tidwell"
        />
        <div className="infoAbout">
          <p>
            Hi, I'm Will. I'm a software developer with a background in client
            relations. <br /> I bring a skillset that can creatively enhance
            business efficiency.
          </p>

          <div className="logosAbout">
            <h4>Language Proficiencies</h4>
            <div className="logosIcons">
              <FontAwesomeIcon icon={faJsSquare} className="icon" />
              <FontAwesomeIcon icon={faHtml5} className="icon" />
              <FontAwesomeIcon icon={faCss3Alt} className="icon" />
              <img
                src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1598398307/ruby_bn1nsl.png"
                alt="ruby logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
