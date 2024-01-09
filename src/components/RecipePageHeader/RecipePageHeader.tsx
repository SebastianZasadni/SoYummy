import { useSelector } from "react-redux";
import { selectRecipe } from "../../redux/recipes/selectors";
import css from "./RecipePageHeader.module.css";

export const RecipePageHeader = () => {
  const recipe = useSelector(selectRecipe);
  const { title, description, time } = recipe;

  return (
    <div className={css.recipePageHeaderWrapper}>
      <h1 className={css.recipeTitle}>{title}</h1>
      <p className={css.recipeDescription}>{description}</p>
      <button type="button" className={css.addFavoriteButton}>
        Add to favorite recipes
      </button>
      <div className={css.cookingTimeBox}>
        <svg className={css.iconClock} fill="none">
          <use href="/assets/icons.svg#icon-clock"></use>
        </svg>
        <p className={css.cookingTime}>{time} min</p>
      </div>
    </div>
  );
};
