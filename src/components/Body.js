import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browser'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUserinfo, removeUserinfo } from '../utils/userSlice'
import Browser from './Browser'

function Body() {
     
    const dispatch = useDispatch();
   
    const appRoute = createBrowserRouter([
         
        {
            path:"/",
            element: <Login />
        },
        {
            path:"/browser",
            element : <Browser />
        }
    ]);

    useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid ,email, displayName} = user;
            dispatch(addUserinfo({uid : uid , email : email , displayName : displayName})); 
           
          // ...
        } else {
          // User is signed out
          // ...
           dispatch(removeUserinfo());
        }
      });
    },[]);


  return (
    <div>
     <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body
