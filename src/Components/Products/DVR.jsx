import React from "react";
import { Link } from "react-router-dom";
const Dvr = () => {
  const blogs = [
    {
      index: 1,
       img: <div style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/371/119959/e6405df8d3c6058558861468f82ba3e1a0f0565506607440e7e28e71ef528478__55017.1717499664.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SODVK-16558012RL",
      title: "Home 12 Camera 16 Channel 4K Ultra HD DVR Security System | SODVK-16558012RL",
      description: "Upgrade your home security with Swann’s 12 Camera 16 Channel 4K Ultra HD DVR Security System. This system offers detailed 4K resolution, True Detect™ heat and motion-sensing technology, and Night2Day™ color night vision. Equipped with red and blue flashing lights, spotlights, and a loud siren, it provides comprehensive protection. The 2TB HDD offers ample storage, and the Swann Security App allows for remote access and management.DVR-5680 with 2TB HDD & 12 x 4K SwannForce Cameras with Controllable Red & Blue Flashing Lights, Spotlights & Sirens PRO-4KRL",
    },
    {
      index: 2,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/305/118804/55a71f0a7d9cfeb64ecb8c7f385b11c5a75fa87ecf9c6b945864b3a9f223b665__98459.1717498292.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWDVK-845806WL",
      title: "6 Camera 8 Channel 1080p Full HD DVR Spotlight Security System | SWDVK-845806WL",
      description: "Featuring powerful spotlights, this security system is the pinnacle of cost-effective crime prevention. See clear detail via 1080p Full HD video, and watch live on your phone or TV! With color night vision, heat and motion detection in weatherproof bullet cameras, it’s security made smarter and fee free.",
    },
    {
      index: 3,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/302/118865/003904a74e10091856571b2879e4a98cb915e2cd4ea15e33175318b9946cb22a__40992.1717498370.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWDVK-1645812WL",
      title: "12 Camera 16 Channel 1080p Full HD DVR Spotlight Security System | SWDVK-1645812WL",
      description: "Featuring powerful spotlights, this 12 camera, 16 channel DVR security system is the pinnacle of cost-effective crime prevention. See clear detail via 1080p Full HD video, and review or watch live on your phone or TV! With color night vision, heat and motion detection in weatherproof bullet cameras, it’s security made smarter. And with 16 channels and 12 cameras included, you can add and additional 4 cameras to your security system. It’s security made smarter and fee free."
    },
    {
      index: 4,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/567/120894/eea24f5507effcfb3a48a3fc56919f62749f417f361e69fe245ca0b6f1653bb8__55767.1717500718.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWDVK-84880W6AOC",
      title: "6 Camera 8 Channel 1080p Full HD Audio/Video DVR Security System | SWDVK-84880W6AOC",
      description: "Featuring SwannForce controllable red and blue flashing lights and spotlights, this DVR stops criminals in their tracks. See clear detail with 1080p Full HD video with audio, and watch live on your phone or TV. With color night vision, heat and motion detection in weatherproof bullet cameras and more. It’s security made smarter and fee free.",
    },
    {
      index: 5,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/208/118859/0cf3c84dcca6da5ab6c4949de3b5ff4a1d3fe8ba535b59e49228db4553af3fc1__79406.1717498363.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,      
      category: "SWDVK-445802WL",
      title: "2 Camera 4 Channel 1080p Full HD DVR Security System - SWDVK-445802WL",
      description: "DVR-4580 with 1TB HDD & 2 x 1080p Heat & Motion Sensing Warning Light Security Cameras PRO-1080MSFB",
    },
    {
      index: 6,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/500x500/products/365/119339/c63114602a533bb97997b51e72df44c6a59801acf42a5b4832ca4ecc873cc35a__05424.1717498958.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SRDVR-165580H",
      title: "DVR16-5580 4K / 2TB (Cameras Sold Separately) - SRDVR-165580H",
      description: "DVR16-5580 4K / 2TB Cameras sold separately (recorder only) Enhance your security with Swann’s 16 Channel 4K Ultra HD DVR Security System. This system supports up to 16 cameras and provides clear 4K resolution for detailed surveillance. Equipped with a 2TB HDD, it offers ample storage for continuous recording. True Detect™ heat and motion-sensing technology ensures accurate alerts. The system integrates with Dropbox for off-site storage and can be managed via the Swann Security app for remote access and control.",
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

export default Dvr;
