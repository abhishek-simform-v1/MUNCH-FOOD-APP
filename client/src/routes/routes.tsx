import { createBrowserRouter } from "react-router-dom";
import Home from "../layouts/pages/Home";
import About from "../layouts/pages/About";
import Recipe from "../layouts/pages/Recipe";
import Blog from "../layouts/pages/Blog";
import Dashboard from "../layouts/Dashboard/pages/CreateRecipe/CreateRecipe";
import Profile from "../layouts/Dashboard/pages/Profile/Profile";
import CreateRecipe from "../layouts/Dashboard/pages/CreateRecipe/CreateRecipe";
import FavoriteRecipe from "../layouts/Dashboard/pages/  FavoriteRecipe/  FavoriteRecipe";

/** import all components */

/** root routes */
export const routerOfApp = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: "/recipe",
    element: (
      <>
        <Recipe />,
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Blog />
      </>
    ),
  },
  // dashboard pages
  {
    path: "/profile",
    element: (
      <>
        <Profile />
      </>
    ),
  },
  {
    path: "/createrecipe",
    element: (
      // <>
      //   {/* <Dashboard /> */}
      //   <CreateRecipe />
      // </>
      <CreateRecipe />
    ),
  },
  {
    path: "/favoriterecipe",
    element: (
      <>
        {/* <Dashboard /> */}
        <FavoriteRecipe />
      </>
    ),
  },
  {
    path: "/myrecipes",
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
  {
    path: "/signup",
    element: <h1>register</h1>,
  },
  {
    path: "/singin",
    element: <h1>singin</h1>,
  },

  {
    path: "*",
    element: <h1>pagenotfound</h1>,
  },
]);
