import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectRecipe } from "../../redux/recipes/selectors";
import css from "./RecipePageHeader.module.css";
import {
  addRecipeToFavorites,
  deleteRecipeFromFavorites,
} from "../../redux/recipes/operations";
import { selectUser } from "../../redux/auth/selectors";

export const RecipePageHeader = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const { id } = useSelector(selectUser);
  const { title, description, time, _id } = recipe;

  const { favorites } = recipe;

  const isInFavorite = (id: string | null | undefined): boolean => {
    return favorites && !!favorites.find((favorite) => favorite === id);
  };

  const handleAdd = (id: string | undefined) => {
    dispatch(addRecipeToFavorites({ id }));
  };

  const handleDelete = (id: string | undefined) => {
    dispatch(deleteRecipeFromFavorites({ id }));
  };

  return (
    <div className={css.recipePageHeaderWrapper}>
      <h1 className={css.recipeTitle}>{title}</h1>
      <p className={css.recipeDescription}>{description}</p>
      {isInFavorite(id) ? (
        <button
          type="button"
          className={css.addFavoriteButton}
          onClick={() => handleDelete(_id)}
        >
          Delete
        </button>
      ) : (
        <button
          type="button"
          className={css.addFavoriteButton}
          onClick={() => handleAdd(_id)}
        >
          Add
        </button>
      )}

      <div className={css.cookingTimeBox}>
        <svg className={css.iconClock} fill="none">
          <use href="/assets/icons.svg#icon-clock"></use>
        </svg>
        <p className={css.cookingTime}>{time} min</p>
      </div>
    </div>
  );
};
