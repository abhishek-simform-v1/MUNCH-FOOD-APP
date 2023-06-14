import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "../layouts/Dashboard/pages/RecipePageFolder/CreateRecipe/CreateRecipe";
// import Profile from "../layouts/Dashboard/pages/Profile/Profile";
// import CreateRecipe from "../layouts/Dashboard/pages/RecipePageFolder/CreateRecipe/CreateRecipe";
import DashboardLayout from "../shared/sidebar/DashboardLayout";
// import MyBlog from "../layouts/Dashboard/pages/Blog/MyBlog/MyBlog";
// import CreateBlog from "../../layouts/Dashboard/pages/Blog/CreateBlog/CreateBlog";
// import Favorite from "../layouts/Dashboard/pages/favorites/Favorite";
import Home from "../layouts/Site/pages/Home";
import About from "../layouts/Site/pages/About";
import Recipe from "../layouts/Site/pages/Recipe";
import Blog from "../layouts/Site/pages/Blog";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/hooks";
import { getRecipes } from "../slices/Slice";
import CreateRecipe from "../layouts/Dashboard/pages/RecipePageFolder/CreateRecipe/CreateRecipe";
import Favorite from "../layouts/Dashboard/pages/favorites/Favorite";
import CreateBlog from "../layouts/Dashboard/pages/Blog/CreateBlog/CreateBlog";
import MyBlog from "../layouts/Dashboard/pages/Blog/MyBlog/MyBlog";
import Profile from "../layouts/Dashboard/pages/Profile/Profile";
import Recipes from "../layouts/Site/pages/Recipes";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";

function AppRoutes() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(getRecipes());
        setIsLoading(false);
      } catch (error) {
        // Handle error
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <>loading</>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <DashboardLayout>
              <Profile />
            </DashboardLayout>
          }
        />
        <Route
          path="/createrecipe"
          element={
            <DashboardLayout>
              <CreateRecipe />
            </DashboardLayout>
          }
        />
        {/* <Route
          path="/myrecipes"
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }
        /> */}
        <Route
          path="/myblogs"
          element={
            <DashboardLayout>
              <MyBlog />
            </DashboardLayout>
          }
        />
        <Route
          path="/createblog"
          element={
            <DashboardLayout>
              <CreateBlog />
            </DashboardLayout>
          }
        />
        <Route
          path="/favorites"
          element={
            <DashboardLayout>
              <Favorite />
            </DashboardLayout>
          }
        />
        <Route path="/signup" element={<h1>register</h1>} />
        <Route path="/singin" element={<h1>singin</h1>} />
        <Route path="*" element={<h1>pagenotfound</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
