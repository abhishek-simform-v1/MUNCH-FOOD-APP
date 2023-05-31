import { createBrowserRouter } from "react-router-dom";
import Hero from "../layouts/landingLayoutsFeature/pages/Hero";
import About from "../layouts/landingLayoutsFeature/pages/About";
import Recipe from "../layouts/landingLayoutsFeature/pages/Recipe";
import Navbar from "../shared/navbar/Navbar";
/** import all components */

/** root routes */
export const routerOfApp = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Hero />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },
  {
    path: "/recipe",
    element: (
      <>
        <Navbar />
        <Recipe />,
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <Navbar />
        <h1>blog</h1>,
      </>
    ),
  },
  {
    path: "/register",
    element: <h1>register</h1>,
  },
  {
    path: "/singin",
    element: <h1>singin</h1>,
  },
  {
    path: "/dashboard",
    element: <h1>dashboard</h1>,
  },

  {
    path: "*",
    element: <h1>pagenotfound</h1>,
  },
]);
