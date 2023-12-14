import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategoriesList } from "../../redux/recipes/operations";
import { AppDispatch } from "../../redux/store";
import css from "./CategoriesPage.module.css";
import { selectCategories } from "../../redux/recipes/selectors";

const CategoriesPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategoriesList());
  }, [dispatch]);

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
