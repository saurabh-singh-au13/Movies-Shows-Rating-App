//extra reducers what dose it make a multiple action invoke in single reducer only

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIkey } from "../../common/apis/movieApiKey";
import movieApi from "../../common/apis/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
   
    const response = await movieApi
      //created api endpoints
      .get(`?apikey=${APIkey}&s=${term}&type=movie`);

    return response.data;
  }
);

export const fetchAsyncSeries = createAsyncThunk(
    "movies/fetchAsyncSeries",
    async (term) => {
      
      const response = await movieApi
        //created api endpoints
        .get(`?apikey=${APIkey}&s=${term}&type=series`);
  
      return response.data;
    }
  );

  export const fetchAsyncMovieOrShowsDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowsDetail",
    async (id) => {
      const response = await movieApi
        //created api endpoints
        .get(`?apikey=${APIkey}&i=${id}&Ploot=full`);
      return response.data;
    }
  );

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrshowDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrshowDetail = {}
    }
  },
  extraReducers:{
    [fetchAsyncMovies.pending]: () => {
        console.log("Pendoing");
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
        console.log("Fetched successfully");
        return { ...state,movies:payload }
    },
    [fetchAsyncSeries.fulfilled]: (state, {payload}) => {
        console.log("Fetched successfully");
        return { ...state,shows:payload }
    },
    [fetchAsyncMovieOrShowsDetail.fulfilled]: (state, {payload}) => {
      console.log("Fetched successfully");
      return { ...state,selectedMovieOrshowDetail:payload }
  },
    [fetchAsyncMovies.rejected] : () => {
        console.log("Rejected")
    }

  }
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrshowDetail;
export default movieSlice.reducer;
