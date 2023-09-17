import React from "react";
import "./About.css";

const About = ({ toggle }) => {
  return (
    <>
      <div
        className={
          toggle ? "about bg-success adjust1" : "about bg-success adjust2"
        }
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-pic">
              <img
                src="https://kalingatv.com/wp-content/uploads/2017/04/Virat-Kohli-RCB.jpg"
                alt="profile picture"
              />
            </div>
            <div className="col-md-6">Content</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
