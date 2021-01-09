import React, { useEffect, useState } from "react";

import "./Movies.css";

import Movie from "../Movie/Movie";
import AddMovie from "../AddMovie/AddMovie";

function Movies() {
  const [movies, setMovies] = useState([]);

  function getData() {
    fetch("http://localhost:8000/api/movies")
      .then((res) => res.json())
      .then(function (res) {
        setMovies(res);
      });
  }

  useEffect(getData, []);

  const addMovie = function (movie) {
    fetch("http://localhost:8000/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then(function (res) {
        const newMovies = [...movies, res];
        setMovies(newMovies);
      });
  };

  const deleteMovie = function (movie) {
    fetch(`http://localhost:8000/api/movies/${movie.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(function (res) {
        const newMovies = movies.filter(function (item) {
          return item.id !== movie.id;
        });
        setMovies(newMovies);
      });
  };

  return (
    <div className="movies-container">
      <div className="add-movie-wrapper">
        <AddMovie addMovie={addMovie} />
      </div>

      <div className="movies-box">
        {movies.length
          ? movies.map(function (movie) {
              return <Movie movie={movie} deleteMovie={deleteMovie} />;
            })
          : "Nu sunt filme"}
      </div>
    </div>
  );
}

export default Movies;
