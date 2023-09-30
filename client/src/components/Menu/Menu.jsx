import React from "react";
import "./Menu.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <>
      <div className="navbar-profile-pic">
        <img
          src="https://kalingatv.com/wp-content/uploads/2017/04/Virat-Kohli-RCB.jpg"
          alt="profile picture"
        />
      </div>
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-link active">
            <Link
              to="home"
              smooth={true}
              spy={true}
              offset={-100}
              duration={100}
            >
              <FcHome />
              Home
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="about"
              smooth={true}
              spy={true}
              offset={-100}
              duration={100}
            >
              <FcAbout />
              About
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="education"
              smooth={true}
              spy={true}
              offset={-100}
              duration={100}
            >
              <FcReadingEbook />
              Education
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="techstack"
              smooth={true}
              spy={true}
              offset={-100}
              duration={100}
            >
              <FcBiotech />
              Tech Stack
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="projects"
              smooth={true}
              spy={true}
              offset={-100}
              duration={100}
            >
              <FcVideoProjector />
              Projects
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="workexp"
              smooth={true}
              spy={true}
              offset={-100}
              duration={100}
            >
              <FcPortraitMode />
              Work Experience
            </Link>
          </div>
          <div className="nav-link">
            <Link
              to="contact"
              smooth={true}
              spy={true}
              offset={-100}
              duration={100}
            >
              <FcBusinessContact />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
