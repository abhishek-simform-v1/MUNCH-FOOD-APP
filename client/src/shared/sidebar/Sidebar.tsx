import { ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import style from './style.module.css';

type props = {
  children?: ReactNode;
};
import menu from './../../assets/icons/menu.svg';
import { NavLink } from 'react-router-dom';
import MobileSidebar from './MobileSidebar';
import DesktopSidebar from './DesktopSidebar';
const Sidebar = ({ children }: props) => {
  const [menuopen, setMenuopen] = useState(false);

  function openMenu() {
    setMenuopen((prev) => !prev);
  }

  return (
    <div className={style.sidebar}>
      <div>
        <div className={menuopen ? style.menubtn : style.menubtn2}>
          <img onClick={() => openMenu()} src={menu} alt="" />
        </div>
        {menuopen ? <DesktopSidebar /> : <MobileSidebar />}
      </div>
    </div>
  );
};

export default Sidebar;
