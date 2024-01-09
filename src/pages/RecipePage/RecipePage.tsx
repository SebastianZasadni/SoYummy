import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import css from "./RecipePage.module.css";
import {
  fetchIngredientsList,
  fetchRecipeById,
} from "../../redux/recipes/operations";
import { reset } from "../../redux/recipes/slice";
import { RecipePageHeader } from "../../components/RecipePageHeader/RecipePageHeader";
import { RecipeIngredientsList } from "../../components/RecipeIngredientsList/RecipeIngredientsList";
import { RecipePreparation } from "../../components/RecipePreparation/RecipePreparation";
import { selectRecipe } from "../../redux/recipes/selectors";

const RecipePage = () => {
  const dispatch: AppDispatch = useDispatch();

  const { recipeId } = useParams();

  const recipe = useSelector(selectRecipe);

  useEffect(() => {
    dispatch(reset());
    dispatch(fetchRecipeById({ recipeId }));
    dispatch(fetchIngredientsList());
  }, [dispatch, recipeId]);

  return (
    <div className={css.recipePageWrapper}>
      {recipe ? (
        <>
          <RecipePageHeader />
          <RecipeIngredientsList />
          <RecipePreparation />
        </>
      ) : (
        <p className={css.recipeWarning}>
          I can't display the recipe now. Please try again.
        </p>
      )}
    </div>
  );
};

export default RecipePage;
