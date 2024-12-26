import React from "react";
const ContactForm = () => {
    return (
      <>
      <div className="my-5">
        <h2>Contact us</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea className="form-control" id="message" rows="3" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
        <h1 style={{display:"flex",
        justifyContent:"center",
        }} >Location Company</h1>
        <iframe loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153167!3d-37.81627977975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1f0f9b1b0b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1611816751234!5m2!1sen!2sau"></iframe>      
      </div>
      <style>
        {`
        .my-5 {
          margin:200px
        }
          iframe {
            width: 100%;
            height: 450px;
            border: 0;
            margin-top: 20px;
            }
        `}
      </style>
      </>
    );
  };
  export default ContactForm;