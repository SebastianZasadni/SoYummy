import { NavLink } from "react-router-dom";
import { Recipe } from "../../redux/recipes/slice";
import css from "./RecipeItem.module.css";

interface Props {
  recipe: Recipe;
}

export const RecipeItem = ({ recipe }: Props) => {
  const { preview, category, title, _id } = recipe;
  return (
    <div className={css.recipeBox}>
      <NavLink to={`/recipe/${_id}`}>
        <img src={preview} alt={category} className={css.recipeImage} />
        <p className={css.recipeTitle}>{title}</p>
      </NavLink>
    </div>
  );
};
