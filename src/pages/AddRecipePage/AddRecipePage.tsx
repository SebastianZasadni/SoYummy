import { AddRecipeForm } from "../../components/AddRecipeForm/AddRecipeForm";
import css from "./AddRecipePage.module.css";

const AddRecipePage = () => {
  return (
    <div className={css.addRecipePageWrapper}>
      <h1 className={css.addRecipePageHeading}>Add Recipe</h1>
      <AddRecipeForm />
    </div>
  );
};

export default AddRecipePage;
