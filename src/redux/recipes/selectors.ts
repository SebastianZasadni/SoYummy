import { Category, Ingredient, Recipe } from "./slice";

interface IngredientInShoppingList {
  title: string;
  thumb: string;
  measure: string;
  id: string;
}

interface State {
  recipes: {
    error: string;
    isLoading: boolean;
    recipes: Recipe[];
    categories: Category[];
    ingredients: Ingredient[];
    recipe: Recipe;
    shoppingList: IngredientInShoppingList[];
  };
}

export const selectIsLoading = (state: State) => state.recipes.isLoading;
export const selectError = (state: State) => state.recipes.error;
export const selectRecipes = (state: State) => state.recipes.recipes;
export const selectRecipe = (state: State) => state.recipes.recipe;
export const selectCategories = (state: State) => state.recipes.categories;
export const selectIngredients = (state: State) => state.recipes.ingredients;
export const selectShoppingList = (state: State) => state.recipes.shoppingList;
