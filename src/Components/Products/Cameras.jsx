import React from "react";
import { Link } from "react-router-dom";
const Cameras = () => {
  const blogs = [
    {
      index: 1,
       img: <div style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/546/120793/b1d5aed312caae8a0ab5a3fe6a98994bd2445dd6dcf1e71c65410883c7bec010__39352.1717500599.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SRNHD-888MSDWB2",
      title: "4K Ultra HD Thermal Sensing Dome IP Security Camera NHD-888MSD - 2 Pack | SRNHD-888MSDWB2",
      description: "Face Recognition, Weatherproof, Night Vision, Audio Capture, PoE",
    },
    {
      index: 2,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/685/126120/e49746850474268af1dd9b13d1ab5d841695ad86f8834121608e5e54f720959c__71663.1733123288.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWIFI-SEVDBC",
      title: "Swann EVO Wireless Video Doorbell with SwannShield AI Voice Assistant | SWIFI-SEVDBC",
      description: "Introducing Swann EVO Wireless Video Doorbell with portable indoor chime – it’s your ultimate front door companion. The HD camera with a wide 140° viewing angle captures HD color video in ambient light with powerful night vision in B&W. With the EVO Video Doorbell you get reliable alerts, 2-way audio & flexibility to add a MicroSD Card to save recorded clips for free. Power up the doorbell using built-in 5200mAh rechargeable battery or hardwire it. Use the free SwannShield AI Voice Assistant for added protection to talk with visitors when you can't or are away from home. It’s security you can trust.",
    },
    {
      index: 3,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/647/123252/46e1fa6c890052187f5a27eaecd5cdad85006bb6772f4ab164d98a38e820aadd__92502.1729124603.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SRPRO-1080MSFBWB4",
      title: "1080p Bullet Analogue CCTV camera w PIR Motion Sensor & Sensor Warning Light - 4 Pack - SRPRO-1080MSFBWB4",
      description: "1080p Bullet Analogue CCTV camera w PIR Motion Sensor & Sensor Warning Light - 4 Pack"
    },
    {
      index: 4,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/614/120629/85dd99edb31283e8915e646843513e929efa4dd33394e489bad75968c3f272f7__27529.1717500430.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWNVW-600CMB",
      title: "Extra 2K Wireless Camera for AllSecure650 & AllSecure600 Kits | SWNVW-600CMB",
      description: "Add this amazing 2K HD Security Camera to your Wi-Fi NVR system to actively watch over your property in stunning detail, indoors or outdoors. With powerful Night2Day color night vision and True Detect heat and motion detection, your security system will be more reliable with fewer false alarms. Plus, you’ll always have a presence at your property with 2-way audio.",
    },
    {
      index: 5,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/613/120922/e85fead7c0722e84433b1b07846c270ecde2222707abfbd63a24a616f1a39987__08748.1717500748.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,      
      category: "SWNHD-900DE",
      title: "4K Heat & Motion Sensing IP Add-on Dome Camera | SWNHD-900DE",
      description: "4K Professional IP Dome Cameras SWNHD-900DE with Controllable Red & Blue Flashing Lights, Spotlights & Sirens",
    },
    {
      index: 6,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/660/121322/d5f6c46d7e84b3fb3686443777cc36afbdba4cedee9343aa1ef6c0efb0ba4fd9__02384.1717501274.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SRNVW-600CMBWB4S2",
      title: "Extra 2K Wireless Security Cameras 4 Pack with Solar Charging Panels | SRNVW-600CMBWB4S2",
      description: "Add these amazing 2K HD Security Cameras to your Wi-Fi NVR system to actively watch over your property in stunning detail, indoors or outdoors. With powerful Night2Day color night vision and True Detect heat and motion detection, your security system will be more reliable with fewer false alarms. Plus, you’ll always have a presence at your property with 2-way audio.  The cameras feature long-lasting rechargeable batteries with Solar Charging Panels, spotlights, sirens, 2-way talk and more.",
    },
  ];

  return (
    <>
      <header className="text-center my-4">
        <h1 className="display-5"> ALL Services</h1>
        <nav className="d-flex justify-content-center gap-3 mt-3">
          <Link to="/serves" className="text-decoration-none">
            NVR
          </Link>
          <Link to="/DVR" className="text-decoration-none">
            DVR
          </Link>
          <Link to="/cameras" className="text-decoration-none">
            Cameras
          </Link>
          <Link to="/sensor" className="text-decoration-none">
            Sensor
          </Link>
        </nav>
      </header>
      <section className="container my-5" >
        <div className="row g-4">
          {blogs.map((blog, index) => (
            <div className="col-md-4" key={index}>
              <div className="card h-100">
                <div className="card-img-top">{blog.img}</div>
                <div className="card-body" >
                  <p className="text-muted">{blog.category}</p>
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <Link to="#" className="btn btn-link" >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Cameras;
