import React from "react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <a href="/">
        <span className="badge">AMDb</span>
      </a>
      <a href="/">
        <h1 className="Title">
          The Movie Database
          <sub>by Anand</sub>
        </h1>
      </a>
    </div>
  );
}

export default NavBar;
