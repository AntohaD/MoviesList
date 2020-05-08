import React, { useContext } from "react";
import Context from "../../context";

import './pagination.scss';

const Pagination = (props) => {
 const { page } = props;
 const { dispatch } = useContext(Context);

 const nextPage = () => {
  dispatch({
    type: 'nextPage',
  })
 }

 const prevPage = () => {
  dispatch({
    type: "prevPage",
  });
 }

  return (
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
  )
}

export default Pagination;