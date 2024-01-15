import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import css from "./FavoritesPage.module.css";
import {
  deleteRecipeFromFavorites,
  fetchFavoriteRecipes,
} from "../../redux/recipes/operations";
import { RecipesList } from "../../components/RecipesList/RecipesList";
import { selectIsLoading, selectRecipes } from "../../redux/recipes/selectors";
import { reset } from "../../redux/recipes/slice";

const FavoritePage = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector(selectRecipes);
  const isLoading = useSelector(selectIsLoading);
  const handleClick = (id: string | undefined) => {
    dispatch(deleteRecipeFromFavorites({ id }));
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(fetchFavoriteRecipes());
  }, [dispatch]);

  return (
    <div className={css.favoritePageWrapper}>
      <h1 className={css.favoritePageHeading}>Favorites</h1>
      {!isLoading && <RecipesList recipes={recipes} onClick={handleClick} />}
    </div>
  );
};

export default FavoritePage;
