import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>We Are Here to Help</h5>
            <p>Sales: 800-964-3138</p>
              <small>
                Please note: Due to high call volumes, our phone lines may close earlier than posted times in order to accommodate those already waiting in queue.
              </small>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="tt" className="text-white">Become a Reseller</a></li>
              <li><a href="tt" className="text-white">About Us</a></li>
              <li><a href="tt" className="text-white">Drive Smarter® App</a></li>
              <li><a href="tt" className="text-white">Shop ID.me</a></li>
              <li><a href="tt" className="text-white">Support</a></li>
              <li><a href="tt" className="text-white">International Distributors</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>More Information</h5>
            <ul className="list-unstyled">
              <li><a href="tt" className="text-white">Terms & Conditions</a></li>
              <li><a href="tt" className="text-white">Privacy Policy</a></li>
              <li><a href="tt" className="text-white">News</a></li>
              <li><a href="tt" className="text-white">Media Mentions</a></li>
              <li><a href="tt" className="text-white">Careers</a></li>
              <li><a href="tt" className="text-white">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6 offset-md-6">
            <h5>Keep in Touch</h5>
            <form className="d-flex">
              <input
                type="email"
                className="form-control me-2"
                placeholder="Enter your email"
              />
              <button className="btn btn-danger" type="submit">GO</button>
            </form>
            <div className="social-links mt-3">
              <a href="tt" className="text-white me-3"><FaFacebookF /></a>
              <a href="tt" className="text-white me-3"><FaInstagram /></a>
              <a href="tt" className="text-white me-3"><FaTwitter /></a>
              <a href="tt" className="text-white"><FaYoutube /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
