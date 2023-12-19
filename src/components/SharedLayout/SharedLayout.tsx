import { Outlet } from "react-router";
import { Suspense } from "react";
import css from "./SharedLayout.module.css";
import { Header } from "../Header/Header";
import { OthersNavigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { useSelector } from "react-redux";
import { selectIsMenuMobile } from "../../redux/global/selectors";

const SharedLayout = () => {
  const isMenuMobile = useSelector(selectIsMenuMobile);
  return isMenuMobile ? (
    <OthersNavigation />
  ) : (
    <div className={css.sharedLayoutWrapper}>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
