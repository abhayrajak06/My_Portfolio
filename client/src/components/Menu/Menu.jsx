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
  FcVoicePresentation,
} from "react-icons/fc";

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
          <div className="nav-link">
            <FcHome />
            Home
          </div>
          <div className="nav-link">
            <FcAbout />
            About
          </div>
          <div className="nav-link">
            <FcPortraitMode />
            Work Experience
          </div>
          <div className="nav-link">
            <FcBiotech />
            Tech Stack
          </div>
          <div className="nav-link">
            <FcReadingEbook />
            Education
          </div>
          <div className="nav-link">
            <FcVideoProjector />
            Projects
          </div>
          <div className="nav-link">
            <FcVoicePresentation />
            Testimonial
          </div>
          <div className="nav-link">
            <FcBusinessContact />
            Contact
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
