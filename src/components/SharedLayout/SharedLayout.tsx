import { Outlet } from "react-router";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { Suspense } from "react";
import css from "./SharedLayout.module.css";
import { Header } from "../Header/Header";
import { OthersNavigation } from "../Navigation/Navigation";
import { Footer } from "../Footer/Footer";
import { useSelector } from "react-redux";
import {
  selectIsLogoutModal,
  selectIsMenuMobile,
  selectIsUserInfoModal,
  selectIsUserLogoModal,
} from "../../redux/global/selectors";
import { UserLogoModal } from "../UserLogoModal/UserLogoModal";
import { setIsUserLogoModal } from "../../redux/global/slice";
import { UserInfoModal } from "../UserInfoModal/UserInfoModal";
import { LogoutModal } from "../LogoutModal/LogoutModal";

const SharedLayout = () => {
  const dispatch: AppDispatch = useDispatch();
  const isUserLogoModal = useSelector(selectIsUserLogoModal);
  const isUserInfoModal = useSelector(selectIsUserInfoModal);
  const isLogoutModal = useSelector(selectIsLogoutModal);

  const handleModalExit = () => {
    isUserLogoModal && dispatch(setIsUserLogoModal(false));
  };

  const isMenuMobile = useSelector(selectIsMenuMobile);
  return isMenuMobile ? (
    <OthersNavigation />
  ) : (
    <div className={css.sharedLayoutWrapper} onClick={handleModalExit}>
      <Header />
      <Suspense fallback={null}>
        {isUserLogoModal && !isLogoutModal && !isUserInfoModal && (
          <UserLogoModal />
        )}
        {isLogoutModal && <LogoutModal />}
        {isUserInfoModal && <UserInfoModal />}
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default SharedLayout;
