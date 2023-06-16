import { ReactNode, useRef, useState } from "react";
import style from "./style.module.css";

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
  }

  return (
    <div>
      {menuopen ? (
        <div className={style.desknav}>
          <div className={style.deskmenubtn}>
            <img onClick={() => openMenu()} src={menu} alt="" />
          </div>
          <DesktopSidebar />
        </div>
      ) : (
        <div className={style.mobilenav}>
          <div className={style.mobilemenubtn}>
            <img onClick={() => openMenu()} src={menu} alt="" />
          </div>
          <MobileSidebar />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
