import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { IngredientsShoppingList } from "../../components/IngredientsShoppingList/IngredientsShoppingList";
import css from "./ShoppingListPage.module.css";
import { useEffect } from "react";
import { fetchShopingList } from "../../redux/recipes/operations";

const ShoppingListPage = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShopingList());
  }, [dispatch]);
  return (
    <div className={css.shoppingListPageWrapper}>
      <h1 className={css.shoppingListPageHeading}>Shopping List</h1>
      <IngredientsShoppingList />
    </div>
  );
};

export default ShoppingListPage;
