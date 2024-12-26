import React from "react";
import { Link } from "react-router-dom";
const Carousel = () => {
  return (
    <>
    <div className="container my-5">
      <h2 className="text-center" style={{borderBottom: "1px solid black"}}>Best Products</h2>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators" style={{marginTop:"20px"}}>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>

        <div className="carousel-inner"> 
          <div className="carousel-item active">
            <Link to="/products" style={{textDecoration:"none"}}>
            <h1> Wireless Battery Security System</h1>
            </Link>
            <p style={{marginTop:"20px"}}>Get a secure, industry-leading wireless security camera system that's innovative and uses rechargeable battery powered wireless cameras for maximum convenience.</p>
            
            <img
                style={{ height: "400px" }}
                src="https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/original/image-manager/new-camera-2.jpg?t=1684749128"
                className="d-block w-80 mx-auto"
                alt="Slide 1"
            />
          </div>
          
          
          <div className="carousel-item ">
          <Link to="/products" style={{textDecoration:"none"}}>  
          <h1> Powered Wi-Fi Security Cameras</h1>
          </Link>
          <p style={{marginTop:"20px"}}>Cameras connected to AC or utility power that transmit their video over Wi-Fi</p>
           
            <img
                style={{ height: "400px" }}
                src="https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/original/image-manager/swifi-2kicam-left-wallmount-cable-shadow2.jpg?t=1684749165"
                className="d-block w-80 mx-auto"
                alt="Slide 2"
            />
          </div>
          
          
          <div className="carousel-item ">
           <Link to="/products" style={{textDecoration:"none"}}> 
          <h1> Business Security Systems</h1>
           </Link>
          <p style={{marginTop:"20px"}}>Advanced security to monitor & Protect business from theft, intruders & other risks.</p>
           
            <img
                style={{ height: "400px" }}
                src="https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/original/image-manager/nhd-900pt-lt-lower-led2.jpg?t=1684749225"
                className="d-block w-80 mx-auto"
                alt="Slide 3"
            />
          </div>
          
          
          <div className="carousel-item ">
          <Link to="/products" style={{textDecoration:"none"}}>
          <h1>SWIFI-SE2KPT</h1>
          </Link>
          <p style={{marginTop:"20px"}}>Swann EVO​ Pan & Tilt Wi-Fi Camera​ | SWIFI-SE2KPT</p>
          
            <img
                style={{ height: "400px" }}
                src="https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/1920w/products/686/126137/d69590067d2cbd2039f6cafe370d436f526008ea266b56fbdff128237709a000__83105.1733123330.png"
                className="d-block w-80 mx-auto"
                alt="Slide 4"
            />
          </div>
          
          
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </>
  );
};

export default Carousel;
