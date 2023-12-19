import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Select, { ActionMeta, SingleValue } from "react-select";
import { AppDispatch } from "../../redux/store";
import css from "./RecipeDescriptionField.module.css";
import { fetchCategoriesList } from "../../redux/recipes/operations";
import { selectCategories } from "../../redux/recipes/selectors";

interface Option {
  value: string | null;
  label: string | null;
}

export const RecipeDescriptionField = () => {
  const [category, setCategory] = useState("beef");
  const [cookingTime, setCookingTime] = useState("30");
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const categoryTitles: Option[] = categories.map((category) => {
    return { value: category.title.toLowerCase(), label: category.title };
  });

  const timesList = [];

  for (let i = 5; i <= 120; i += 5) {
    timesList.push(i);
  }

  const cookingTimesList = timesList.map((time) => {
    return { value: time.toString(), label: time + "min" };
  });

  const customStylesSelect = {
    control: (provided: any) => ({
      ...provided,
      border: 0,
      boxShadow: "none",
    }),
    option: (provided: any) => ({
      ...provided,
    }),
    menu: (provided: any) => ({
      ...provided,
      maxHeight: "170px",
      overflow: "auto",
    }),
  };

  const handleCategoryChange = (value: SingleValue<Option>) => {
    setCategory(value);
  };

  const handleTimeChange = (value: SingleValue<Option>) => {
    setCookingTime(value);
  };

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

  return (
    <div className={css.descriptionFields}>
      <label className={css.imageLabel}>
        <svg className={css.imageLabelIcon}>
          <use href="/assets/icons.svg#icon-add-image"></use>
        </svg>
        <input type="file" className={css.imageInput} />
      </label>
      <label className={css.titleLabel}>
        Enter item title
        <input type="text" className={css.titleInput} />
      </label>
      <label className={css.aboutLabel}>
        Enter about recipe
        <input type="text" className={css.aboutInput} />
      </label>
      <label className={css.categoryLabel}>
        Category
        <Select
          options={categoryTitles}
          className={css.select}
          defaultValue={categoryTitles[0]}
          isSearchable={false}
          onChange={handleCategoryChange}
          styles={customStylesSelect}
        />
      </label>
      <label className={css.cookingTimeLabel}>
        Cooking time
        <Select
          options={cookingTimesList}
          className={css.select}
          defaultValue={cookingTimesList[5]}
          isSearchable={false}
          onChange={handleTimeChange}
          styles={customStylesSelect}
        />
      </label>
    </div>
  );
};
