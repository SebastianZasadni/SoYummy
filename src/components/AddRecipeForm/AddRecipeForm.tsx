import { useDispatch } from "react-redux";
import { Notify } from "notiflix";
import axios from "axios";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { FormEvent } from "react";
import { addRecipe } from "../../redux/recipes/operations";
import { RecipeDescriptionField } from "../RecipeDescriptionFields/RecipeDescriptionsFields";
import { RecipeIngredientsFields } from "../RecipeIngredientsFields/RecipeIngredientsFields";
import css from "./AddRecipeForm.module.css";

export const AddRecipeForm = () => {
  const [image, setImage] = useState<File | string>("");
  const dispatch: AppDispatch = useDispatch();

  const handleImageChange = (image: File | string) => {
    setImage(image);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = e.currentTarget.title.value;
    const about = e.currentTarget.about.value;
    const category = e.currentTarget.category.value;
    const time = e.currentTarget.time.value;
    const preparation = e.currentTarget.preparation.value;

    const { ingredientsNodeList, quantityNodeList, measureNodeList } =
      e.currentTarget;

    const ingredientsArray = !ingredientsNodeList.length
      ? [ingredientsNodeList.value]
      : Array.from(ingredientsNodeList).map((ingredient) => ingredient.value);

    const quantity = !quantityNodeList.length
      ? [quantityNodeList.value]
      : Array.from(quantityNodeList).map((quantity) => quantity.value);

    const measure = !measureNodeList.length
      ? [measureNodeList.value]
      : Array.from(measureNodeList).map((measure) => measure.value);

    if (
      !title ||
      !about ||
      !category ||
      !time ||
      !preparation ||
      !measure ||
      !quantity ||
      !ingredientsArray
    ) {
      return Notify.failure("Fill all of fields");
    } else if (!image) {
      return Notify.failure("You have to add image");
    }

    const ingredients = ingredientsArray.map((ingredient, index) => ({
      _id: ingredient,
      measure: quantity[index] + measure[index],
    }));

    const data = new FormData();
    data.append("image", image);
    const res = await axios.post(
      "https://soyummy-api.onrender.com/api/upload",
      data
    );

    const thumb = res.data;

    await dispatch(
      addRecipe({
        title,
        about,
        category,
        thumb,
        time,
        preparation,
        ingredients,
      })
    );
  };

  return (
    <form className={css.addRecipeForm} onSubmit={handleSubmit}>
      <RecipeDescriptionField onImageChange={handleImageChange} />
      <RecipeIngredientsFields />
      <button type="submit" className={css.addRecipeForm__Button}>
        Add
      </button>
    </form>
  );
};
