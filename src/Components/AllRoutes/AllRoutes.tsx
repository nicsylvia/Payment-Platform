import React from 'react'
import Login from '../Auth/Login'
import SignIn from '../Auth/SignIn'
import { useRoutes } from "react-router-dom";
import HomeScreen from '../HomeScreen/HomeScreen';
import DashBoard from '../DashBoard/DashBoard';

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
        },
        {
          path: "/dashboard-sylviavest.com",
          element: <DashBoard />
        }
    ])
  return element
}

export default AllRoutes 