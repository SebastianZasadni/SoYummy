import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectShoppingList } from "../../redux/recipes/selectors";
import css from "./IngredientsShoppingList.module.css";
import { deleteIngredientFromShoppingList } from "../../redux/recipes/operations";

export const IngredientsShoppingList = () => {
  const dispatch: AppDispatch = useDispatch();
  const shoppingList = useSelector(selectShoppingList);

  const handleClick = (id: string) => {
    dispatch(deleteIngredientFromShoppingList({ id }));
  };

  return shoppingList.length ? (
    <div className={css.ingredientsShoppingListWrapper}>
      <div className={css.ingredientsShoppingListHeader}>
        <p className={css.ingredientsShoppingListHeaderHeading}>Products</p>
        <p className={css.ingredientsShoppingListHeaderHeading}>Number</p>
        <p className={css.ingredientsShoppingListHeaderHeading}>Remove</p>
      </div>
      <ul className={css.ingredientsShoppingList}>
        {shoppingList.map((ingredient, index) => {
          const { id, title, thumb, measure } = ingredient;
          return (
            <li key={index} className={css.ingredientsShoppingListItem}>
              <img className={css.ingredientImage} src={thumb} />
              <p className={css.ingredientTitle}>{title}</p>
              <p className={css.ingredientMeasure}>{measure}</p>
              <svg className={css.iconX} onClick={() => handleClick(id)}>
                <use href="/assets/icons.svg#icon-exit" />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <p className={css.shoppingListWarning}>
      You have no items in shopping list.
    </p>
  );
};
