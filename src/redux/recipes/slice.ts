import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategoriesList,
  fetchRecipesMainPage,
  fetchRecipesByCategory,
} from "./operations";

export interface Ingredient {
  _id: string;
  measure: string;
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
  preview: string;
  time: string;
  favorites: string[] | [];
  youtube: string;
  tags: string[];
  ingredients: Ingredient[];
}

export interface RecipesIntitialState {
  isLoading: boolean;
  error: string | null;
  recipes: Recipe[];
  categories: Category[];
}

const initialState: RecipesIntitialState = {
  recipes: [],
  categories: [],
  isLoading: false,
  error: null,
};

const handlePending = (state: RecipesIntitialState) => {
  state.isLoading = true;
};

const handleRejected = (state: RecipesIntitialState, action: any) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipesMainPage.pending, handlePending)
      .addCase(fetchRecipesMainPage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesMainPage.rejected, handleRejected)
      .addCase(fetchCategoriesList.pending, handlePending)
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesList.rejected, handleRejected)
      .addCase(fetchRecipesByCategory.pending, handlePending)
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesByCategory.rejected, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
