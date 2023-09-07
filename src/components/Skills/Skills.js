import "./Skills.css";

import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="skills_container">
        <h2>Skills</h2>
      <div className="all_skills">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
};

export default Skills;
