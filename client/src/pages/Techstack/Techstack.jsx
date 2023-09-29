import React from "react";
import "./Techstack.css";
import { TechstackList } from "../../utils/TechStackList";

const Techstack = () => {
  return (
    <>
      <div className="techstack">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mt-4 text-center" style={{ fontWeight: "bold" }}>
                <u style={{ color: "#136211" }}>Technologies Stack</u>
              </h2>
              {/* <hr
            style={{
              margin: "0.6rem auto",
              width: "60%",
              color: "#138881",
              border: "2px solid blue",
            }}
          /> */}
              <p className="text-center mt-4" style={{ fontWeight: "bold" }}>
                👉 Including programming languages, frameworks, databases,
                front-end and back-end tools, and APIs
              </p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12  d-flex
            flex-wrap"
            >
              {TechstackList.map((tech) => (
                <div key={tech._id} className="col-md-3">
                  <div className="card m-2 stack-card" id="skills">
                    <div className="card-content">
                      <div className="card-body">
                        <div className="media d-flex justify-content-center">
                          <div className="alig-self-center">
                            <tech.icon className="tech-icon" />
                          </div>
                          <div
                            className="media-body"
                            style={{ marginLeft: "0.4rem" }}
                          >
                            <h5>{tech.name}</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Techstack;
