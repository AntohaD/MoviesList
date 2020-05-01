import React, { useState } from 'react';

const MovieItem = (props) => {
  const { movie, removeMovie, addMovieWillWatch, removeMovieWillWatch } = props;
  const [willWatch, setWillWatch] = useState(false);
  
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={`https://image.tmdb.org/t/p/w500${
          movie.backdrop_path || movie.poster_path
        }`}
        alt=""
      />
      <div className="card-body">
        <h6 className="card-title">{movie.title}</h6>
        <div className="d-flex justify-content-between align-items-center">
          <p className="mb-0">Rating: {movie.vote_average}</p>
          {willWatch ? (
            <button
              type="button"
              className="btn btn-success"
              onClick={() => {
                setWillWatch(false);
                removeMovieWillWatch(movie);
              }}
            >
              Remove will Watch
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
                setWillWatch(true);
                addMovieWillWatch(movie);
              }}
            >
              Add will Watch
            </button>
          )}
        </div>
        <button onClick={() => removeMovie(movie.id)}>Delete movie</button>
      </div>
    </div>
  );
}

export default MovieItem;