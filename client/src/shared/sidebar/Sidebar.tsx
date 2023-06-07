import { ReactNode, useRef, useState } from "react";
import styled from "styled-components";
import style from "./style.module.css";
import profileImg from "./../../assets/icons/profile.svg";
import createImg from "./../../assets/icons/create.svg";
import favImg from "./../../assets/icons/favoriteRecipe.svg";
import myRecipeImg from "./../../assets/icons/myRecipe.svg";
type props = {
  children?: ReactNode;
};
import menu from "./../../assets/icons/menu.svg";
import { NavLink } from "react-router-dom";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";
const Sidebar = ({ children }: props) => {
  const [menuopen, setMenuopen] = useState(false);

  function openMenu() {
    setMenuopen((prev) => !prev);
    // if (menuopen) {
    //   setMenuopen(false);
    // } else {
    //   setMenuopen(true);
    // }
  }
  console.log(menuopen);
  return (
    <div className={style.sidebar}>
      <div>
        <div className={style.menubtn}>
          <img onClick={() => openMenu()} src={menu} alt="" />
        </div>
        {menuopen ? <DesktopSidebar /> : <MobileSidebar />}
      </div>
      <div className={style.content}>{children}</div>
    </div>
  );
};

export default Sidebar;
