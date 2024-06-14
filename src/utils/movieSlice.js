import { createSlice } from "@reduxjs/toolkit";

  const moviesSlice = createSlice({
       name:"movies",
       initialState:{
        nowPlaying : null,
        trailers : null,
       },
       reducers:{
          addNowPlayingMovies : (state,action) =>{
              state.nowPlaying = action.payload
          },
          addNowTrailer : (state,action) =>{
              state.trailers = action.payload
          }
       }
  });
  
   export const {addNowPlayingMovies ,addNowTrailer} = moviesSlice.actions;

  export default moviesSlice.reducer;