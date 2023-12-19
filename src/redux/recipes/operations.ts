import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Notiflix from "notiflix";

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
  async ({ category, page }, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/${category}/?page=${page}`);
      return response.data.recipes;
    } catch (e: any) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
