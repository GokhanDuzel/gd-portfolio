import React, { useState } from "react";

import "./Experience.css";

import ExperienceDate from "./ExperienceDate";
import Card from "../UI/Card";

const Experience = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Card className="experience">
      <div
        className="experience-inside-items"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="experience-header">
          <ExperienceDate
            startDate={props.experience.startDate}
            endDate={props.experience.endDate}
          />
          <div className="experience-description">
            <p className="position">{props.experience.position}</p>
            <p className="company">{props.experience.company}</p>
            <p className="location">{props.experience.location}</p>
          </div>
        </div>
        <h3 className="accordion-extender">{isActive ? "-" : "+"}</h3>
      </div>
      {isActive && (
        <div
          className="accordion-content"
          onClick={() => setIsActive(!isActive)}
        >
            <ul>
              {props.experience.description.map((item) => <li>{item}</li>
              )}
            </ul>
        </div>
      )}
    </Card>
  );
};

export default Experience;
