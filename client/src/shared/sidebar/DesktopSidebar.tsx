import { NavLink, useNavigate } from "react-router-dom";
import style from "./style.module.css";
import profileImg from "./../../assets/icons/profile.svg";
import createImg from "./../../assets/icons/create.svg";
import favImg from "./../../assets/icons/favoriteRecipe.svg";
import myRecipeImg from "./../../assets/icons/myRecipe.svg";
const DesktopSidebar = () => {
  const navigate = useNavigate();

  return (
    <div className={style.desknav}>
      {/* <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={"/profile"}
      >
        <div className={style.navItems}>
          <img src={profileImg} alt="profileImg" />
          <span>Profile</span>
        </div>
      </NavLink> */}
      <button onClick={() => navigate("/profile")}>Profile</button>
      {/* <NavLink
        to={"/profile"}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.navItems}>
          <img src={myRecipeImg} alt="profileImg" />
          <span>My Recipe</span>
        </div>
      </NavLink> */}
      {/* <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={"/profile"}
      >
        <div className={style.navItems}>
          <img src={profileImg} alt="profileImg" />
          <span> Profile</span>
        </div>
      </NavLink> */}
      <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={"/createrecipe"}
      >
        <div className={style.navItems}>
          <img src={createImg} alt="profileImg" />
          <span> Create Recipe</span>
        </div>
      </NavLink>

      <NavLink
        to={"/myrecipes"}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.navItems}>
          <img src={myRecipeImg} alt="profileImg" />
          <span>My Recipe</span>
        </div>
      </NavLink>

      <NavLink
        to={"/favoriterecipe"}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.navItems}>
          <img src={favImg} alt="profileImg" />
          <span> Favorite Recipe</span>
        </div>
      </NavLink>
    </div>
  );
};

export default DesktopSidebar;
