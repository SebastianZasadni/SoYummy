import { Route, Routes } from "react-router";
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router";
import { AppDispatch } from "./redux/store";
import { refreshUser } from "./redux/auth/operations";
import { RestrictedRoute } from "./components/RestrictedRoute/RestrictedRoute";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const WelcomePage = lazy(() => import("./pages/WelcomePage/WelcomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage/RegisterPage"));
const CategoriesPage = lazy(
  () => import("./pages/CategoriesPage/CategoriesPage")
);
const AddRecipePage = lazy(() => import("./pages/AddRecipePage/AddRecipePage"));
const RecipePage = lazy(() => import("./pages/RecipePage/RecipePage"));
const ShoppingListPage = lazy(
  () => import("./pages/ShoppingListPage/ShoppingListPage")
);
const MyRecipesPage = lazy(() => import("./pages/MyRecipesPage/MyRecipesPage"));
const FavoritePage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const SearchPage = lazy(() => import("./pages/SearchPage/SearchPage"));

const App = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route
          index
          path="welcome"
          element={
            <RestrictedRoute redirectTo="/main" component={<WelcomePage />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/main" component={<RegisterPage />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/main" component={<LoginPage />} />
          }
        />
        <Route
          element={
            <ProtectedRoute
              redirectTo="/welcome"
              component={<SharedLayout />}
            />
          }
        >
          <Route path="main" index element={<MainPage />} />
          <Route path="category/:category" element={<CategoriesPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route path="recipe/:recipeId" element={<RecipePage />} />
          <Route path="shopping-list" element={<ShoppingListPage />} />
          <Route path="my-recipes" element={<MyRecipesPage />} />
          <Route path="favorites" element={<FavoritePage />} />
          <Route path="search" element={<SearchPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Routes>
    </>
  );
};

export default App;
