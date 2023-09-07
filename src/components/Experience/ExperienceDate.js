import './ExperienceDate.css'

const ExperienceDate = (props) => {
  const startMonth = props.startDate.toLocaleString("en-US", { month: "long" });
  const endMonth = props.endDate.toLocaleString("en-US", { month: "long" });
  const startYear = props.startDate.getFullYear();
  const endYear = props.endDate.getFullYear();
  
  return (
    <div className="experience-date">
      <div className="experience-date__month">{startMonth}</div>
      <div className="experience-date__year">{startYear}</div>
      <p>to</p>
      <div className="experience-date__month">{endMonth}</div>
      <div className="experience-date__year">{endYear}</div>
    </div>
  );
};

export default ExperienceDate;
