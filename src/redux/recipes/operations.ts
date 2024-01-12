import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from "notiflix";
import axios from "axios";
import { IngredientInRecipes } from "./slice";

interface RecipeCategoryFetchProps {
  category: string | undefined;
  page: string;
}

export interface AddRecipeProps {
  title: string;
  about: string;
  category: string;
  thumb: string;
  time: string;
  preparation: string;
  ingredients: IngredientInRecipes[];
}

axios.defaults.baseURL = "https://soyummy-api.onrender.com/api/";

export const fetchRecipesMainPage = createAsyncThunk(
  "recipes/fetchMainPage",
  async (_, thunkAPI) => {
    try {
      const screenSize = window.innerWidth;
      let limit;
      if (screenSize < 768) {
        limit = 1;
      } else if (screenSize < 1280) {
        limit = 2;
      } else {
        limit = 4;
      }
      const response = await axios.get(`/recipes/main-page/${limit}`);
      return response.data.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCategoriesList = createAsyncThunk(
  "recipes/fetchCategoriesList",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/category-list`);
      return response.data.categoriesList;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipesByCategory = createAsyncThunk(
  "recipes/fetchRecipesByCategory",
  async ({ category, page }: RecipeCategoryFetchProps, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${category}/?page=${page}`);
      return response.data.recipes;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchIngredientsList = createAsyncThunk(
  "recipes/fetchIngredientsList",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/ingredients/list`);
      return response.data.ingredientsList;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addRecipe = createAsyncThunk(
  "recipes/addRecipe",
  async (
    {
      title,
      about,
      category,
      thumb,
      time,
      preparation,
      ingredients,
    }: AddRecipeProps,
    thunkAPI
  ) => {
    try {
      const response = await axios.post("/own-recipes", {
        title,
        about,
        category,
        thumb,
        time,
        preparation,
        ingredients,
      });
      Notify.success("Your recipe has been added");
      return response.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchPopularRecipes = createAsyncThunk(
  "recipes/fetchPopularRecipes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/popular-recipes");
      return response.data.popularRecipes;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchRecipeById = createAsyncThunk(
  "recipes/fetchRecipeById",
  async ({ recipeId }: { recipeId: string | undefined }, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/id/${recipeId}`);
      return response.data.recipe;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchShopingList = createAsyncThunk(
  "recipes/fetchShopingList",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/ingredients/shopping-list/`);
      return response.data.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addIngredientToShoppingList = createAsyncThunk(
  "recipes/addIngredientToShoppingList",
  async ({ id }: { id: string | undefined }, thunkAPI) => {
    try {
      const response = await axios.get(`/ingredients/shopping-list/${id}`);
      return response.data.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteIngredientFromShoppingList = createAsyncThunk(
  "recipes/deleteIngredientFromShoppingList",
  async ({ id }: { id: string | undefined }, thunkAPI) => {
    try {
      const response = await axios.delete(`/ingredients/shopping-list/${id}`);
      return response.data.data;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
