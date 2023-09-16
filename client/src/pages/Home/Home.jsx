import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../components/assets/docs/gk-2500.pdf";

const Home = ({ toggle }) => {
  return (
    <>
      <div
        className={
          toggle
            ? "home-container bg-dark adjust1"
            : "home-container bg-dark adjust2"
        }
      >
        <div className="container home-content">
          <h1>Hi I'm a .....</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Web Developer!",
                  "React JS Developer!",
                  "MERN stack Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a
              href={Resume}
              download={"Abhay_Rajak.pdf"}
              className="btn btn-cv"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
