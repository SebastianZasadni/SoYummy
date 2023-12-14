import { Outlet } from "react-router";
import { Suspense } from "react";
import css from "./SharedLayout.module.css";
import { Header } from "../Header/Header";
import { OthersNavigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import CategoriesPage from "../../pages/CategoriesPage/CategoriesPage";

const SharedLayout = () => {
  const isMenuMobile = false;
  return isMenuMobile ? (
    <OthersNavigation />
  ) : (
    <div className={css.sharedLayoutWrapper}>
      <Header />
      {/* <CategoriesPage/> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;