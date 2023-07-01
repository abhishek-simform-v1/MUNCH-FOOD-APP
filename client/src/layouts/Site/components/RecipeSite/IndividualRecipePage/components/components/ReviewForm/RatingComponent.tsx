import { useEffect, useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import {
  UPDATE_USER,
  getUser,
  selectUser,
} from '../../../../../../../../slices/userSlice';
import {
  getRatings,
  selectRatingLoading,
  selectRatings,
  setNewRating,
} from '../../../../../../../../slices/ratingSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../../hooks/hooks';
import style from './ReviewFormStyle.module.css';
import Paragraph from '../../../../../../../../utils/Typography/Paragraph';
export type singleRate = {
  rating_count: 1;
  rating_id: string;
  rating_user: {
    id: string;
    rated_recipes: [string];

    user_email: 'loniqamub@mailinator.com';
    user_image: '';
    user_name: 'Unity Lambertscscsc';
  };
};
export type allRatingType = {
  id: string;
  allRating: singleRate[];
};
const RatingComponent = ({ recipe }: any) => {
  const ratingLoading = useAppSelector(selectRatingLoading);
  const oldRating = useAppSelector(selectRatings);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  function init() {
    if (ratingLoading) {
      return [];
    } else if (oldRating === undefined) {
      return [];
    } else {
      const recipeRating = oldRating.find(
        (item: allRatingType) => item.id === recipe.id
      );
      return recipeRating?.allRatings || [];
    }
  }

  function initialRate() {
    if (ratingLoading) {
      return 0;
    } else if (oldRating === undefined) {
      return 0;
    } else {
      const recipeRating = oldRating.find(
        (item: allRatingType) => item.id === recipe.id
      );
      if (recipeRating === undefined) {
        return 0;
      } else {
        const [rating_user] = recipeRating.allRatings.filter(
          (rating: singleRate) => {
            return rating.rating_id === user.id;
          }
        );
        return rating_user?.rating_count;
      }
    }
  }
  const initial_rating = init();
  const initial_rate = initialRate();
  const [ratings, setRatings] = useState<any>(initial_rating || []);
  const [rating, setRating] = useState(initial_rate);
  const handleRating = (rate: number) => {
    const newRating = {
      rating_id: user.id,
      rating_count: rate,
      rating_user: user,
    };

    const existingRatingIndex = ratings.findIndex(
      (rating: any) => rating.rating_id === newRating.rating_id
    );

    if (existingRatingIndex !== -1) {
      const updatedRatings = [...ratings];

      updatedRatings.splice(existingRatingIndex, 1);

      setRatings([...updatedRatings, newRating]);
    } else {
      // User does not have a rating, add the new rating directly

      setRatings((prev: any) => [...prev, newRating]);
    }

    setRating(rate);
  };

  useEffect(() => {
    dispatch(getRatings());
    const newRating: allRatingType = {
      id: recipe.id,
      allRating: ratings,
    };
    if (!ratingLoading) {
      dispatch(setNewRating(newRating));
    }
    if (
      user.rated_recipes.length === 0 ||
      !user.rated_recipes.includes(recipe.id)
    ) {
      const updatedUser = {
        ...user,
        rated_recipes: [...user.rated_recipes, recipe.id],
      };

      console.log('updatedUser:', updatedUser);
      dispatch(UPDATE_USER(updatedUser));
      dispatch(getUser());
    } else {
      return;
    }

    console.log(user);
  }, [rating, recipe.id, user, dispatch]);

  return (
    <div className={style.star_rating}>
      {ratingLoading ? (
        <h2>loading ....</h2>
      ) : (
        <>
          <Paragraph>Give This Recipe Rating !!!</Paragraph>

          <div className={style.rating_component}>
            <Rating
              SVGclassName="star_rating"
              transition={true}
              allowFraction={true}
              showTooltip={true}
              onClick={handleRating}
              initialValue={rating}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default RatingComponent;
