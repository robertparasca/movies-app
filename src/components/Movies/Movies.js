import React, { useEffect, useState } from "react";

import "./Movies.css";

import Movie from "../Movie/Movie";
import AddMovie from "../AddMovie/AddMovie";

const moviesData = [
  {
    id: 1,
    name: "Friends",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    rating: 8,
    image:
      "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY268_CR0,0,182,268_AL_.jpg",
  },
  {
    id: 2,
    name: "How I meet your mother",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    rating: 8,
    image:
      "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/20/1494944662-himym.jpg",
  },
];

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(function () {
    setMovies(moviesData);
  }, []);

  const addMovie = function () {};

  const deleteMovie = function (movie) {
    const newMovies = movies.filter(function (item) {
      return item.id !== movie.id;
    });
    setMovies(newMovies);
  };

  return (
    <div className="movies-container">
      <div className="add-movie-wrapper">
        <AddMovie />
      </div>

      <div className="movies-box">
        {moviesData.length
          ? movies.map(function (movie) {
              return <Movie movie={movie} deleteMovie={deleteMovie} />;
            })
          : "Nu sunt filme"}
      </div>
    </div>
  );
}

export default Movies;
