import "./Experiences.css"

import Experience from "./Experience";

const Experiences = (props) => {
  return (
    <div className="experiences">
      <h2>Experiences</h2>
      <Experience experience={props.experiences[0]} />
      <Experience experience={props.experiences[1]} />
      <Experience experience={props.experiences[2]} />
      <Experience style={{color: "orange"}} experience={props.experiences[3]} />
    </div>
  );
};

export default Experiences;
