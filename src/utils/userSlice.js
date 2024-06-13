import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
     
     name:"userinfo",
     initialState : null,
     reducers:{

         addUserinfo : (state,action) =>{
                 return action.payload
         },

         removeUserinfo : (state,action) =>{
                return null;
         }
     }


});

 export const {addUserinfo , removeUserinfo} = userSlice.actions;

export default userSlice.reducer;