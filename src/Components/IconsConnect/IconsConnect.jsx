import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import './IconsConnect.css'


const IconsConnect = () => {
  return (
    <div className="iconsConnect">
      <FontAwesomeIcon icon={faGithubSquare} className="icon"/>
      <FontAwesomeIcon icon={faLinkedin} className="icon"/>
      <FontAwesomeIcon icon={faEnvelopeOpenText} className="icon"/>
    </div>
  );
};

export default IconsConnect;
