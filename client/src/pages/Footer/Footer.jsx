import React from "react";
import Jello from "react-reveal/Jello";
import Pulse from "react-reveal/Pulse";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Pulse>
            <div className="footer mb-3 mt-2 p-2">
              <h3 className="text-center">Made with 💖 Abhay &copy;{year}</h3>
            </div>
          </Pulse>
        </div>
      </div>
    </div>
  );
};

export default Footer;
