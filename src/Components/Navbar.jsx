import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from  "./Screenshot__111_-removebg.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/" style={{fontSize:"30px",fontWeight:"bold",color:"black",letterSpacing:"2px"}} >
       <img src={img1} height={80} width={250} alt="" />
      </Link>
      <div className="collapse navbar-collapse" style={{margin:"20px",display:"flex", justifyContent:"space-around"}}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/serves">
              Serveices
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contacts
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About US
            </Link>
          </li>
        </ul>
      </div>
      <p style={{padding:"10px 10px 0 0"}}><FaSearch/></p>
      <input type="text" id="search" placeholder="Search" style={{borderRadius:"10px",border:"1px soled black"}} />
    </nav>
  );
};

export default Navbar;
