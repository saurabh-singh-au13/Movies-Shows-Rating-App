import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import { getAllMovies, getAllShows } from "../../features/movies/movieSlice";
import MovieCard from "../movieCard/MovieCard";
import { Settings } from "../../common/settings";
import "./MovieListing.scss";

const MovieListing = () => {
  
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  console.log("MMMMMMMMM", movies);
  let renderMovies, renderShows = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />; // return the MovieCard component
      })
    ) : (
      <div className="movies-error">
        <h1>{movies.Error}</h1>
      </div>
    );

    renderShows =
    shows.Response === "True" ? (
      shows.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />; // return the MovieCard component
      })
    ) : (
      <div className="shows-error">
        <h1>{shows.Error}</h1>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider></div>
      
       
      </div>

      <div className="movie-list">
        <h2>shows</h2>
        <div className="movie-container">
        <Slider {...Settings}>{renderShows}</Slider></div>
      
       
      </div>
    </div>
  );
};

export default MovieListing;
