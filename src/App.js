import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";

import Home from "./components/home/Home";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import MovieDetail from "./components/movieDetail/MovieDetail";
import Footer from "./components/footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/movie/:imdbID" Component={MovieDetail} />
            <Route Component={PageNotFound} />
          </Routes>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
