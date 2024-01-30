import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectRecipes } from "../../redux/recipes/selectors";
import { Recipe } from "../../redux/recipes/slice";
import { NavLink } from "react-router-dom";
import { PreviewCategoriesItem } from "./PreviewCategoriesItem/PreviewCategoriesItem";
import css from "./PreviewCategories.module.css";

export const PreviewCategories = () => {
  const [visibleRecipes, setVisibleRecipes] = useState(4);
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

    if (windowWidth < 768) {
      setVisibleRecipes(1);
    } else if (windowWidth < 1280) {
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
        <PreviewCategoriesItem
          recipes={breakfastRecipes.slice(0, visibleRecipes)}
        />
        <PreviewCategoriesItem
          recipes={miscellaneousRecipes.slice(0, visibleRecipes)}
        />
        <PreviewCategoriesItem
          recipes={chickenRecipes.slice(0, visibleRecipes)}
        />
        <PreviewCategoriesItem
          recipes={dessertsRecipes.slice(0, visibleRecipes)}
        />
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
