import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PricingPlans = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section className="pricing-section py-5 bg-light">
      <div className="container text-center">
        <h2 className="mb-4">Pricing plans</h2>
        <p className="lead mb-5">Lorem ipsum dolor sit amet et delectus accommodare his consul copiosae.</p>
        <div className="btn-group mb-5" role="group" aria-label="Pricing Toggle">
          <button
            type="button"
            className={`btn ${isMonthly ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setIsMonthly(true)}
          >
            Monthly
          </button>
          <button
            type="button"
            className={`btn ${!isMonthly ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => setIsMonthly(false)}
          >
            Yearly
          </button>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Tagline</h5>
                <h3 className="card-price">
                  ${isMonthly ? '99' : '999'}
                </h3>
                <ul className="list-unstyled my-4">
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>and more</li>
                </ul>
                <a href="tt" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Tagline</h5>
                <h3 className="card-price">
                  ${isMonthly ? '99' : '999'}
                </h3>
                <ul className="list-unstyled my-4">
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>and more</li>
                </ul>
                <a href="tt" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Tagline</h5>
                <h3 className="card-price">
                  ${isMonthly ? '99' : '999'}
                </h3>
                <ul className="list-unstyled my-4">
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  <li>Feature text goes here</li>
                  
                </ul>
                <a href="tt" className="btn btn-primary">Button</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
