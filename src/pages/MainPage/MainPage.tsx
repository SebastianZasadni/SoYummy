import { ChooseYourBreakfast } from "../../components/ChooseYourBreakfast/ChooseYourBreakfast";
import { Search } from "../../components/Search/Search";
import css from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={css.mainpageWrapper}>
      <Search />
      <ChooseYourBreakfast />
    </div>
  );
};
