import React, { useState } from "react";
import "./searchmovies.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchMovies() {
  //states- input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);
  //state for total movies
  const [total_movies, tmovies] = useState();

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=eade31ca59784f7e07b8f92bea8025ee&language=en-US&query=${query}&page=1&include_adult=true`;

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
          <h2 className="search-movies-title">Search Movies</h2>
          <input
            className="input"
            type="text"
            name="query"
            placeholder="i.e Baahubali"
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
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <div className="movies-container">
              <div className="card" key={movie.id}>
                <img
                  className="card--image"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + " poster"}
                />
                <div className="card--content">
                  <h3 className="card--title">{movie.title}</h3>
                  <p>
                    <small>RELEASE DATE: {movie.release_date}</small>
                  </p>
                  <p>
                    <small>RATING: {movie.vote_average}</small>
                  </p>
                  <p>Popularity: {movie.popularity}</p>
                  <p>Original Title: {movie.original_title}</p>
                  <p className="card--desc">{movie.overview}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default SearchMovies;
