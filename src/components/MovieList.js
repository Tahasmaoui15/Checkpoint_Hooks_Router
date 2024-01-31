import React from 'react';
import MovieCard from './MovieCard';
import Movies from './Movies';

const MovieList = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", justifyContent: "center", marginTop:"5rem" }}>
        {Movies.map((movie, index) => (
           < MovieCard key={index} {...movie} />
        ))}
    </div>
  )
}

export default MovieList;