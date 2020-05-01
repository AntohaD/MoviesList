import React, { useState, useEffect } from "react";
import MovieItem from './MovieItem';
import MovieTabs from './MovieTabs';
import { getMovies } from "../services/getMovies";

import '../style/app.scss';

function App() {
  const [movies, setMovies] = useState([]);
  const [moviesWillWatch, setMoviesWillWatch] = useState([]);
  const [sort_by, setSort_by] = useState("popularity.desc");
  let [page, setPage] = useState(1);
  
  const getMovie = async (sort_by, page) => {
    let getResult = await getMovies(sort_by, page);
    setMovies(getResult);
  };

  useEffect(() => {
    getMovie(sort_by, page);
  }, [sort_by, page]);

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

  const updateSortBy = (value) => {
    setSort_by(value);
  }

  const prevPage = () => {
    if(page > 1) {
      setPage((page -= 1));
    }
  }

  const nextPage = () => {
    setPage(page += 1)
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-10">
          <div className="row mb-4">
            <div className="tabs-container col-12">
              <MovieTabs sort_by={sort_by} updateSortBy={updateSortBy} />
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
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li
                className={`page-item ${page < 2 && "disabled"}`}
                onClick={prevPage}
              >
                <a
                  className="page-link"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {page}
                </a>
              </li>
              <li className="page-item" onClick={nextPage}>
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="willWatch col-2">
          Will watch: {moviesWillWatch.length}
        </div>
      </div>
    </div>
  );
}

export default App;
