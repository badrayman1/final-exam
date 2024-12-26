import React from 'react';
import { Link } from 'react-router-dom';
const ServesSection = () => {
  return (<>
    <section className="app-section  py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
           <Link to="/serves" style={{textDecoration:"none"}}><h2 className="display-4">SONVK-876808</h2></Link>
            <p className="lead">
              8 Camera 8 Channel 4K Master-Series NVR Security System | SONVK-876808</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-row justify-content-between">
              <img width={400} height={400} src="https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/1920w/products/213/119068/e6606a2690a0686dd2a9b3dd01919368efb93155aff4530b00eb88237d0c2413__30268.1.png" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="app-section py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 d-flex justify-content-center">
            <div className="d-flex flex-row justify-content-between">
              <img width={400} height={400} src="https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/449/120353/2c9352e2050eb9de6d4bb7b37ba6384027478445b0516435e9edd3c2ef8814a8__90430.1717500115.png?c=1" />
              </div>
          </div>

          <div className="col-md-6">
            <Link to="/serves" style={{textDecoration:"none"}}><h2 className="display-4">SONVK-16898081PT</h2></Link>
            <p className="lead">9 Camera 16 Channel 4K Ultra HD Professional NVR Security System - SONVK-16898081PT</p>
          </div>
        </div>
      </div>
    </section>
  </>
  );
};

export default ServesSection;
