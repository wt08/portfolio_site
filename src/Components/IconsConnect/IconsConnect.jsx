import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import './IconsConnect.css'


const IconsConnect = () => {
  return (
    <div className="iconsConnect">
      <a href="https://github.com/wt08" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubSquare} className="icon"/></a>
      <a href="https://www.linkedin.com/in/will-tidwell/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
      <a href="mailto:willtomtid@gmail.com" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelopeOpenText} className="icon"/></a>
    </div>
  );
};

export default IconsConnect;
