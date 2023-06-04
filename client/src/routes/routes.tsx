import { createBrowserRouter } from 'react-router-dom';
import Home from '../layouts/pages/Home';
import About from '../layouts/pages/About';
import Recipe from '../layouts/pages/Recipe';
import Blog from '../layouts/pages/Blog';

/** import all components */

/** root routes */
export const routerOfApp = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    ),
  },
  {
    path: '/about',
    element: (
      <>
        <About />
      </>
    ),
  },
  {
    path: '/recipe',
    element: (
      <>
        <Recipe />,
      </>
    ),
  },
  {
    path: '/blog',
    element: (
      <>
        <Blog />
      </>
    ),
  },
  {
    path: '/signup',
    element: <h1>register</h1>,
  },
  {
    path: '/singin',
    element: <h1>singin</h1>,
  },
  {
    path: '/dashboard',
    element: <h1>dashboard</h1>,
  },

  {
    path: '*',
    element: <h1>pagenotfound</h1>,
  },
]);
