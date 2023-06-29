import { RecipeInterface } from "../../../../../../../slices/InitialData";
import Paragraph from "../../../../../../../utils/Typography/Paragraph";
import Tag from "../../../../../../../utils/Typography/Tag";
import Title from "../../../../../../../utils/Typography/Title";
import Pill from "../../../../../../../utils/buttons/Pill";
import { RatingContainer } from "./RatingContainer";
import style from "./style.module.css";
import bookMarkStroke from "./../../../../../../../assets/icons/bookMarkStroke.svg";
import share from "./../../../../../../../assets/icons/share.svg";
import bookMarkFill from "./../../../../../../../assets/icons/bookMarkFill.svg";
import { useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../../../../hooks/hooks";
import {
  UPDATE_USER,
  getUser,
  selectUser,
} from "../../../../../../../slices/userSlice";
import ButtonOutLine from "../../../../../../../utils/buttons/ButtonOutLine";
import { ToastContainer, toast } from "react-toastify";

type props = {
  recipe: RecipeInterface;
};

const TitleContainer = ({ recipe }: props) => {
  const user = useAppSelector(selectUser);

  function isBookMarked() {
    if (user.saved_recipes.includes(recipe.id)) {
      return true;
    } else {
      return false;
    }
  }

  const [bookmarked, setBookMarked] = useState(isBookMarked());
  const [sharedLink, setSharedLink] = useState("");
  const dispatch = useAppDispatch();

  function handlebookMarkClicked() {
    let is_saved;
    if (
      user.saved_recipes.length === 0 ||
      !user.saved_recipes.includes(recipe.id)
    ) {
      setBookMarked(true);
      is_saved = [...user.saved_recipes, recipe.id];
    } else {
      setBookMarked(false);
      is_saved = user.saved_recipes.filter((id) => id !== recipe.id);
    }
    const updatedUser = {
      ...user,
      saved_recipes: is_saved,
    };
    dispatch(UPDATE_USER(updatedUser));
    dispatch(getUser());
  }

  async function shareLinkFunction() {
    const currentUrl = window.location.href;

    if (navigator.share) {
      // Web Share API is supported
      const shareData = {
        title: "MDN",
        text: "Learn web development on MDN!",
        url: currentUrl,
      };

      try {
        await navigator.share(shareData);
      } catch (err) {
        toast.success("Link Copied To Clip Board", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }),
          navigator.clipboard.writeText(sharedLink);

        console.log(err);
      }
    } else {
      toast.success("Link Copied To Clip Board", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }),
        navigator.clipboard.writeText(sharedLink);
    }
  }
  return (
    <div className={style.title_container}>
      <ToastContainer />

      <Title>{recipe.recipe_name}</Title>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ width: "100%" }}>
          <Tag>{recipe.recipe_tagline}</Tag>
        </div>
        <div style={{ display: "flex", gap: "1em" }}>
          <ButtonOutLine onClick={shareLinkFunction}>
            <img className={style.book_mark_icon} src={share} alt="share" />
          </ButtonOutLine>

          {bookmarked ? (
            <ButtonOutLine onClick={handlebookMarkClicked}>
              <img
                className={style.book_mark_icon}
                src={bookMarkFill}
                alt="Bookmarked"
              />
            </ButtonOutLine>
          ) : (
            <ButtonOutLine onClick={handlebookMarkClicked}>
              <img
                className={style.book_mark_icon}
                src={bookMarkStroke}
                alt="Not Bookmarked"
              />
            </ButtonOutLine>
          )}
        </div>
      </div>

      <div className={style.pill_container}>
        <Pill>{recipe.category}</Pill>
      </div>
      <RatingContainer recipe={recipe} />
      <div className={style.cook_time_container}>
        <Paragraph>
          Total{" "}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.chill_time +
              recipe.cooking_time.cook_time +
              recipe.cooking_time.preperation_time}
            m
          </span>
        </Paragraph>
        <Paragraph>
          Prep{" "}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.preperation_time}m
          </span>
        </Paragraph>
        <Paragraph>
          Chill{" "}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.chill_time}m
          </span>
        </Paragraph>
        <Paragraph>
          Cook{" "}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.cook_time}m
          </span>
        </Paragraph>
      </div>
    </div>
  );
};

export default TitleContainer;
