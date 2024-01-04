import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import css from "./PopularRecipes.module.css";
import { fetchPopularRecipes } from "../../redux/recipes/operations";
import { selectRecipes } from "../../redux/recipes/selectors";
import { NavLink } from "react-router-dom";

export const PopularRecipes = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector(selectRecipes);

  if (window.innerWidth < 768 || window.innerWidth > 1280) {
    recipes.slice(0, 4);
  } else {
    recipes.slice(0, 2);
  }

  useEffect(() => {
    dispatch(fetchPopularRecipes());
  }, [dispatch]);

  return (
    <div className={css.popularRecipeWrapper}>
      <h1 className={css.popularRecipeHeading}>Popular recipe</h1>
      <ul className={css.popularReciepesList}>
        {!recipes.length ? (
          <p className={css.popularRecipesWarning}>
            There's no popular recipes at this moment.
          </p>
        ) : (
          recipes.slice(0, 4).map((recipe) => {
            return (
              <li className={css.popularRecipesListItem} key={recipe._id}>
                <NavLink to="/" className={css.popularRecipeLink}>
                  <img src={recipe.preview} className={css.recipeImage} />
                  <div className={css.recipeDescriptionBox}>
                    <p className={css.recipeTitle}>{recipe.title}</p>
                    <p className={css.recipeDescription}>
                      {recipe.description}
                    </p>
                  </div>
                </NavLink>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};
