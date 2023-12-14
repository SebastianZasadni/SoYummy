import { useSelector } from "react-redux";
import css from "./PreviewCategories.module.css";
import { selectRecipes } from "../../redux/recipes/selectors";
import { Recipe } from "../../redux/recipes/slice";
import { RecipeItem } from "../RecipeItem/RecipeItem";

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
        <button type="button" className={css.listButton}>
          See all
        </button>
        <p className={css.recipeCategorie}>Miscellaneous</p>
        <li className={css.mainPageRecipesListItem}>
          {miscellaneousRecipes.map((recipe: Recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <button type="button" className={css.listButton}>
          See all
        </button>
        <p className={css.recipeCategorie}>Chicken</p>
        <li className={css.mainPageRecipesListItem}>
          {chickenRecipes.map((recipe: Recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <button type="button" className={css.listButton}>
          See all
        </button>
        <p className={css.recipeCategorie}>Desserts</p>
        <li className={css.mainPageRecipesListItem}>
          {dessertsRecipes.map((recipe: Recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <button type="button" className={css.listButton}>
          See all
        </button>
      </ul>
      <button type="button" className={css.otherCategoriesButton}>
        Other categories
      </button>
    </div>
  );
};
