import React, { useState } from "react";
import logo from "./../../assets/mainLogo.svg";
import {
  NavContainer,
  NavLinkContainer,
  NavLogo,
  NavLink,
} from "./NavabarStyle";
import { Link, useNavigate } from "react-router-dom";
import { Button, Paragraph } from "../../styleComponents/utils/utils";
const Navbar = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  return (
    <NavContainer>
      <NavLogo>
        <img src={logo} alt="logo" className="logo" />
        <Paragraph>munch</Paragraph>
      </NavLogo>
      <NavLinkContainer>
        <NavLink
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </NavLink>
        <NavLink
          onClick={() => {
            navigate("/about");
          }}
        >
          About
        </NavLink>
        <NavLink onClick={() => navigate("/recipe")}>Recipe</NavLink>
        <NavLink onClick={() => navigate("/blog")}>Blog</NavLink>
      </NavLinkContainer>
      <Button>fdfdfn</Button>
    </NavContainer>
  );
};

export default Navbar;
