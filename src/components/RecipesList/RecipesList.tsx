import { useState } from "react";
import ReactPaginate from "react-paginate";
import { NavLink } from "react-router-dom";
import { Recipe } from "../../redux/recipes/slice";
import css from "./RecipesList.module.css";

interface RecipesListProps {
  recipes: Recipe[];
  onClick: (id: string | undefined) => void;
}

export const RecipesList = ({ recipes, onClick }: RecipesListProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const pageCount = recipes && Math.ceil(recipes.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;
  const currentRecipes =
    recipes && recipes.slice(offset, offset + itemsPerPage);

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected);
  };

  const handleClick = (id: string | undefined) => {
    onClick(id);
  };

  return recipes && recipes.length ? (
    <>
      <ul className={css.myRecipesList}>
        {currentRecipes.map((recipe: Recipe) => {
          const { thumb, title, description, time, _id } = recipe;
          return (
            <li key={_id} className={css.recipesListItem}>
              <img src={thumb} className={css.recipeImage} />
              <div className={css.recipeDescriptionBox}>
                <p className={css.recipeTitle}>{title}</p>
                <p className={css.recipeDescription}>{description}</p>
                <p className={css.recipeCookingTime}>{time} min</p>
                <div className={css.trashBox}>
                  <svg
                    className={css.iconTrash}
                    onClick={() => handleClick(_id)}
                  >
                    <use href="/assets/icons.svg#icon-trash" />
                  </svg>
                </div>
                <NavLink
                  to={`/recipe/${recipe._id}`}
                  className={css.seeRecipeButton}
                >
                  See recipe
                </NavLink>
              </div>
            </li>
          );
        })}
      </ul>
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
    </>
  ) : (
    <p>You have no recipes there.</p>
  );
};
