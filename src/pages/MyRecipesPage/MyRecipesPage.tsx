import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import css from "./MyRecipesPage.module.css";
import { selectRecipes } from "../../redux/recipes/selectors";
import { deleteRecipe, fetchMyRecipes } from "../../redux/recipes/operations";
import { RecipesList } from "../../components/RecipesList/RecipesList";

const MyRecipesPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector(selectRecipes);

  const handleClick = (id: string | undefined) => {
    dispatch(deleteRecipe({ id }));
  };

  useEffect(() => {
    dispatch(fetchMyRecipes());
  }, [dispatch]);

  return (
    <div className={css.myRecipesPageWrapper}>
      <h1 className={css.myRecipesPageHeading}>My recipes</h1>
      <RecipesList recipes={recipes} onClick={handleClick} />
    </div>
  );
};

export default MyRecipesPage;
