import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../shared/sidebar/DashboardLayout";
import Home from "../layouts/Site/pages/Home";
import About from "../layouts/Site/pages/About";
import Recipe from "../layouts/Site/pages/Recipe";
import Blog from "../layouts/Site/pages/Blog";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getRecipes } from "../slices/recipeSlice";
import CreateRecipe from "../layouts/Dashboard/pages/RecipePageFolder/CreateRecipe/CreateRecipe";
import Favorite from "../layouts/Dashboard/pages/favorites/Favorite";
import CreateBlog from "../layouts/Dashboard/pages/Blog/CreateBlog/CreateBlog";
import MyBlog from "../layouts/Dashboard/pages/Blog/MyBlog/MyBlog";
import Profile from "../layouts/Dashboard/pages/Profile/Profile";
import Recipes from "../layouts/Site/pages/Recipes";
import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../database/firebase-config";
import { getUser, selectLoadingUser, selectUser } from "../slices/userSlice";

function AppRoutes() {
  const [isLoadingAuth, setIsLoadingAuth] = useState(true);
  const dispatch = useAppDispatch();
  const current_user = useAppSelector(selectUser);
  function get_current_user() {
    if (current_user) {
      return true;
    } else {
      return false;
    }
  }
  const iscurrentUser = get_current_user();
  const isLoading = useAppSelector(selectLoadingUser);
  const [isAuthenticated, setIsAuthenticated] = useState(iscurrentUser);

  useEffect(() => {
    setIsLoadingAuth(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        setIsLoadingAuth(false);
      } else {
        setIsAuthenticated(false);
        setIsLoadingAuth(false);
      }
    });
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUser());
    }
    const fetchData = async () => {
      try {
        await dispatch(getRecipes());
      } catch (error) {}
    };
    fetchData();
  }, [isAuthenticated]);

  console.log("loading:", isLoading);
  console.log("Auth", isAuthenticated);
  console.log("AuthLoading:", isLoadingAuth);
  if (isLoading || isLoadingAuth) {
    return <h1>Loading...</h1>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipe/:id" element={<Recipe />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/blog" element={<Blog />} />

        <Route
          path="/profile"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Profile />
              </DashboardLayout>
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
        <Route
          path="/createrecipe"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <CreateRecipe />
              </DashboardLayout>
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
        <Route path="*" element={<h1>pagenotfound</h1>} />
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
            isAuthenticated ? (
              <DashboardLayout>
                <CreateBlog />
              </DashboardLayout>
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
        <Route
          path="/favorites"
          element={
            isAuthenticated ? (
              <DashboardLayout>
                <Favorite />
              </DashboardLayout>
            ) : (
              <Navigate to="/signup" replace />
            )
          }
        />
        <Route
          path="/signin"
          element={!isAuthenticated ? <SignIn /> : <Navigate to="/" replace />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <SignUp /> : <Navigate to="/" replace />}
        />

        <Route path="*" element={<h1>pagenotfound</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
