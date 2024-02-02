import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Movies from "./Movies";
import Filter from "./Filter";

const MovieList = () => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (value) => {
    setFilterValue(value);
    filterMovies(value);
  };

  const filterMovies = (value) => {
    const lowercasedValue = value.toLowerCase();
    const filtered = Movies.filter(
      (movie) =>
        movie.title.toLowerCase().includes(lowercasedValue) ||
        movie.rating.toString().includes(lowercasedValue)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <Filter
        onFilterChange={handleFilterChange}
        style={{ marginLeft: "65rem" }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
          justifyContent: "center",
          marginTop: "5rem",
        }}
      >
        {filteredMovies.length > 0
          ? filteredMovies.map((movie, index) => (
              <MovieCard key={index} {...movie} />
            ))
          : Movies.map((movie, index) => <MovieCard key={index} {...movie} />)}
      </div>
    </div>
  );
};

export default MovieList;
