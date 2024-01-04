import { AddRecipeForm } from "../../components/AddRecipeForm/AddRecipeForm";
import { PopularRecipes } from "../../components/PopularRecipe/PopularRecipes";
import css from "./AddRecipePage.module.css";

const AddRecipePage = () => {
  return (
    <div className={css.addRecipePageWrapper}>
      <h1 className={css.addRecipePageHeading}>Add Recipe</h1>
      <div className={css.desktopWrapper}>
        <AddRecipeForm />
        <PopularRecipes />
      </div>
    </div>
  );
};

export default AddRecipePage;
