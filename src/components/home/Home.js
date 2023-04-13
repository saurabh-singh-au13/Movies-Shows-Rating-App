import React, { useEffect } from "react";
import MovieListing from "../movieListing/MovieListing";

import { useDispatch } from "react-redux";
import { addMovies, fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends"
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncSeries(showText))
  }, []);

  return (
    <>
      <div className="banner-img">
        <MovieListing />
      </div>
    </>
  );
};

export default Home;
