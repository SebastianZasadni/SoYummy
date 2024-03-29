import { ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select from "react-select";
import { AppDispatch } from "../../../redux/store";
import css from "./RecipeDescriptionField.module.css";
import { fetchCategoriesList } from "../../../redux/recipes/operations";
import { selectCategories } from "../../../redux/recipes/selectors";
import { reset } from "../../../redux/recipes/slice";
import { selectStyles } from "./selectStyles";
import { cookingTimesList } from "./data";

export interface Option {
  value: string | null;
  label: string | null;
}

interface Props {
  onImageChange: (event: File | null) => void;
}

export const RecipeDescriptionField = ({ onImageChange }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const categoryTitles: Option[] = categories.map((category) => {
    return { value: category.title, label: category.title };
  });

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files && e.target.files[0];
    if (image) {
      onImageChange(image);
      const url = URL.createObjectURL(image);
      setImageUrl(url);
    }
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  return (
    <div className={css.descriptionBox}>
      <label className={css.imageLabel}>
        {imageUrl && <img src={imageUrl} className={css.recipeImage} />}
        <svg className={css.imageLabelIcon}>
          <use href="/assets/icons.svg#icon-add-image"></use>
        </svg>
        <input
          name="image"
          type="file"
          className={css.imageInput}
          onChange={handleImageChange}
        />
      </label>
      <div className={css.descriptionFields}>
        <label className={css.titleLabel}>
          Enter item title
          <input name="recipeName" type="text" className={css.titleInput} />
        </label>
        <label className={css.aboutLabel}>
          Enter about recipe
          <input name="about" type="text" className={css.aboutInput} />
        </label>
        <label className={css.categoryLabel}>
          Category
          <Select
            name="category"
            options={categoryTitles}
            className={css.reactSelect}
            placeholder="Please choose category"
            isSearchable={false}
            styles={selectStyles}
          />
        </label>
        <label className={css.cookingTimeLabel}>
          Cooking time
          <Select
            name="time"
            options={cookingTimesList}
            className={css.reactSelect}
            placeholder="Please set time"
            isSearchable={false}
            styles={selectStyles}
          />
        </label>
      </div>
    </div>
  );
};
