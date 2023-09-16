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

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
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
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div
                className="nav-link text-center icons mt-3"
                style={{ fontSize: "2rem" }}
                title="Home"
              >
                <FcHome />
              </div>
              <div
                className="nav-link text-center icons mt-3"
                style={{ fontSize: "2rem" }}
                title="About"
              >
                <FcAbout />
              </div>
              <div
                className="nav-link text-center icons mt-3"
                style={{ fontSize: "2rem" }}
                title="Work Experience"
              >
                <FcPortraitMode />
              </div>
              <div
                className="nav-link text-center icons mt-3"
                style={{ fontSize: "2rem" }}
                title="Tech Stack"
              >
                <FcBiotech />
              </div>
              <div
                className="nav-link text-center icons mt-3"
                style={{ fontSize: "2rem" }}
                title="Education"
              >
                <FcReadingEbook />
              </div>
              <div
                className="nav-link text-center icons mt-3"
                style={{ fontSize: "2rem" }}
                title="Projects"
              >
                <FcVideoProjector />
              </div>
              <div
                className="nav-link text-center icons mt-3"
                style={{ fontSize: "2rem" }}
                title="Testimonial"
              >
                <FcVoicePresentation />
              </div>
              <div
                className="nav-link text-center icons mt-3"
                style={{ fontSize: "2rem" }}
                title="Contact"
              >
                <FcBusinessContact />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
