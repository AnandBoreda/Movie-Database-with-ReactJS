import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/header/NavBar";
import SearchMovies from "./components/body/SearchMovies";
import Footer from "./components/footer/footer";
import Tvshows from "./components/body/Tvshows";
import Home from "./components/body/Home";

class App extends Component {
  render() {
    return (
      <div className="content-main">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/movies" component={SearchMovies} />
            <Route path="/tv-shows" component={Tvshows} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
