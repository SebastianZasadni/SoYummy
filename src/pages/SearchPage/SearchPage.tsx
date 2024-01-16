import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../../redux/store";
import { useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { useState } from "react";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import css from "./SearchPage.module.css";
import { selectError, selectRecipes } from "../../redux/recipes/selectors";
import { RecipeItem } from "../../components/RecipeItem/RecipeItem";
import { reset } from "../../redux/recipes/slice";
import {
  fetchRecipesByIngredients,
  fetchRecipesByQuery,
} from "../../redux/recipes/operations";

const SearchPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const recipes = useSelector(selectRecipes);
  const error = useSelector(selectError);
  const [searchParams] = useSearchParams();
  const dispatch: AppDispatch = useDispatch();
  const itemsPerPage = 6;
  const pageCount = recipes && Math.ceil(recipes.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentRecipes =
    recipes && recipes.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const ingredient = searchParams.get("ingredient");
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      dispatch(reset());
      try {
        if (ingredient !== null) {
          await dispatch(fetchRecipesByIngredients({ query: ingredient }));
        } else if (query !== null) {
          await dispatch(fetchRecipesByQuery({ query }));
        } else {
          return;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [dispatch, searchParams, ingredient, query]);

  return (
    <div className={css.searchPageWrapper}>
      <h1 className={css.searchPageHeading}>Search</h1>
      <SearchBar />
      {currentRecipes && !error ? (
        <ul className={css.recipesList}>
          {currentRecipes.map((recipe) => (
            <li className={css.recipesListItem} key={recipe._id}>
              <RecipeItem recipe={recipe} />;
            </li>
          ))}
        </ul>
      ) : (
        <div className={css.searchPageWarningBox}>
          <img
            className={css.searchPageWarningImage}
            srcSet="/assets/searchpage-image_mobile.jpg 1x,
            /assets/searchpage-image_mobile@2x.jpg 2x"
          />
          <p className={css.searchPageWarningText}>
            Try looking for something else..
          </p>
        </div>
      )}
      {pageCount > 1 && (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          previousLabel="<"
          nextLabel=">"
          onPageChange={handlePageClick}
          containerClassName={css.pagination}
          pageClassName={css.paginationPage}
          previousClassName={css.previousButton}
          nextClassName={css.nextButton}
          activeClassName={css.activePage}
        />
      )}
    </div>
  );
};

export default SearchPage;
