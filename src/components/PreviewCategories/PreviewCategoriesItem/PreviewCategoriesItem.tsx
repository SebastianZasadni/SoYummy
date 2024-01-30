import { NavLink } from "react-router-dom";
import { RecipeItem } from "../../RecipeItem/RecipeItem";
import { Recipe } from "../../../redux/recipes/slice";
import css from "./PreviewCategoriesItem.module.css";

export const PreviewCategoriesItem = ({
  recipes,
}: {
  recipes: Recipe[];
}) => {
  const category = recipes.length && recipes[0].category;

  return (
    <li className={css.mainPageRecipesListItem}>
      <p className={css.recipeCategorie}>{category}</p>
      <ul className={css.recipesList}>
        {recipes.map((recipe) => {
          return (
            <li className={css.recipesListItem} key={recipe._id}>
              <RecipeItem recipe={recipe} key={recipe._id} />
            </li>
          );
        })}
      </ul>
      <NavLink to={`/category/${category}?page=1`} className={css.seeAllButton}>
        See all
      </NavLink>
    </li>
  );
};
