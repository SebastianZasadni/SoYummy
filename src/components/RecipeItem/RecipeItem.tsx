import { Recipe } from "../../redux/recipes/slice";
import css from "./RecipeItem.module.css";

interface Props {
  recipe: Recipe;
}

export const RecipeItem = ({ recipe }: Props) => {
  const { preview, category, title } = recipe;
  return (
    <div className={css.recipeBox}>
      <img src={preview} alt={category} className={css.recipeImage} />
      <p className={css.recipeTitle}>{title}</p>
    </div>
  );
};
