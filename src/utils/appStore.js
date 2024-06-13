import { configureStore } from "@reduxjs/toolkit";
import userinfoReducer from "./userSlice"

  const appStore = configureStore({
       reducer :{
          userinfo : userinfoReducer
       }
  });

  export default appStore;