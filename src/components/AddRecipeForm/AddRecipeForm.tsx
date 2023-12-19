import { RecipeDescriptionField } from "../RecipeDescriptionFields/RecipeDescriptionsFields";
import css from "./AddRecipeForm.module.css";

export const AddRecipeForm = () => {
  return (
    <form className={css.addRecipeForm}>
      <RecipeDescriptionField />
    </form>
  );
};
