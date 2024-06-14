import React from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Browser from './Browser'

function Body() {
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

   

  return (
    <div>
     <RouterProvider router={appRoute} />
    </div>
  )
}

export default Body
