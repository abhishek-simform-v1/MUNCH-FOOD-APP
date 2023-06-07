import { NavLink } from "react-router-dom";
import style from "./style.module.css";
import profileImg from "./../../assets/icons/profile.svg";
import createImg from "./../../assets/icons/create.svg";
import favImg from "./../../assets/icons/favoriteRecipe.svg";
import myRecipeImg from "./../../assets/icons/myRecipe.svg";
const MobileSidebar = () => {
  return (
    <div className={style.mobilenav}>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={"/profile"}
      >
        <div className={style.mobilenavItems}>
          <img src={profileImg} alt="profileImg" />
        </div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={"/createrecipe"}
      >
        <div className={style.mobilenavItems}>
          <img src={createImg} alt="profileImg" />
        </div>
      </NavLink>

      <NavLink
        to={"/myrecipes"}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.mobilenavItems}>
          <img src={myRecipeImg} alt="profileImg" />
        </div>
      </NavLink>

      <NavLink
        to={"/favoriterecipe"}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.mobilenavItems}>
          <img src={favImg} alt="profileImg" />
        </div>
      </NavLink>
    </div>
  );
};

export default MobileSidebar;
