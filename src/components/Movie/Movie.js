import React from "react";

import "./Movie.css";

function Movie({ movie, deleteMovie }) {
  const removeMovie = function () {
    deleteMovie(movie);
  };

  const generateStars = function (rating) {
    if (rating === 0) return "No stars";

    const array = new Int8Array(rating);

    return array.reduce(function (acc) {
      return acc + "⭐";
    }, "");
  };

  return (
    <div className="movie-card">
      <div className="movie-header">
        <h3>{movie.name}</h3>
        <button onClick={removeMovie}>❌</button>
      </div>

      <small>Rating: {generateStars(movie.rating)}</small>
      <p>{movie.description}</p>
      <div className="movie-image">
        <img src={movie.image} />
      </div>
    </div>
  );
}

export default Movie;
