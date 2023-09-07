import Education from "./Education";
import "./Educations.css";

const Educations = (props) => {
  return (
    <div>
      <h2>Education</h2>
      <div className="educations">
        <Education education={props.educations[0]} />
        <Education education={props.educations[1]} />
      </div>
    </div>
  );
};

export default Educations;
