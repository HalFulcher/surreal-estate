import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

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
            <Link className="item" to="/">
              View Properties
            </Link>
          </li>
          <li className="navbar-links-item" to="/">
            <Link className="item" to="/add-property">
              Add Properties
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
