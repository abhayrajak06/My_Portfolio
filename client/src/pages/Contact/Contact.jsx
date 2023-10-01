import React from "react";
import "./Contact.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";

const Contact = () => {
  const [theme] = useTheme();
  return (
    <div id={theme}>
      <div className="contact">
        <div className="container mb-2 mt-2">
          <div
            className="row contact-section"
            style={{
              borderRadius: "1rem",
              // border: "5px solid red",
              boxShadow: "1px 1px 3px 3px rgba(0, 0, 0, 0.22)",
            }}
          >
            <div
              className="col-md-6 d-flex flex-wrap justify-content-center align-items-center"
              style={{ borderRight: "0.01px solid rgba(0,0,0,0.15)" }}
            >
              <div className="img" style={{ padding: "0.2rem" }}>
                <img src="./contact.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex contact-card card border-0 px-4 py-5">
                <h6>
                  Contact With
                  <BsLinkedin color="blue" size={25} className="ms-2" />
                  <BsGithub color="black" size={25} className="ms-2" />
                  <BsFacebook color="blue" size={25} className="ms-2" />
                </h6>

                <div className="row or-design px-3 mb-4">
                  <div className="line" />
                  <h6 className="or">OR</h6>
                  <div className="line" />
                </div>
                <div className="row px-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Your Email Address"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <textarea
                    type="text"
                    name="msg"
                    placeholder="Write your message"
                    className="mb-3"
                  />
                </div>
                <div className="row px-3">
                  <button className="button">SEND MESSAGE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
