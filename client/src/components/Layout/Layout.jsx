import React from "react";
import Menu from "../Menu/Menu";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";

const Layout = () => {
  return (
    <div className="container-fluid bg-warning">
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
          <div className="">
            <Home />
          </div>
          <div className="">
            <About />
          </div>
          <div className="bg-secondary" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-success" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-danger" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-secondary" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-success" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-danger" style={{ height: "12rem" }}>
            hello
          </div>
          <div className="bg-secondary" style={{ height: "12rem" }}>
            hello
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
