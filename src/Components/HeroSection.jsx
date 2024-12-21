import React from "react";

const HeroSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="bg-secondary" style={{ height: "300px" }}></div>
        </div>
        <div className="col-md-6">
          <h2>Medium length hero headline</h2>
          <p>
            Lorem ipsum dolor sit amet et delectus accommodare his consul
            copiosae legendos at vix ad putent delicata delicata usu. Vidit
            dissentiet eos eu eam an brute copiosae hendrerit.
          </p>
          <button className="btn btn-primary me-2">Button</button>
          <button className="btn btn-outline-primary">Button</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
