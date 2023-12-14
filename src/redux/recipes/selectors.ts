import { Category, Recipe } from "./slice";

interface State {
  recipes: {
    error: string;
    isLoading: boolean;
    recipes: Recipe[];
    categories: Category[];
  };
}

export const selectIsLoading = (state: State) => state.recipes.isLoading;
export const selectError = (state: State) => state.recipes.error;
export const selectRecipes = (state: State) => state.recipes.recipes;
export const selectCategories = (state: State) => state.recipes.categories;
