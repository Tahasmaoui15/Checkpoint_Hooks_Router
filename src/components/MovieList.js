import React from 'react';
import MovieCard from './MovieCard';
import Movies from './Movies';

const MovieList = () => {
  return (
    <div>
        {Movies.map((movie, index) => (
           < MovieCard key={index} {...movie} />
        ))}
    </div>
  )
}

export default MovieList;