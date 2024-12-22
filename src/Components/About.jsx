import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 

const AboutPage = () => {
  return (
    <>
    <div className="container my-5">
      <h2 style={{display:"flex", justifyContent:"center",marginBottom:"30px"}}>About Company</h2>
      <div className="row">
        <div className="col-md-6">
              <h4>History</h4>
              <h5>Medium length headline</h5>
              <p>
                Lorem ipsum dolor sit amet et delicato accommodare for casual
                companies.
              </p>
            
          
        </div>
        <div className="col-md-6" id='mission'>
              <h4>Mission Statement</h4>
              <h5>Medium length headline</h5>
              <p>
                Lorem ipsum dolor sit amet et delicato accommodare for casual
                companies.
              </p>
            </div>
          </div>
      <div className="container my-5">
      <h2 style={{display:"flex", justifyContent:"center"}}>Team</h2>
      <div>
        <Carousel
          className="custom-carousel"
          controls={true}  
          indicators={true}  
          prevIcon={<FaArrowLeft size={30} />} 
          nextIcon={<FaArrowRight size={30} />} 
        >
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="text-center">
                  <h5 className="card-title">Name Surname 3</h5>
                  <p className="card-text">Company</p>
                  <p>Lorem ipsum dolor sit amet et delicato accommodare for casual companies.</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="text-center">
                  <h5 className="card-title">Name Surname 3</h5>
                  <p className="card-text">Company</p>
                  <p>Lorem ipsum dolor sit amet et delicato accommodare for casual companies.</p>
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <div className="text-center">
                  <h5 className="card-title">Name Surname 3</h5>
                  <p className="card-text">Company</p>
                  <p>Lorem ipsum dolor sit amet et delicato accommodare for casual companies.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>

      <div className="row my-5">
        <div className="col-md-6">
          <h2>Clients</h2>
          <h5>Medium length headline</h5>
          <p>
            Lorem ipsum dolor sit amet et delicato accommodare for casual companies.
          </p>
        </div>
        <div className="col-md-6" id='mission'>
          <h2>Partnership</h2>
          <h5>Medium length headline</h5>
          <p>
            Lorem ipsum dolor sit amet et delicato accommodare for casual companies.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
