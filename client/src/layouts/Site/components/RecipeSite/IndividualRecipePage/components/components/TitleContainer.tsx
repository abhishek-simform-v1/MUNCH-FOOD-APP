import { RecipeInterface } from '../../../../../../../slices/InitialData';
import Paragraph from '../../../../../../../utils/Typography/Paragraph';
import Tag from '../../../../../../../utils/Typography/Tag';
import Title from '../../../../../../../utils/Typography/Title';
import Pill from '../../../../../../../utils/buttons/Pill';
import { RatingContainer } from './RatingContainer';
import style from './style.module.css';
import bookMarkStroke from './../../../../../../../assets/icons/bookMarkStroke.svg';
import bookMarkFill from './../../../../../../../assets/icons/bookMarkFill.svg';
import { useEffect, useState } from 'react';
import ButtonOutLine from '../../../../../../../utils/buttons/ButtonOutLine';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../hooks/hooks';
import {
  ADD_SAVED_RECIPE,
  UPDATE_USER,
  getUser,
  selectLoadingUser,
  selectUser,
} from '../../../../../../../slices/userSlice';
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

  // console.log(bookmarked);
  return (
    <div className={style.title_container}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Title>{recipe.recipe_name}</Title>
        {bookmarked ? (
          <ButtonOutLine onClick={handlebookMarkClicked}>
            <img className={style.book_mark_icon} src={bookMarkFill} />
          </ButtonOutLine>
        ) : (
          <ButtonOutLine onClick={handlebookMarkClicked}>
            <img className={style.book_mark_icon} src={bookMarkStroke} />
          </ButtonOutLine>
        )}
      </div>
      <div>
        <Tag>{recipe.recipe_tagline}</Tag>
      </div>

      <div className={style.pill_container}>
        <Pill>{recipe.category}</Pill>
      </div>
      <RatingContainer recipe={recipe} />
      <div className={style.cook_time_container}>
        <Paragraph>
          Total{' '}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.chill_time +
              recipe.cooking_time.cook_time +
              recipe.cooking_time.preperation_time}
            m
          </span>
        </Paragraph>
        <Paragraph>
          Prep{' '}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.preperation_time}m
          </span>
        </Paragraph>
        <Paragraph>
          Chill{' '}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.chill_time}m
          </span>
        </Paragraph>
        <Paragraph>
          Cook{' '}
          <span style={{ fontWeight: 900 }}>
            {recipe.cooking_time.cook_time}m
          </span>
        </Paragraph>
      </div>
    </div>
  );
};

export default TitleContainer;
