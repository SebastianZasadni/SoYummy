import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCategoriesList,
  fetchRecipesMainPage,
  fetchRecipesByCategory,
  fetchIngredientsList,
  addRecipe,
  fetchPopularRecipes,
  fetchRecipeById,
  fetchShopingList,
  addIngredientToShoppingList,
  deleteIngredientFromShoppingList,
  fetchMyRecipes,
  deleteRecipe,
  fetchFavoriteRecipes,
  deleteRecipeFromFavorites,
  addRecipeToFavorites,
  fetchRecipesByQuery,
  fetchRecipesByIngredients,
} from "./operations";

export interface IngredientInRecipes {
  id: string;
  measure: string;
}

export interface Ingredient {
  desc: string;
  t: string;
  thb: string;
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
  recipe: Recipe | Record<string, never>;
  recipes: Recipe[];
  ingredients: Ingredient[];
  categories: Category[];
  shoppingList: string[];
}

const initialState: RecipesIntitialState = {
  recipes: [],
  recipe: {},
  categories: [],
  ingredients: [],
  isLoading: false,
  error: null,
  shoppingList: [],
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
  reducers: {
    reset: () => initialState,
  },
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
      .addCase(fetchRecipesByCategory.rejected, handleRejected)
      .addCase(fetchIngredientsList.pending, handlePending)
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.ingredients = action.payload;
      })
      .addCase(fetchIngredientsList.rejected, handleRejected)
      .addCase(addRecipe.rejected, handleRejected)
      .addCase(addRecipe.pending, handlePending)
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipes.push(action.payload);
      })
      .addCase(fetchPopularRecipes.rejected, handleRejected)
      .addCase(fetchPopularRecipes.pending, handlePending)
      .addCase(fetchPopularRecipes.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipeById.rejected, handleRejected)
      .addCase(fetchRecipeById.pending, handlePending)
      .addCase(fetchRecipeById.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipe = action.payload[0];
      })
      .addCase(fetchShopingList.rejected, handleRejected)
      .addCase(fetchShopingList.pending, handlePending)
      .addCase(fetchShopingList.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.shoppingList = action.payload;
      })
      .addCase(addIngredientToShoppingList.rejected, handleRejected)
      .addCase(addIngredientToShoppingList.pending, handlePending)
      .addCase(addIngredientToShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.shoppingList = action.payload;
      })
      .addCase(deleteIngredientFromShoppingList.rejected, handleRejected)
      .addCase(deleteIngredientFromShoppingList.pending, handlePending)
      .addCase(deleteIngredientFromShoppingList.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.shoppingList = action.payload;
      })
      .addCase(fetchMyRecipes.rejected, handleRejected)
      .addCase(fetchMyRecipes.pending, handlePending)
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(deleteRecipe.rejected, handleRejected)
      .addCase(deleteRecipe.pending, handlePending)
      .addCase(deleteRecipe.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(fetchFavoriteRecipes.rejected, handleRejected)
      .addCase(fetchFavoriteRecipes.pending, handlePending)
      .addCase(fetchFavoriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(addRecipeToFavorites.rejected, handleRejected)
      .addCase(addRecipeToFavorites.pending, handlePending)
      .addCase(addRecipeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipe = action.payload;
      })
      .addCase(deleteRecipeFromFavorites.rejected, handleRejected)
      .addCase(deleteRecipeFromFavorites.pending, handlePending)
      .addCase(deleteRecipeFromFavorites.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipe = action.payload.updatedRecipe;
        state.recipes = action.payload.allFavoritesRecipes;
      })
      .addCase(fetchRecipesByQuery.rejected, handleRejected)
      .addCase(fetchRecipesByQuery.pending, handlePending)
      .addCase(fetchRecipesByQuery.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipesByIngredients.rejected, handleRejected)
      .addCase(fetchRecipesByIngredients.pending, handlePending)
      .addCase(fetchRecipesByIngredients.fulfilled, (state, action) => {
        state.isLoading = false;

        state.error = null;
        state.recipes = action.payload;
      });
  },
});

export const { reset } = recipesSlice.actions;
export const recipesReducer = recipesSlice.reducer;
