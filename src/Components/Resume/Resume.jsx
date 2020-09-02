import React from "react";
import "./Resume.css";
import Navigation from "../Navigation/Navigation";
import IconsConnect from "../IconsConnect/IconsConnect";

const Resume = () => {
  return (
    <div>
      <Navigation />
      <div className="resume">
        <a
          href="https://docs.google.com/document/d/1EP6ud6yJrAhEqQt34J4tKx2GqTmaF0k6LxfrBnCZGGc/edit#heading=h.ur8vhqpa5lu3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="resumeImage"
            src="https://res.cloudinary.com/dgbf3yxnd/image/upload/v1598652247/Screen_Shot_2020-08-28_at_6.03.32_PM_jc7xka.png"
            alt="resume"
          />
        </a>
      </div>
      <IconsConnect />
    </div>
  );
};

export default Resume;
