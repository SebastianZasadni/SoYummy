import { createSlice } from "@reduxjs/toolkit";
import { fetchCategoriesList, fetchRecipesMainPage } from "./operations";
import Notiflix from "notiflix";

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
  Notiflix.Loading.standard("Loading...");
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
        Notiflix.Loading.remove();
      })
      .addCase(fetchRecipesMainPage.rejected, handleRejected)
      .addCase(fetchCategoriesList.pending, handlePending)
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
        Notiflix.Loading.remove();
      })
      .addCase(fetchCategoriesList.rejected, handleRejected);
  },
});

export const recipesReducer = recipesSlice.reducer;
