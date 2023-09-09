import "./App.css";
import Header from "./components/Header";
import Experiences from "./components/Experience/Experiences";

import Educations from "./components/Educations/Educations";
import BackToHomeButton from "./components/BackToHomeButton";
import Skills from "./components/Skills/Skills";

function App() {
  const experiences = [
    {
      company: "Ford Motor Company",
      position: "Software Infrastructure Student",
      startDate: new Date(2022, 4),
      endDate: new Date(2022, 7),
      location: "Ottawa, Canada",
      description: [
        "Developed and executed test scripts and automated them to ensure the quality and functionality of enhanced communication gates of future intelligent cars.",
        "Assisted in analyzing test results, providing valuable insights for product improvement.",
        "Identified and reported software defects, working closely with developers to facilitate timely resolutions.",
        "Automated Python tests using the Slash framework.",
        "Experienced in working with VMs and simulating environments for practical testing.",
      ],
      skills: "skill",
    },
    {
      company: "University of Ottawa",
      position: "Co-op Student Programmer Analyst",
      startDate: new Date(2021, 4),
      endDate: new Date(2021, 7),
      location: "Ottawa, Canada",
      description: [
        "Utilized well-known frameworks and technologies (e.g., HTML, CSS, TypeScript, React Native, and Postman) to enhance the University of Ottawa's Co-op Navigator Mobile Application.",
        "Acted as the primary front-end developer, taking ownership of the codebase and effectively managing version control using Git."
      ],
      skills: "skill",
    },
    {
      company: "University of Ottawa",
      position: "Web Developer",
      startDate: new Date(2020, 8),
      endDate: new Date(2020, 11),
      location: "Ottawa, Canada",
      description: [
        "Demonstrated expertise in web development, utilizing PHP, HTML, and CSS to create dynamic and visually appealing websites.",
        "Developed and optimized SQL queries for MariaDB, ensuring efficient data retrieval and management.",
        "Modified and maintained databases, implementing necessary changes and updates to support evolving project needs.",
        "Worked on the front-end development of web applications, ensuring seamless user experience and responsive design.",
      ],
      skills: "skill",
    },
    {
      company: "Acibadem Healthcare Group",
      position: "Junior Web Developer",
      startDate: new Date(2020, 0),
      endDate: new Date(2020, 3),
      location: "Istanbul, Turkey",
      description: [
        "Contributed to the Acibadem Healthcare R&D team with the employer website page.",
        "Familiarized with Angular and TypeScript.",
        "Gained knowledge about databases such as MongoDB and OracleDB.",
        "Learned how to integrate technologies.",
      ],
      skills: "skill",
    },
  ];

  const educations = [
    {
      institution: "University of Ottawa",
      field: "Bachelors' in Software Engineering",
    },
    {
      institution: "Istanbul Saint-Joseph French Highschool",
      field: "Highschool Diplome",
    }

  ];

  const skills = [
    "Python","C","C++","Java",
    "JavaScript","TypeScript","React","ReactNative",
    "HTML5","CSS3","Django","Express",
    "Node.js","CI/CD","Flask","Git & GitHub",
    "Paramiko","Slash","unit testing","PostgreSQL",
    "Jira","Confluence","Flask","Numpy", 
    "Agile","OOP","MariaDB","Microservices",
    "Serverless","Cloud","Linux","Windows",
    "Bash","MacOS","Atlassian","AndroidStudio",
  ];

  return (
    <div className="App">
      <Header />
      <div className="info-card-container">
        <Experiences id="experiences" experiences={experiences} />
        <hr />
        {/* <div class="floating-object">
          <img src="path-to-your-planet-image.png" alt="Planet Image"></img>
        </div> */}
        <Educations educations={educations}/>
        <hr />
        <Skills skills={skills}/>
        <hr />
        <BackToHomeButton />
      </div>
    </div>
  );
}

export default App;
