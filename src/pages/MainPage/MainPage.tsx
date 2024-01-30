import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError } from "../../redux/recipes/selectors";
import { fetchRecipesMainPage } from "../../redux/recipes/operations";
import { selectIsLoading } from "../../redux/recipes/selectors";
import { ChooseYourBreakfast } from "../../components/ChooseYourBreakfast/ChooseYourBreakfast";
import { PreviewCategories } from "../../components/PreviewCategories/PreviewCategories";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import css from "./MainPage.module.css";
import { reset } from "../../redux/recipes/slice";

const MainPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(reset());
    dispatch(fetchRecipesMainPage());
  }, [dispatch]);

  return (
    <div className={css.mainPageWrapper}>
      <div className={css.sectionSearch}>
        <h1 className={css.sectionSearchHeading}>
          <span className={css.green}>So</span>Yummy
        </h1>
        <p className={css.sectionSearchDescription}>
          "What to cook?" is not only a recipe app, it is, in fact, your
          cookbook. You can add your own recipes to save them for the future."
        </p>
        <SearchForm />
      </div>
      <ChooseYourBreakfast />
      {!isLoading && !isError && <PreviewCategories />}
    </div>
  );
};

export default MainPage;
