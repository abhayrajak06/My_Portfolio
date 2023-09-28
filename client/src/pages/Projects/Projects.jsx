import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mt-4 text-center" style={{ fontWeight: "bold" }}>
              <u style={{ color: "#136211" }}>Top Recent Projects</u>
            </h2>
            <p className="text-center mt-4" style={{ fontWeight: "bold" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              possimus, consectetur distinctio molestias odio aut suscipit quas
              incidunt minima saepe ab, est culpa placeat eaque excepturi
              deserunt architecto aliquid reprehenderit.
            </p>
          </div>
        </div>
        <div className="row m-1">
          <div className="col-md-12 d-flex flex-wrap gap-5 m-2 mt-3 justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="#" className="btn ad-btn">
                    Live Demo
                  </a>
                  <a href="#" className="btn ad-btn">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="#" className="btn ad-btn">
                    Live Demo
                  </a>
                  <a href="#" className="btn ad-btn">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://unctad.org/sites/default/files/2021-03/2021-03-15_eCommerceCOVID19report-1-1220x675px.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Project Title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex flex-wrap gap-2">
                  <a href="#" className="btn ad-btn">
                    Live Demo
                  </a>
                  <a href="#" className="btn ad-btn">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
