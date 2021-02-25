import React from "react";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <img
        src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
        alt="surreal-estate-logo"
      />
      <div className="navbar-links">
        <ul>
          <li className="navbar-links-item" to="/">
            View Properties
          </li>
          <li className="navbar-links-item" to="/">
            Add a Property
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
