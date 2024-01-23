import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectRecipes } from "../../redux/recipes/selectors";
import { Recipe } from "../../redux/recipes/slice";
import { NavLink } from "react-router-dom";
import { RecipeItem } from "../RecipeItem/RecipeItem";
import css from "./PreviewCategories.module.css";

export const PreviewCategories = () => {
  const [visibleRecipes, setVisibleRecipes] = useState(4); // Domyślnie wyświetl 4 przepisy
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (windowWidth < 600) {
      setVisibleRecipes(1);
    } else if (windowWidth < 900) {
      setVisibleRecipes(2);
    } else {
      setVisibleRecipes(4);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <div className={css.mainRecipesWrapper}>
      <ul className={css.mainPageRecipesList}>
        <p className={css.recipeCategorie}>Breakfast</p>
        <li className={css.mainPageRecipesListItem}>
          {breakfastRecipes.slice(0, visibleRecipes).map((recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <NavLink to="/category/breakfast?page=1" className={css.seeAllButton}>
          See all
        </NavLink>
        <p className={css.recipeCategorie}>Miscellaneous</p>
        <li className={css.mainPageRecipesListItem}>
          {miscellaneousRecipes
            .slice(0, visibleRecipes)
            .map((recipe: Recipe) => {
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
          {chickenRecipes.slice(0, visibleRecipes).map((recipe: Recipe) => {
            return <RecipeItem recipe={recipe} key={recipe._id} />;
          })}
        </li>
        <NavLink to="/category/chicken?page=1" className={css.seeAllButton}>
          See all
        </NavLink>
        <p className={css.recipeCategorie}>Desserts</p>
        <li className={css.mainPageRecipesListItem}>
          {dessertsRecipes.slice(0, visibleRecipes).map((recipe: Recipe) => {
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
