import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import Blog from "../pages/Blog/Blog";
import ChefRecipesDetails from "../pages/ChefRecipesDetails/ChefRecipesDetails";
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
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
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: ":id",
          element: (
            <PrivateRoute>
               <ChefRecipesDetails></ChefRecipesDetails>,
            </PrivateRoute>
          ),
        },
      ]
    },
  ]);
  export default router;