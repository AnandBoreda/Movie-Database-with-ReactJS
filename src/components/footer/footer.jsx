import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <nav className="base-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li className="text-overflow-center">
            <Link to="/tv-shows">Tv Shows</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
