import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <nav className="base-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="/tv-shows">Tv Shows</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
