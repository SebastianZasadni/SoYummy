import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  fetchCategoriesList,
  fetchRecipesByCategory,
} from "../../redux/recipes/operations";
import { AppDispatch } from "../../redux/store";
import css from "./CategoriesPage.module.css";
import { selectCategories } from "../../redux/recipes/selectors";

const CategoriesPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchCategoriesList());
    // dispatch(fetchRecipesByCategory(category));
  }, [dispatch, category]);

  return (
    <div className={css.categoriesPageWrapper}>
      <h1 className={css.categoriesPageHeading}>Categories</h1>
      <ul className={css.categoriesList}>
        {categories.map((category) => {
          return (
            <li className={css.categoriesListItem} key={category.thumb}>
              <p className={css.categoryTitle}>{category.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesPage;
