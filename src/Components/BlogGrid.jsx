import React from "react";
import { Link } from "react-router-dom";
const BlogGrid = () => {
  const blogs = [
    {
      index: 1,
       img: <div style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/546/120793/b1d5aed312caae8a0ab5a3fe6a98994bd2445dd6dcf1e71c65410883c7bec010__39352.1717500599.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SONVK-1676808B8D",
      title: "16 Camera 16 Channel 4K Master-Series NVR Security System | SONVK-1676808B8D",
      description: "With the latest surveillance tech such as night vision, motion detection recording and smartphone integration, the Swann Master-Series NVR security system is packed with features. See fine details essential for evidence. Upscaling cameras cleverly create a 4K display resolution with powerful digital zoom to watch over entrances, yards, driveways, parking lots, shop floors, storerooms and more. It’s security made smarter and fee free.",
    },
    {
      index: 2,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/314/119582/08ecc0044a5fc8243232ec2e2907de279ad3a32776cc5c331a6b7f0ee47a9376__01593.1717499253.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWNVK-500KH4",
      title: "1080p Security Kit with 4 x Powered Wi-Fi Cameras & NVR Tower | SWNVK-500KH4",
      description: "This Wi-Fi NVR Security System has bright spotlights, two-way audio, and sirens so you can intimidate intruders and prevent crime from happening. The 4 cameras plug into power while their 1080p Full HD video signal is transmitted wirelessly. With the Swann Security app, push notifications let you know what’s happening on your smartphone from anywhere in the world! It’s security made smarter and fee free.",
    },
    {
      index: 3,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/447/120335/7613e6fb1d6e382e1616fbc2b2a0fcefb2410f0909921d3390f1edea66cee827__86900.1717500096.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SONVK-169008DE1PT",
      title: "9 Camera 16 Channel 12MP Professional NVR Security System - SONVK-169008DE1PT",
      description: "Upgrade your security with Swann’s 9 Camera 16 Channel 12MP Professional NVR Security System. This advanced system offers 12MP resolution for exceptional video clarity, True Detect™ heat and motion-sensing technology, Night2Day™ color night vision, and two-way audio. Equipped with a 2TB HDD, it provides extensive storage. The system includes spotlight cameras, sirens, and sensor warning lights for enhanced deterrence. Manage and access footage remotely via the Swann Security App.  NVR16-8580 /2TB /8 x NHD-1200DE Dome /1 x NHD-900PT 4K Pan-Tilt Cameras"
    },
    {
      index: 4,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/215/119052/1423783e9e9225d77fc61d169d2892df48ca594ac892b025178fa07cfaf8dad4__32264.1717498583.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWNVK-886808FB",
      title: "8 Camera 8 Channel 4K Ultra HD Professional NVR Security System | SWNVK-886808FB",
      description: "Identify details like faces, tattoos and license plates with state-of-the-art 4K Ultra HD video. This Swann Professional NVR security system is packed with the latest surveillance tech like powerful color night vision, face recognition, person & vehicle detection, & much more. Actively watch over entrances, yards, driveways, parking lots, shop floors, storerooms, & customer service areas. It’s security made smarter and fee free.",
    },
    {
      index: 5,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/449/120353/2c9352e2050eb9de6d4bb7b37ba6384027478445b0516435e9edd3c2ef8814a8__90430.1717500115.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,      
      category: "SONVK-16898081PT",
      title: "9 Camera 16 Channel 4K Ultra HD Professional NVR Security System - SONVK-16898081PT",
      description: "NVR16-8580 /2TB /8 x NHD-900BE 4K Bullet /1 x NHD-900PT 4K Pan-Tilt Cameras",
    },
    {
      index: 6,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/213/119068/e6606a2690a0686dd2a9b3dd01919368efb93155aff4530b00eb88237d0c2413__30268.1717498602.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SONVK-876808",
      title: "8 Camera 8 Channel 4K Master-Series NVR Security System | SONVK-876808",
      description: "With the latest surveillance tech such as color night vision, sensor spotlights, motion detection recording & smartphone integration, the Swann Master-Series NVR security system is packed with features. See fine details essential for evidence with upscaling cameras that cleverly create a 4K display resolution with powerful digital zoom to watch over entrances, yards, driveways, parking lots, shop floors, storerooms & more. It’s security made smarter and fee free.",
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

export default BlogGrid;
