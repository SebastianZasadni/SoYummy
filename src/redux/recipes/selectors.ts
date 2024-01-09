import { Category, Ingredient, Recipe } from "./slice";

interface State {
  recipes: {
    error: string;
    isLoading: boolean;
    recipes: Recipe[];
    categories: Category[];
    ingredients: Ingredient[];
    recipe: Recipe;
  };
}

export const selectIsLoading = (state: State) => state.recipes.isLoading;
export const selectError = (state: State) => state.recipes.error;
export const selectRecipes = (state: State) => state.recipes.recipes;
export const selectRecipe = (state: State) => state.recipes.recipe;
export const selectCategories = (state: State) => state.recipes.categories;
export const selectIngredients = (state: State) => state.recipes.ingredients;
