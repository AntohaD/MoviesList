import React, { useReducer } from "react";
import MainPage from "./pages/MainPage/MainPage";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import reducer from './reducer';
import Context from "./context";

import "bootstrap/dist/css/bootstrap.min.css";

import "./style/app.scss";

const initialState = {
  page: 1,
  arrayMovies: [],
  sortBy: "popularity.desc",
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState )

  return (
    <Context.Provider value={{ dispatch }}>
      <div className="App">
        <Header />
        <MainPage appState={state}/>
        <Footer />
      </div>
    </Context.Provider>
  );
}

export default App;
