import React from "react";
import "./About.css";

const About = ({ toggle }) => {
  return (
    <>
      <div className={toggle ? "about adjust1" : "about adjust2"}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 about-pic">
              <img
                src="https://kalingatv.com/wp-content/uploads/2017/04/Virat-Kohli-RCB.jpg"
                alt="profile picture"
              />
            </div>
            <div className="col-md-6 mt-2 about-content">
              <h1 className="text-center">About Me</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore, et! Itaque eligendi quidem ab veniam veritatis
                tempora odit voluptas quis vero ipsa non, laborum exercitationem
                quam vel nobis maxime sint inventore, suscipit, nihil velit ex
                corporis! Delectus quasi dicta id accusamus minima error dolorum
                aperiam. Necessitatibus provident ipsa suscipit consequatur
                facere cum magnam eaque minima quod excepturi quos vel
                cupiditate harum esse, nam saepe reiciendis tenetur nemo
                possimus, ratione quibusdam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
