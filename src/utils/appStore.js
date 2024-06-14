import { configureStore } from "@reduxjs/toolkit";
import userinfoReducer from "./userSlice"
import moviesReducer from "./movieSlice"

  const appStore = configureStore({
       reducer :{
          userinfo : userinfoReducer,
          movies:   moviesReducer,

       }
  });

  export default appStore;