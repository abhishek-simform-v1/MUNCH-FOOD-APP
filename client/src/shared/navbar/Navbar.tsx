import React, { useState } from "react";
import logo from "./../../assets/mainLogo.svg";
import {
  NavContainer,
  NavLinkContainer,
  NavLogo,
  NavbarButton,
} from "./NavabarStyle";
import "./style.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Paragraph } from "../../styleComponents/utils/utils";
const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setActive] = useState(true);

  return (
    <>
      {isActive ? (
        <NavContainer>
          <NavLogo>
            <img src={logo} alt="logo" className="logo" />
            <Paragraph>munch</Paragraph>
          </NavLogo>
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
              to={"/recipe"}
            >
              Recipe
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "inactive")}
              to={"/blog"}
            >
              Blog
            </NavLink>
          </NavLinkContainer>
          <NavbarButton>Sign In</NavbarButton>
        </NavContainer>
      ) : (
        <div>=</div>
      )}
    </>
  );
};

export default Navbar;
