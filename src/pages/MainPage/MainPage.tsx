import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError } from "../../redux/recipes/selectors";
import { fetchRecipesMainPage } from "../../redux/recipes/operations";
import { selectIsLoading } from "../../redux/recipes/selectors";
import { ChooseYourBreakfast } from "../../components/ChooseYourBreakfast/ChooseYourBreakfast";
import { PreviewCategories } from "../../components/PreviewCategories/PreviewCategories";
import { Search } from "../../components/Search/Search";
import css from "./MainPage.module.css";

const MainPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchRecipesMainPage());
  }, [dispatch]);

  return (
    <div className={css.mainpageWrapper}>
      <Search />
      <ChooseYourBreakfast />
      {!isLoading && !isError && <PreviewCategories />}
    </div>
  );
};

export default MainPage;
