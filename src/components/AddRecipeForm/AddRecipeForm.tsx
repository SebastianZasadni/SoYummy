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
  const [image, setImage] = useState<File>();
  const dispatch: AppDispatch = useDispatch();

  const handleImage = (image: File | null) => {
    if (!image) return;
    setImage(image);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const { recipeName, about, category, time, preparation } = form;
    const titleValue = recipeName.value;
    const aboutValue = about.value;
    const categoryValue = category.value;
    const timeValue = time.value;
    const preparationValue = preparation.value;

    const { ingredientsNodeList, quantityNodeList, measureNodeList } =
      e.currentTarget;

    const ingredientsValuesArray: string[] = [];

    ingredientsNodeList.length &&
      ingredientsNodeList.forEach((ingredient: Element) => {
        const value = (ingredient as HTMLInputElement).value;
        ingredientsValuesArray.push(value);
      });

    const quantityValuesArray: string[] = [];

    quantityNodeList.length &&
      quantityNodeList.forEach((ingredient: Element) => {
        const value = (ingredient as HTMLInputElement).value;
        quantityValuesArray.push(value);
      });

    const measureValueArray: string[] = [];

    measureNodeList.length &&
      measureNodeList.forEach((ingredient: Element) => {
        const value = (ingredient as HTMLInputElement).value;
        measureValueArray.push(value);
      });

    const ingredientsArray: string[] = !ingredientsNodeList.length
      ? [ingredientsNodeList.value]
      : ingredientsValuesArray.map((ingredient) => ingredient);

    const quantity = !quantityNodeList.length
      ? [quantityNodeList.value]
      : quantityValuesArray.map((quantity) => quantity);

    const measure = !measureNodeList.length
      ? [measureNodeList.value]
      : measureValueArray.map((measure) => measure);

    const ingredients = ingredientsArray.map((ingredient, index) => ({
      id: ingredient,
      measure: quantity[index] + measure[index],
    }));

    if (
      !titleValue ||
      !aboutValue ||
      !categoryValue ||
      !timeValue ||
      !preparationValue ||
      !measure ||
      quantity.includes("") ||
      !ingredients
    ) {
      return Notify.failure("Please fill all of fields");
    }
    if (!image) {
      return Notify.failure("Please add an image");
    }

    const data = new FormData();
    data.append("image", image);

    const res = await axios.post(
      "https://soyummy-api.onrender.com/api/upload",
      data
    );
    const thumb = res.data;
    const credentials: AddRecipeProps = {
      title: titleValue,
      about: aboutValue,
      category: categoryValue,
      time: timeValue,
      preparation: preparationValue,
      thumb,
      ingredients,
    };

    await dispatch(addRecipe(credentials));
    form.reset();
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
