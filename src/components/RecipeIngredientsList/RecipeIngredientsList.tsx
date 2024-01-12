import { useSelector } from "react-redux";
import {
  selectIngredients,
  selectRecipe,
  selectShoppingList,
} from "../../redux/recipes/selectors";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import css from "./RecipeIngredientsList.module.css";
import {
  addIngredientToShoppingList,
  deleteIngredientFromShoppingList,
} from "../../redux/recipes/operations";

export const RecipeIngredientsList = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipe = useSelector(selectRecipe);
  const shoppingList = useSelector(selectShoppingList);
  const ingredientsListApi = useSelector(selectIngredients);
  const { ingredients } = recipe;

  const filteredIngredients =
    ingredients &&
    ingredients.map((ingredient) => {
      const matchingIngredient = ingredientsListApi.find(
        (ingredientApi) => ingredientApi._id === ingredient.id
      );
      const { measure } = ingredient;
      return {
        ...matchingIngredient,
        measure,
      };
    });

  const isInShoppingList = (id: string | undefined) => {
    if (shoppingList.find((ingredient) => ingredient === id)) {
      return true;
    }
    return false;
  };

  const handleClick = async (id: string | undefined) => {
    isInShoppingList(id)
      ? dispatch(deleteIngredientFromShoppingList({ id }))
      : dispatch(addIngredientToShoppingList({ id }));
  };

  return (
    <div className={css.ingredientsListWrapper}>
      <div className={css.ingredientsListHeader}>
        <p className={css.ingredientsListHeaderHeading}>Ingredients</p>
        <p className={css.ingredientsListHeaderHeading}>Number</p>
        <p className={css.ingredientsListHeaderHeading}>Add to list</p>
      </div>
      <ul className={css.ingredientsList}>
        {ingredients ? (
          filteredIngredients.map((ingredient, index) => {
            const { _id, ttl, measure } = ingredient;
            return (
              <li className={css.ingredientsListItem} key={index}>
                <img src={ingredient.thb} className={css.ingredientImage} />
                <p className={css.ingredientTitle}>{ttl}</p>
                <p className={css.ingredientMeasure}>{measure}</p>
                <button
                  className={css.ingredientAddButton}
                  onClick={() => handleClick(_id)}
                >
                  {shoppingList && isInShoppingList(_id) ? (
                    <>
                      <svg className={css.iconPickMobile}>
                        <use href="/assets/icons.svg#icon-pick-mobile"></use>
                      </svg>
                      <svg className={css.iconPick}>
                        <use href="/assets/icons.svg#icon-pick"></use>
                      </svg>
                    </>
                  ) : null}
                </button>
              </li>
            );
          })
        ) : (
          <p className={css.ingredientsListWarning}>
            There's no ingredients at this moment.
          </p>
        )}
      </ul>
    </div>
  );
};
