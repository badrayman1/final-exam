import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <a className="navbar-brand" href="tt">
        Logo
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="tt">
              Link one
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tt">
              Link two
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tt">
              Link three
            </a>
          </li>
        </ul>
      </div>
      <button className="btn btn-dark">Button</button>
    </nav>
  );
};

export default Navbar;
