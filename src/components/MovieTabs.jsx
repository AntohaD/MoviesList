import React, { useContext } from "react";
import classNames from "classnames/bind";
import Context from "../context";

import styles from "../style/app.scss";

let cx = classNames.bind(styles);

const MovieTabs = (props) => {
  const { sort_by } = props;
   const { dispatch } = useContext(Context); 

  const updateSortBy = (value) => {
    dispatch({
      type: "sort",
      payload: value,
    });
  };

   const handleClick = (value) => {
     return () => {
       updateSortBy(value);
     };
   };

  const className = (value) =>
    cx({
      'nav-link': true,
      active: sort_by === value,
    });

  return (
    <ul className="tabs nav nav-pills">
      <li className="nav-item">
        <div
          className={className("popularity.desc")}
          onClick={handleClick("popularity.desc")}
        >
          Popularity desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={className("revenue.desc")}
          onClick={handleClick("revenue.desc")}
        >
          Revenue desc
        </div>
      </li>
      <li className="nav-item">
        <div
          className={className("vote_average.desc")}
          onClick={handleClick("vote_average.desc")}
        >
          Vote average desc
        </div>
      </li>
    </ul>
  );
}

export default MovieTabs;