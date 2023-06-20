import { useState } from "react";
import {
  NavContainer,
  NavLinkContainer,
  NavLogo,
  NavigationToggle,
} from "./HeaderStyle";
import logout from "./../../assets/icons/signout.svg";
import login from "./../../assets/icons/signin.svg";
import "./style.css";
import { NavLink, useNavigate } from "react-router-dom";
import Paragraph from "../../utils/Typography/Paragraph";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { LOG_OUT, selectAuth, selectUser } from "../../slices/userSlice";
import Profile from "./../../assets/icons/profile_nav.svg";
const Header = () => {
  const auth = useAppSelector(selectAuth);
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <>
      <NavContainer>
        <NavLogo>
          <Paragraph color=" var(--logo_color)">DishDelights</Paragraph>
        </NavLogo>
        <NavigationToggle />
        <NavLinkContainer>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/recipes"}
          >
            Recipes
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/blog"}
          >
            Blog
          </NavLink>
        </NavLinkContainer>
        <NavLinkContainer>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to={"/"}
          >
            <svg
              fill="#213234"
              height="32px"
              width="32px"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-143 145 512 512"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <g>
                  {" "}
                  <path d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M272.8,560.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C-107,461.1-113,431.5-113,401s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C52.9,181,82.5,175,113,175s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C309.8,515.8,293.5,540,272.8,560.7z"></path>{" "}
                  <path d="M224.5,351.2c0.9-20.1-1.8-39.6-8.6-58.6c-0.9-2.4-2-3.3-4.5-2.6c-5.6,1.7-11.4,3-16.9,5c-15.2,5.5-29.1,13.5-42.6,22.2 c-1.4,0.9-3.5,1.5-5.2,1.2c-22.1-3.9-44.3-3.7-66.5-0.3c-2.2,0.3-5-0.2-6.8-1.3c-15.7-10.2-31.7-20.2-50-25 c-15.1-4-12-4.8-16.3,8.9c-5.1,16.4-7.1,33.4-6,50.6c0.1,1.2-0.8,2.7-1.6,3.8c-6.6,7.9-11.7,16.6-14.8,26.4c-6,19-4.8,38.2-1,57.3 c7.5,37.5,32.8,63.8,70.2,70.3c19.3,3.4,39.2,3.7,57.3,5.2c20.2-1.5,38.9-1.6,57.1-4.5c31.8-5.1,55.8-22,67.8-52.7 c4.2-10.7,6.5-22.4,7.9-33.8c3.1-25.2-1.2-48.8-18.4-68.7C225,353.8,224.5,352.4,224.5,351.2z M208.1,459.1 c-3.3,15.6-12.4,26.3-27.6,31.8c-14.7,5.4-29.9,7.6-45.4,8.6c-7.5,0.5-15,0.1-22.5,0.1c-20.2,0.4-40.4-0.4-59.9-6.2 c-24.5-7.3-35.5-21.9-36.2-47.5c-0.3-9.1,0.7-17.9,5-26.1c8.5-16.5,23.2-22.3,40.6-22.6c9.5-0.1,19.1,0.7,28.7,1.6 c20.1,1.8,40-0.1,60-1.2c8.8-0.5,17.8-0.7,26.4,0.8c18.5,3.2,32.5,21.6,32.8,42.3C210,446.8,209.3,453.1,208.1,459.1z"></path>{" "}
                  <path d="M56.1,424.8c-5.5,5.7-7.4,12.9-7.7,19.3c0,9.6,2.8,17.3,7.7,22.3c6.8,6.9,16.1,6.7,22.6-0.3c9.8-10.6,9.7-30.5,0-41 C72.2,418,62.7,417.9,56.1,424.8z"></path>{" "}
                  <path d="M148.2,424c-11.2,10.3-11.2,33,0,43.2c6.5,5.9,15.3,5.6,21.4-0.7c5.6-5.8,7.6-13.1,7.8-21c-0.2-7.9-2.2-15.1-7.9-20.9 C163.4,418.3,154.6,418.1,148.2,424z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
          </NavLink>
          <div className="profile_img_container">
            {auth ? (
              <img src={user.user_image} className={"profile_img"} />
            ) : (
              <img src={Profile} className={"profile_img"} />
            )}
          </div>

          {auth ? (
            <img
              src={logout}
              className="auth_icon"
              alt="logout_img"
              onClick={() => dispatch(LOG_OUT())}
            />
          ) : (
            <img
              src={login}
              className="auth_icon"
              alt="login_img"
              onClick={() => navigate("/signin", { replace: true })}
            />
          )}
        </NavLinkContainer>
      </NavContainer>
    </>
  );
};

export default Header;
