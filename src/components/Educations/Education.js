import Card from "../UI/Card";

import "./Education.css"

const Education = (props) => {

  return (
    <Card className="education">
        <p className="institution">{props.education.institution}</p>
        <p className="field">{props.education.field}</p>
    </Card>
  );
};

export default Education;
