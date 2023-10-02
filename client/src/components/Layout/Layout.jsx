import React from "react";
import Menu from "../Menu/Menu";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Techstack from "../../pages/Techstack/Techstack";
import Projects from "../../pages/Projects/Projects";
import Education from "../../pages/Education/Education";
import WorkExp from "../../pages/WorkExp/WorkExp";
import Contact from "../../pages/Contact/Contact";
import Jello from "react-reveal/Jello";

const Layout = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-2 col-sm-2 col-3"
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            backgroundColor: "#1e1e2c",
          }}
        >
          <Menu />
        </div>
        <div
          className="col-sm-10 col-md-10 col-9 p-0"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="" id="home">
            <Home />
          </div>
          <div className="" id="about">
            <About />
          </div>
          <div className="" id="education">
            <Education />
          </div>
          <div className="" id="techstack">
            <Techstack />
          </div>
          <hr />
          <div className="" id="projects">
            <Projects />
          </div>
          <div className="" id="workexp">
            <WorkExp />
          </div>
          <div className="" id="contact">
            <Contact />
          </div>
          <Jello>
            <div className="footer mb-3 mt-2 p-2">
              <h4 className="text-center">Made with 💖 Abhay &copy;{year}</h4>
            </div>
          </Jello>
        </div>
      </div>
    </div>
  );
};

export default Layout;
