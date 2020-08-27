import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projectsList">
        <div className="card1">
          <div className="text">
            <h3>Sourced: Charleston</h3>
            <br />
            <a
              href="https://sourced-charleston.netlify.app/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Live Site</p>{" "}
            </a>
            <br />
            <a
              href="https://github.com/wt08/sourced_charleston_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>{" "}
            </a>
          </div>
        </div>

        <div className="card2">
          <div className="text">
            <h3>Artist Compare</h3>
            <br />
            <a
              href="https://reggaeton-compare.netlify.app/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Live Site</p>{" "}
            </a>
            <br />
            <a
              href="https://github.com/wt08/artist_compare"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github</p>
            </a>
          </div>
        </div>

        <div className="card3">
          <div className="text">
            <h3>Forgotten</h3>
            <br />
            <a
              href="https://github.com/mxkay/forgotten-frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <p>Github</p>{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
