import { createBrowserRouter } from "react-router-dom";

import Dashboard from "../layouts/Dashboard/pages/Recipe/CreateRecipe/CreateRecipe";
import Profile from "../layouts/Dashboard/pages/Profile/Profile";
import CreateRecipe from "../layouts/Dashboard/pages/Recipe/CreateRecipe/CreateRecipe";
import FavoriteRecipe from "../layouts/Dashboard/pages/favorites/FavoriteRecipe/FavoriteRecipe";
import Sidebar from "../shared/sidebar/Sidebar";
import DashboardLayout from "../shared/sidebar/DashboardLayout";
import MyBlog from "../layouts/Dashboard/pages/Blog/MyBlog/MyBlog";
import CreateBlog from "../layouts/Dashboard/pages/Blog/CreateBlog/CreateBlog";
import FavoriteBlog from "../layouts/Dashboard/pages/favorites/FavoriteBlog/FavoriteBlog";
import Favorite from "../layouts/Dashboard/pages/favorites/Favorite";
import Home from "../layouts/Site/pages/Home";
import About from "../layouts/Site/pages/About";
import Recipe from "../layouts/Site/pages/Recipe";
import Blog from "../layouts/Site/pages/Blog";

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
    path: "/recipe/:id",
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
      <DashboardLayout>
        <Profile />
      </DashboardLayout>
    ),
  },
  //recipe Pages
  {
    path: "/createrecipe",
    element: (
      <DashboardLayout>
        <CreateRecipe />
      </DashboardLayout>
    ),
  },

  {
    path: "/myrecipes",
    element: (
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
    ),
  },
  //blog Pages

  {
    path: "/myblogs",
    element: (
      <DashboardLayout>
        <MyBlog />
      </DashboardLayout>
    ),
  },
  {
    path: "/createblog",
    element: (
      <DashboardLayout>
        <CreateBlog />
      </DashboardLayout>
    ),
  },
  {
    path: "/favorites",
    element: (
      <DashboardLayout>
        <Favorite />
      </DashboardLayout>
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
