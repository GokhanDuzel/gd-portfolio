import "./Skills.css";

import Skill from "./Skill";

const Skills = (props) => {
  const Skills = () => {
      for(let i = 0; i < props.skills.length; i++) {
        return(props.skills.map((skill) => <Skill skill={skill}/>))
      };       
  }
    
  return (
    <div className="skills_container">
        <h2>Skills</h2>
      <div className="all_skills">
        {Skills()}
      </div>
    </div>
  );
};

export default Skills;
