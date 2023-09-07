import "./Header.css";

import envelope from "../images/envelope.png";
import phone from "../images/phone.png";

const Header = () => {
  return (
    <nav>
      <div id="home">
        <div className="profile_name">
          Gokhan Duzel
          <div className="contact_info">
            <img
              src={envelope}
              alt="https://icons8.com/icon/124377/circled-envelope"
            />
            gduzel@icloud.com
          </div>
          <div class="contact_info">
            <img
              src={phone}
              alt="https://icons8.com/icon/124377/circled-envelope"
            />
            +1 819 329-5602
          </div>
        </div>
        <div className="topdiv">
          <a className="topmenu" href="#about-me">
            About Me
          </a>
          <a className="topmenu" href="#skills">
            Skills
          </a>
          <a className="topmenu" href="#projects">
            Projects
          </a>
          <a className="topmenu" href="#recommendations">
            Recommendations
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
