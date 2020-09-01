import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projectsList">
        <div className="projectContainer">
          <div className="textExpand">
            <h3>Sourced: Charleston</h3>
            <p>
              An interactive web app that helps users find/eat local produce in
              the Charleston area
            </p>
            <br />
            <p>ReactJS frontend. Ruby on Rails server.</p>
            <br />
            <a
              href="https://sourced-charleston.netlify.app/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Live Site</p>
            </a>
            <a
              href="https://github.com/wt08/sourced_charleston_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github Repo</p>
            </a>
          </div>
          <a
            href="https://sourced-charleston.netlify.app/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1598991518/Screen_Shot_2020-09-01_at_4.17.43_PM_gqrnul.png"
              alt="Sourced: Charleston App homepage"
            />
          </a>
          <div className="text">
            <h3>Sourced: Charleston</h3>
            <p>
              An interactive web app that helps users find/eat local produce in
              the Charleston area
            </p>
            <br />
            <p>ReactJS frontend. Ruby on Rails server.</p>
            <br />
            <a
              href="https://sourced-charleston.netlify.app/#/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Live Site</p>
            </a>
            <a
              href="https://github.com/wt08/sourced_charleston_frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>Github Repo</p>
            </a>
          </div>
        </div>

        <div className="projectContainer">
          <a
            href="https://reggaeton-compare.netlify.app/#/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1598313501/Screen_Shot_2020-08-24_at_7.57.44_PM_d1oscg.png"
              alt="Artist Compare App homepage"
            />{" "}
          </a>
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

        <div className="projectContainer">
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
          <img
            src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1598373912/Screen_Shot_2020-08-25_at_12.40.43_PM_aplgfl.png"
            alt="Forgotten App homepage"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
