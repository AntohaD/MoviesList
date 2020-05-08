import React, { useState, useEffect, useContext } from "react";
import MovieItem from '../../components/MovieItem';
import MovieTabs from '../../components/MovieTabs';
import { getMovies } from "../../services/getMovies";
import FilterComponent from '../../components/FilterComponent/FilterComponent';
import Pagination from '../../components/Pagination/Pagination';
import Context from '../../context';

import './mainPage.scss';

function MainPage({appState}) {
  console.log(appState);
  const { arrayMovies, sortBy, page } = appState;
  const { dispatch } = useContext(Context);
  const [movies, setMovies] = useState(arrayMovies);
  const [moviesWillWatch, setMoviesWillWatch] = useState([]);
  
  const getMovie = async (sortBy, page) => {
    let movies = await getMovies(sortBy, page);
    dispatch({
      type: "getMovies",
      payload: movies,
    });
  };

  useEffect(() => {
    getMovie(sortBy, page);
  }, [sortBy, page]);

   useEffect(() => {
     setMovies(arrayMovies);
   }, [arrayMovies]);

  const removeMovie = (id) => {
    const updateMovies = movies.filter((item) => {
      return item.id !== id;
    });
    setMovies(updateMovies);
  }

  const addMovieWillWatch = (movie) => {
    const updateMoviesWillWatch = [...moviesWillWatch, movie];
    setMoviesWillWatch(updateMoviesWillWatch);

    return moviesWillWatch;
  };

  const removeMovieWillWatch = (movie) => {
    const updateMoviesWillWatch = moviesWillWatch.filter(item => {
      return item.id !== movie.id;
    });
    setMoviesWillWatch(updateMoviesWillWatch);

    return moviesWillWatch;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-10">
          <div className="row mb-4">
            <div className="tabs-container col-12">
              <MovieTabs sort_by={sortBy} />
            </div>
            {movies.map((movie) => {
              return (
                <div className="col-md-6 col-sm-12 mb-4" key={movie.id}>
                  <MovieItem
                    movie={movie}
                    removeMovie={removeMovie}
                    addMovieWillWatch={addMovieWillWatch}
                    removeMovieWillWatch={removeMovieWillWatch}
                  />
                </div>
              );
            })}
          </div>
          <Pagination page={page} />
          {/* <div className="willWatch col-2">
          Will watch: {moviesWillWatch.length}
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
