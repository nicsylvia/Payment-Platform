import React from 'react'
import Login from '../Auth/Login'
import SignIn from '../Auth/SignIn'
import { useRoutes } from "react-router-dom";

const AllRoutes = () => {

    const element = useRoutes([
        {
            path: "/register",
            element : <SignIn />
        },
        {
            path: "/login",
            element: <Login />
        }
    ])
  return element
}

export default AllRoutes 