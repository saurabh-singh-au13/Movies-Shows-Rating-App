import React, { useState } from "react";
import { Link } from "react-router-dom";

import userImage from "../../images/userImage.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice";

const Header = () => {
  const dispatch = useDispatch()
  const [term, setTerm] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    if(term === "") return alert("Please enter movie or series name!")
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncSeries(term));
    setTerm("")
    
    console.log(term, "TTTTTTT")
  };
  return (
    <>
      <div className="header">
        <div className="logo">
          {" "}
          <Link to="/">Movie App </Link>
        </div>
        <div className="search-bar">
          <form onSubmit={submithandler}>
            <input
              name="text"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
              placeholder="Search movies or shows"
            />
            <button type="submit">
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>

        <div className="user-image">
          <img src={userImage} alt="User" />
        </div>
      </div>
    </>
  );
};

export default Header;
