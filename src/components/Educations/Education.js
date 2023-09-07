import Card from "../UI/Card";

import "./Education.css"

const Education = (props) => {

  return (
    <Card className="education">
        <p>{props.education.institution}</p>
        <p>{props.education.field}</p>
    </Card>
  );
};

export default Education;
