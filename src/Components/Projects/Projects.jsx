import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projectsList">
        <div className="card1">
          <div className="text">
            <h4>Sourced: Charleston</h4>
          </div>
        </div>
        <div className="card2">
          <div className="text">
            <h4>Artist Compare</h4>
          </div>
        </div>
        <div className="card3">
          <div className="text">
            <h4>Forgotten</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
