import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";

import PrivateRoute from "./PrivateRoute";
import Error from './../pages/Error/Error';
import Register from './../pages/Register/Register';
import Login from "../pages/Login/Login";
import ChefDetails from "../pages/ChefDetails/ChefDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: ":id",
          element: (
            <PrivateRoute>
               <ChefDetails></ChefDetails>
            </PrivateRoute>
          ),
        },
      ]
    },
  ]);
  export default router;