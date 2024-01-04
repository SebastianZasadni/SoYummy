import { useSelector } from "react-redux";
import css from "./PreviewCategories.module.css";
import { selectRecipes } from "../../redux/recipes/selectors";
import { Recipe } from "../../redux/recipes/slice";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import { NavLink } from "react-router-dom";

export const PreviewCategories = () => {
  
  const recipes = useSelector(selectRecipes);
  const breakfastRecipes = recipes.filter(
    (recipe: Recipe) => recipe.category.toLowerCase() === "breakfast"
  );
  const miscellaneousRecipes = recipes.filter(
    (recipe: Recipe) => recipe.category.toLowerCase() === "miscellaneous"
  );
  const chickenRecipes = recipes.filter(
    (recipe: Recipe) => recipe.category.toLowerCase() === "chicken"
  );
  const dessertsRecipes = recipes.filter(
    (recipe: Recipe) => recipe.category.toLowerCase() === "dessert"
  );
  return (
    <div className={css.mainRecipesWrapper}>
      <ul className={css.mainPageRecipesList}>
        <p className={css.recipeCategorie}>Breakfast</p>
        <li className={css.mainPageRecipesListItem}>
          {breakfastRecipes.map((recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <NavLink to="/category/breakfast?page=1" className={css.seeAllButton}>
          See all
        </NavLink>
        <p className={css.recipeCategorie}>Miscellaneous</p>
        <li className={css.mainPageRecipesListItem}>
          {miscellaneousRecipes.map((recipe: Recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <NavLink
          to="/category/miscellaneous?page=1"
          className={css.seeAllButton}
        >
          See all
        </NavLink>
        <p className={css.recipeCategorie}>Chicken</p>
        <li className={css.mainPageRecipesListItem}>
          {chickenRecipes.map((recipe: Recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <NavLink to="/category/chicken?page=1" className={css.seeAllButton}>
          See all
        </NavLink>
        <p className={css.recipeCategorie}>Desserts</p>
        <li className={css.mainPageRecipesListItem}>
          {dessertsRecipes.map((recipe: Recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <NavLink to="/category/desserts?page=1" className={css.seeAllButton}>
          See all
        </NavLink>
      </ul>
      <NavLink
        to="/category/beef/?page=1"
        className={css.otherCategoriesButton}
      >
        Other categories
      </NavLink>
    </div>
  );
};
