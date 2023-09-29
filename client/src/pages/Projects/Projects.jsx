import React from "react";
import "./Projects.css";
import { projectList } from "../../utils/ProjectList";

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
            {projectList.map((p) => (
              <div key={p.id} className="card" style={{ width: "18rem" }}>
                <img src={p.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
