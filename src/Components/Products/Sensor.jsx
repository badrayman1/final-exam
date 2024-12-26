import React from "react";
import { Link } from "react-router-dom";
const Sensors = () => {
  const blogs = [
    {
      index: 1,
       img: <div style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/664/121351/faf9e32119d1ec3afeb52b94e2400cc15a75a459dc7088db0a929fc07bd3bf46__74781.1717501305.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "ALPHS-B400RWPK2-QVC",
      title: "Alpha-Series Wireless Motion Sensor Spotlight - 2 Pack (Plain Box Packaging) (Online Exclusive) | ALPHS-B400RWPK2-QVC",
      description: "Stay safe with activity-triggered spotlight & red/blue flashing lights",
    },
    {
      index: 2,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/246/121835/790ffba62b3d682f340c425fe793060f3677b4e46d65be7b563e2adbe5feedcb__88903.1719211792.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWIFI-WDOOR",
      title: "WiFi Window & Door Alarm Sensor | SWIFI-WDOOR",
      description: "Enhance your home security with Swann’s WiFi Window & Door Alarm Sensor. This sensor alerts you to entry activity through doors or windows, connecting seamlessly to your WiFi network without needing a hub. Easy to install with adhesive mounts, it’s perfect for renters and homeowners alike. Receive instant push notifications via the Swann Security App, allowing you to monitor and manage your security remotely. Batteries are included for immediate use.",
    },
    {
      index: 3,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/273/119777/901218d37e48bd0bf9a3e727b03f51040f65f24f8f4e67a8352554b18dd9373d__44044.1717499453.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWIFI-LEAK",
      title: "Leak Alert Sensor - SWIFI-LEAK",
      description: "Get early warning of leaking water pipes or appliances"
    },
    {
      index: 4,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/242/122072/89564dbc6b8d492a24144b15d749a2352edc174bb86e276662bcdcf0a8db1012__33903.1724050906.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWIFI-MOTION",
      title: "Motion Alert Sensor - SWIFI-MOTION",
      description: "Enhance your home security with Swann’s Wi-Fi Motion Sensor. This sensor detects movement from people, pets, and cars, sending instant push notifications via the Swann Security App. With a wide 110° motion detection range, it’s perfect for monitoring key areas indoors and outdoors. The sensor is easy to install with adhesive mounts and operates on included AAA batteries. Its weatherproof design ensures durability.",
    },
    {
      index: 5,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/410/120212/f524e9f223f811c5c70c47e9606bb9048e45b2be9db2abc9992b8a9b040f7003__11748.1717499959.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,      
      category: "SWALPH-B400G2WPK1",
      title: "Alpha-Series Gen. 2 Wireless Motion Sensor Spotlight - SWALPH-B400G2WPK1",
      description: "Alpha Series 400 Lumen Battery Spotlight w Remote - Gen2 Chime Compatible - WHITE 1Pk..",
    },
    {
      index: 6,
      img: <div  style={{
        aspectRatio: "1/1",
        backgroundImage: `url(https://cdn11.bigcommerce.com/s-6ecsgdft1u/images/stencil/640w/products/338/119834/8138ca0a3ac1664d26b31cb993518c47abd8f089c81172c0a2119689927946cb__85382.1717499525.png?c=1)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}></div>,
      category: "SWIFI-ALARMKITA",
      title: "Home Security Alert Kit with 2 Motion Sensors, 2 Window/Door Sensors & Indoor Siren | SWIFI-ALARMKITA",
      description: "Wi-Fi Sensors guard against unwanted events and notify you about what is happening quickly. Detect window/door openings & closings, and the movement of people and pets. Connect them to the Indoor Siren to alarm you in real-time, plus you’ll get push notifications to your smart phone. Integrate the Sensors into your home security and protect what matters most. It’s security made smarter - and fee free.",
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

export default Sensors;
