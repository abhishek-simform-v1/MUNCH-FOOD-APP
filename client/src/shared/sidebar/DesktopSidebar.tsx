import { NavLink, useNavigate } from 'react-router-dom';
import style from './style.module.css';
import profileImg from './../../assets/icons/signinprofile.svg';
import createRecipe from './../../assets/icons/create.svg';
import bookMark from './../../assets/icons/bookMarkStroke.svg';
import favImg from './../../assets/icons/favoriteRecipe.svg';
import myRecipeImg from './../../assets/icons/myRecipe.svg';
import myBlogImg from './../../assets/icons/myblog.svg';
const DesktopSidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={'/profile'}
      >
        <div className={style.navItems}>
          <img
            className={style.profile_image}
            src={profileImg}
            alt="profileImg"
          />
          <span>Profile</span>
        </div>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={'/createrecipe'}
      >
        <div className={style.navItems}>
          <img src={createRecipe} alt="createRecipe" />
          <span> Create Recipe</span>
        </div>
      </NavLink>
      {/* WILL BE ADDED ON SECON RUN */}
      {/* <NavLink
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
        to={"/createblog"}
      >
        <div className={style.navItems}>
          <img src={createBlog} alt="createBlog" />
          <span> Create Blog</span>
        </div>
      </NavLink>

      <NavLink
        to={"/myblogs"}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.navItems}>
          <img src={myBlogImg} alt="myBlogImg" />
          <span>My Blogs</span>
        </div>
      </NavLink> */}
      <NavLink
        to={'/myrecipes'}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.navItems}>
          <img src={myRecipeImg} alt="myRecipeImg" />
          <span>My Recipe</span>
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
          <span>saved</span>
        </div>
      </NavLink>

      <NavLink
        to={'/favorites'}
        className={({ isActive }) =>
          isActive ? style.activeDash : style.inactiveDash
        }
      >
        <div className={style.navItems}>
          <img src={favImg} alt="favImg" />
          <span> Favorites</span>
        </div>
      </NavLink>
    </>
  );
};

export default DesktopSidebar;
