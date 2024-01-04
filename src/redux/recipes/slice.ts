import { createSlice } from "@reduxjs/toolkit";
import Notiflix from "notiflix";
import {
  fetchCategoriesList,
  fetchRecipesMainPage,
  fetchRecipesByCategory,
  fetchIngredientsList,
  addRecipe,
  fetchPopularRecipes,
} from "./operations";

export interface IngredientInRecipes {
  _id: string;
  measure: string;
}

export interface Ingredient {
  desc: string;
  t: string;
  tnb: string;
  ttl: string;
  _id: string;
}

export interface Category {
  title: string;
  thumb: string;
  description: string;
}

export interface Recipe {
  _id: string;
  title: string;
  category: string;
  area: string;
  instructions: string;
  thumb: string;
  description: string;
  preview: string;
  time: string;
  favorites: string[] | [];
  youtube: string;
  tags: string[];
  ingredients: IngredientInRecipes[];
}

export interface RecipesIntitialState {
  isLoading: boolean;
  error: string | null;
  recipes: Recipe[];
  ingredients: Ingredient[];
  categories: Category[];
}

const initialState: RecipesIntitialState = {
  recipes: [],
  categories: [],
  ingredients: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: RecipesIntitialState) => {
  state.isLoading = true;
  Notiflix.Loading.standard("Loading...");
};

const handleRejected = (state: RecipesIntitialState, action: any) => {
  state.isLoading = false;
  Notiflix.Loading.remove();
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesMainPage.pending, handlePending)
      .addCase(fetchRecipesMainPage.fulfilled, (state, action) => {
        state.isLoading = false;
        Notiflix.Loading.remove();
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesMainPage.rejected, handleRejected)
      .addCase(fetchCategoriesList.pending, handlePending)
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        Notiflix.Loading.remove();
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesList.rejected, handleRejected)
      .addCase(fetchRecipesByCategory.pending, handlePending)
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        Notiflix.Loading.remove();
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesByCategory.rejected, handleRejected)
      .addCase(fetchIngredientsList.pending, handlePending)
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        state.isLoading = false;
        Notiflix.Loading.remove();
        state.error = null;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredientsList.rejected, handleRejected)
      .addCase(addRecipe.rejected, handleRejected)
      .addCase(addRecipe.pending, handlePending)
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.isLoading = false;
        Notiflix.Loading.remove();
        state.error = null;
        state.recipes.push(action.payload);
      })
      .addCase(fetchPopularRecipes.rejected, handleRejected)
      .addCase(fetchPopularRecipes.pending, handlePending)
      .addCase(fetchPopularRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        Notiflix.Loading.remove();
        state.error = null;
        state.recipes = action.payload;
      });
  },
});

export const { reset } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
