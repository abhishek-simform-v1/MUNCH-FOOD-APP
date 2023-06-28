import { NavLink } from 'react-router-dom';
import style from './style.module.css';
import profileImg from './../../assets/icons/signinprofile.svg';
import createRecipe from './../../assets/icons/create.svg';
import bookMark from './../../assets/icons/bookMarkStroke.svg';
import createBlog from './../../assets/icons/createBlog.svg';
import favImg from './../../assets/icons/favoriteRecipe.svg';
import myRecipeImg from './../../assets/icons/myRecipe.svg';
import myBlogImg from './../../assets/icons/myblog.svg';
const MobileSidebar = () => {
  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={'/profile'}
      >
        <div className={style.mobilenavItems}>
          <img
            src={profileImg}
            alt="profileImg"
            className={style.profile_image}
          />
        </div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={'/createrecipe'}
      >
        <div className={style.mobilenavItems}>
          <img src={createRecipe} alt="profileImg" />
        </div>
      </NavLink>
      {/* WILL BE ADDED ON SECON RUN */}

      {/* <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={"/createblog"}
      >
        <div className={style.mobilenavItems}>
          <img src={createBlog} alt="profileImg" />
        </div>
      </NavLink>

      <NavLink
        to={"/myblogs"}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.mobilenavItems}>
          <img src={myBlogImg} alt="profileImg" />
        </div>
      </NavLink> */}
      <NavLink
        to={'/myrecipes'}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.mobilenavItems}>
          <img src={myRecipeImg} alt="profileImg" />
        </div>
      </NavLink>
      <NavLink
        to={'/savedrecipes'}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.navItems}>
          <img src={bookMark} alt="bookMark" />
        </div>
      </NavLink>
      <NavLink
        to={'/favorites'}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.mobilenavItems}>
          <img src={favImg} alt="profileImg" />
        </div>
      </NavLink>
    </>
  );
};

export default MobileSidebar;
