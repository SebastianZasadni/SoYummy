import { useDispatch } from "react-redux";
import { Notify } from "notiflix";
import axios from "axios";
import { AppDispatch } from "../../redux/store";
import { useState } from "react";
import { FormEvent } from "react";
import { addRecipe } from "../../redux/recipes/operations";
import { RecipeDescriptionField } from "../RecipeDescriptionFields/RecipeDescriptionsFields";
import { RecipeIngredientsFields } from "../RecipeIngredientsFields/RecipeIngredientsFields";
import { AddRecipeProps } from "../../redux/recipes/operations";
import css from "./AddRecipeForm.module.css";

export const AddRecipeForm = () => {
  const [image, setImage] = useState<File | null>(null);
  const dispatch: AppDispatch = useDispatch();

  const handleImage = (image: File | null) => {
    setImage(image);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.recipeName.value;
    const about = form.about.value;
    const category = form.category.value;
    const time = form.time.value;
    const preparation = form.preparation.value;

    const { ingredientsNodeList, quantityNodeList, measureNodeList } =
      e.currentTarget;

    const ingredientsArray: string[] = !ingredientsNodeList.length
      ? [ingredientsNodeList.value]
      : Array.from(ingredientsNodeList).map(
          (ingredient: any) => ingredient.value
        );

    const quantity = !quantityNodeList.length
      ? [quantityNodeList.value]
      : Array.from(quantityNodeList).map((quantity: any) => quantity.value);

    const measure = !measureNodeList.length
      ? [measureNodeList.value]
      : Array.from(measureNodeList).map((measure: any) => measure.value);

    const ingredients = ingredientsArray.map((ingredient, index) => ({
      id: ingredient,
      measure: quantity[index] + measure[index],
    }));

    if (
      !title ||
      !about ||
      !category ||
      !time ||
      !preparation ||
      !measure ||
      quantity.includes("") ||
      !ingredients
    ) {
      return Notify.failure("Please fill all of fields");
    } else if (!image) {
      return Notify.failure("Please add an image");
    }
    const data = new FormData();
    data.append("image", image);

    try {
      const res = await axios.post(
        "https://soyummy-api.onrender.com/api/upload",
        data
      );
      const thumb = res.data;
      const credentials: AddRecipeProps = {
        title: form.recipeName.value,
        about: form.about.value,
        category: form.category.value,
        time: form.time.value,
        preparation: form.preparation.value,
        thumb,
        ingredients,
      };

      await dispatch(addRecipe(credentials));
      form.reset();
    } catch (error) {
      Notify.failure("An error occurred while uploading image.");
    }
  };

  return (
    <form className={css.addRecipeForm} onSubmit={handleSubmit}>
      <RecipeDescriptionField onImageChange={handleImage} />
      <RecipeIngredientsFields />
      <button type="submit" className={css.addRecipeForm__Button}>
        Add
      </button>
    </form>
  );
};
