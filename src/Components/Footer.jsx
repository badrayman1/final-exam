import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Logo</h5>
            <p>
              Address: <br />
              123 Main Street, City <br />
              State/Province, Country
            </p>
            <div>
              <i className="bi bi-facebook me-2"></i>
              <i className="bi bi-twitter me-2"></i>
              <i className="bi bi-instagram"></i>
            </div>
          </div>
          <div className="col-md-4">
            <h5>Column two</h5>
            <ul className="list-unstyled">
              <li>Link five</li>
              <li>Link six</li>
              <li>Link seven</li>
              <li>Link eight</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Column three</h5>
            <ul className="list-unstyled">
              <li>Link nine</li>
              <li>Link ten</li>
              <li>Link eleven</li>
              <li>Link twelve</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-3">
          © 2024 Your Website. All rights reserved. <br />
          <a href="dj">Privacy Policy</a> | <a href="md">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
