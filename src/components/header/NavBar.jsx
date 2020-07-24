import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <span className="badge">AMDb</span>
      </Link>
      <Link to="/">
        <h1 className="Title">
          The Movie Database
          <sub>by Anand</sub>
        </h1>
      </Link>
    </div>
  );
}

export default NavBar;
