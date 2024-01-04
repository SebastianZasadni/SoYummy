import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../redux/store";
import Select from "react-select";
import css from "./RecipeIngredientsFields.module.css";
import { selectIngredients } from "../../redux/recipes/selectors";
import { fetchIngredientsList } from "../../redux/recipes/operations";
import { reset } from "../../redux/recipes/slice";
import { Option } from "../RecipeDescriptionFields/RecipeDescriptionsFields";
import { measureList } from "./data";
import { ingredientStyle, measureStyle } from "./selectStyles";

interface Ingredient {
  id: string | null;
  ingredient: string | null;
  quantity: string | null;
  measure: string | null;
}

export const RecipeIngredientsFields = () => {
  const [countOfIngredients, setCountOfIngredients] = useState(1);
  const [arrayOfIngredients, setArrayOfIngredients] = useState<Ingredient[]>([
    {
      id: null,
      ingredient: null,
      quantity: null,
      measure: "kg",
    },
  ]);
  const dispatch: AppDispatch = useDispatch();

  const ingredients = useSelector(selectIngredients);
  const ingredientsList: Option[] = ingredients.map((ingredient) => {
    return { value: ingredient._id, label: ingredient.ttl };
  });

  const handleDecrement = () => {
    if (countOfIngredients === 1) {
      return;
    }
    setCountOfIngredients(countOfIngredients - 1);
    setArrayOfIngredients((prevArray) => {
      const newArray = prevArray.filter(
        (_, index) => index !== countOfIngredients - 1
      );
      return newArray;
    });
  };

  const handleIncrement = () => {
    if (countOfIngredients === 30) {
      return;
    }
    setCountOfIngredients(countOfIngredients + 1);
    setArrayOfIngredients((prevArray) => [
      ...prevArray,
      {
        id: null,
        ingredient: null,
        quantity: null,
        measure: "g",
      },
    ]);
  };

  const handleDelete = (indexToDelete: number) => {
    if (countOfIngredients === 1) {
      return;
    }
    setCountOfIngredients(countOfIngredients - 1);
    setArrayOfIngredients((prevArray) => {
      const newArray = prevArray.filter((_, index) => index !== indexToDelete);
      return newArray;
    });
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(fetchIngredientsList());
  }, [dispatch]);

  return (
    <div className={css.ingredientsFields}>
      <div className={css.countOfIngredientsBox}>
        <h2 className={css.ingredientsFields__Heading}>Ingredients</h2>
        <label className={css.countOfIngredientsLabel}>
          <svg className={css.iconMinus} onClick={handleDecrement}>
            <use href="/assets/icons.svg#icon-minus"></use>
          </svg>
          <input
            readOnly
            type="number"
            value={countOfIngredients}
            className={css.countOfIngredientsInput}
          />
          <svg className={css.iconPlus} onClick={handleIncrement}>
            <use href="/assets/icons.svg#icon-plus"></use>
          </svg>
        </label>
      </div>
      {arrayOfIngredients.map((_, index) => (
        <div key={index} className={css.ingredientsBox}>
          <Select
            name="ingredientsNodeList"
            placeholder="Ingredient"
            options={ingredientsList}
            className={css.reactSelect}
            value={
              arrayOfIngredients[index].ingredient && {
                label: arrayOfIngredients[index].ingredient,
                value: arrayOfIngredients[index].id,
              }
            }
            styles={ingredientStyle}
            onChange={(e) => {
              setArrayOfIngredients((prevArray) => {
                const newArray = [...prevArray];
                newArray[index].id = e && e.value;
                newArray[index].ingredient = e && e.label;
                return newArray;
              });
            }}
          />
          <div className={css.ingredientsQuantityBox}>
            <input
              type="number"
              name="quantityNodeList"
              min="0"
              className={css.ingredientsQuantityInput}
              onChange={(e) => {
                setArrayOfIngredients((prevArray) => {
                  const newArray = [...prevArray];
                  newArray[index].quantity = e && e.target.value;
                  return newArray;
                });
              }}
            />
            <Select
              name="measureNodeList"
              options={measureList}
              className={css.reactSelect}
              styles={measureStyle}
              isSearchable={false}
              value={
                arrayOfIngredients[index].measure && {
                  label: arrayOfIngredients[index].measure,
                  value: arrayOfIngredients[index].measure,
                }
              }
              defaultValue={measureList[0]}
              onChange={(e) => {
                setArrayOfIngredients((prevArray) => {
                  const newArray = [...prevArray];
                  newArray[index].measure = e && e.value;
                  return newArray;
                });
              }}
            />
          </div>
          <svg
            className={css.iconExit}
            style={{
              opacity: countOfIngredients === 1 ? "0" : "1",
            }}
            onClick={() => handleDelete(index)}
          >
            <use href="/assets/icons.svg#icon-exit"></use>
          </svg>
        </div>
      ))}
      <h2 className={css.ingredientsFields__Heading}>Recipe Preparation</h2>
      <textarea
        name="preparation"
        className={css.recipePreparationField}
        placeholder="Enter recipe"
      />
    </div>
  );
};
