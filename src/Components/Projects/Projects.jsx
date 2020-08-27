import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projectsList">
        <a href="https://sourced-charleston.netlify.app/#/" target="_blank" rel="noopener noreferrer"> 
          <div className="card1">
            <div className="text">
              <h4>Sourced: Charleston</h4>
            </div>
          </div>
        </a>
        <a href="https://reggaeton-compare.netlify.app/#/" target="_blank" rel="noopener noreferrer">
          <div className="card2">
            <div className="text">
              <h4>Artist Compare</h4>
            </div>
          </div>
        </a>
        <a href="https://github.com/mxkay/forgotten-frontend" target="_blank" rel="noopener noreferrer">
          <div className="card3">
            <div className="text">
              <h4>Forgotten</h4>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
