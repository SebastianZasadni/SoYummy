import { useSelector } from "react-redux";
import { selectIngredients, selectRecipe } from "../../redux/recipes/selectors";
import css from "./RecipeIngredientsList.module.css";
import { Ingredient } from "../../redux/recipes/slice";

export const RecipeIngredientsList = () => {
  const recipe = useSelector(selectRecipe);
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

  return (
    <div className={css.ingredientsListWrapper}>
      <div className={css.ingredientsListHeader}>
        <p className={css.ingredientsListHeaderHeading}>Ingredients</p>
        <p className={css.ingredientsListHeaderHeading}>Number</p>
        <p className={css.ingredientsListHeaderHeading}>Add to list</p>
      </div>
      <ul className={css.ingredientsList}>
        {ingredients ? (
          filteredIngredients.map((ingredient) => {
            const { _id, ttl, measure } = ingredient;
            return (
              <li className={css.ingredientsListItem} key={_id}>
                <img src={ingredient.thb} className={css.ingredientImage} />
                <p className={css.ingredientTitle}>{ttl}</p>
                <p className={css.ingredientMeasure}>{measure}</p>
                <button className={css.ingredientAddButton}></button>
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
