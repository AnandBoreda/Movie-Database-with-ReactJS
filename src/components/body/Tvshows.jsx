import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Tvshows() {
  //states- input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);
  //state for total movies
  const [total_movies, tmovies] = useState();

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/tv?api_key=eade31ca59784f7e07b8f92bea8025ee&language=en-US&query=${query}&page=1&include_adult=true`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      tmovies(data.total_results);
    } catch (err) {
      console.error(err);
      alert("Uh oh! Something went wrong. Please try again later");
    }
  };
  return (
    <div className="content">
      <div>
        <form className="form" onSubmit={searchMovies}>
          <h2 className="search-movies-title">Search Tv shows</h2>
          <input
            className="input"
            type="text"
            name="query"
            placeholder="i.e money heist"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button className="search-button" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <h2 className="showing-results">Showing {total_movies} results</h2>

      <div className="card-list">
        {movies
          .filter((tvshow) => tvshow.poster_path)
          .map((tvshow) => (
            <div className="movies-container">
              <div className="card" key={tvshow.id}>
                <img
                  className="card--image"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${tvshow.poster_path}`}
                  alt={tvshow.title + " poster"}
                />
                <div className="card--content">
                  <h3 className="card--title">{tvshow.title}</h3>
                  <p>
                    <small>FIRST AIR DATE: {tvshow.first_air_date}</small>
                  </p>
                  <p>
                    <small>RATING: {tvshow.vote_average}</small>
                  </p>
                  <p>Popularity: {tvshow.popularity}</p>
                  <p>Original Title: {tvshow.original_name}</p>
                  <p className="card--desc">{tvshow.overview}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
