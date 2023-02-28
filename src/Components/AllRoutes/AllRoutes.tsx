import React from 'react'
import Login from '../Auth/Login'
import SignIn from '../Auth/SignIn'
import { useRoutes } from "react-router-dom";
import HomeScreen from '../HomeScreen/HomeScreen';

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/register",
            element : <SignIn />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
          path: "/",
          element: <HomeScreen />
        }
    ])
  return element
}

export default AllRoutes 