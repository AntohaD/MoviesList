
import React from 'react'

import { API_URL, API_KEY_3 } from "../utils/api";

export const getMovies = async (sort_by, page) => {
  let result;

  await fetch(
    `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${sort_by}&page=${page}`
  ).then((response) => {
    return response.json();
  }).then((data) => {
    result = data.results;
  });

  return result;
};