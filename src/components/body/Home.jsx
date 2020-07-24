import React, { Component } from "react";
import "./home.css";
class Home extends Component {
  render() {
    return (
      <div className="home-bg">
        <h1 className="home-title">Anand's Movie Database</h1>
        <p className="home-desc">millions of movies and TV shows</p>
      </div>
    );
  }
}

export default Home;
