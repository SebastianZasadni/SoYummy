import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useSearchParams, NavLink } from "react-router-dom";
import {
  fetchCategoriesList,
  fetchRecipesByCategory,
} from "../../redux/recipes/operations";
import { AppDispatch } from "../../redux/store";
import css from "./CategoriesPage.module.css";
import { selectCategories, selectRecipes } from "../../redux/recipes/selectors";
import { RecipeItem } from "../../components/RecipeItem/RecipeItem";
import { reset } from "../../redux/recipes/slice";

const CategoriesPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch: AppDispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const recipes = useSelector(selectRecipes);

  const page = searchParams.get("page") ?? "";
  const { category } = useParams();

  useEffect(() => {
    dispatch(reset());
    dispatch(fetchCategoriesList());
    dispatch(fetchRecipesByCategory({ category, page }));
  }, [dispatch, category, page]);

  return (
    <div className={css.categoriesPageWrapper}>
      <h1 className={css.categoriesPageHeading}>Categories</h1>
      <ul className={css.categoriesList}>
        {categories &&
          categories.map((category) => {
            return (
              <li className={css.categoriesListItem} key={category.thumb}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? `${css.categoryTitleActive}`
                      : `${css.categoryTitle}`
                  }
                  to={`/category/${category.title.toLowerCase()}/?page=1`}
                >
                  {category.title}
                </NavLink>
              </li>
            );
          })}
      </ul>
      <ul className={css.recipesList}>
        {recipes.map((recipe) => {
          return (
            <li className={css.recipesListItem} key={recipe._id}>
              <RecipeItem recipe={recipe} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoriesPage;
