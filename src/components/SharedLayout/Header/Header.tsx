import css from "./Header.module.css";
import { Logo } from "./Logo/Logo";
import { UserLogo } from "./UserLogo/UserLogo";
import { DesktopNavigation } from "../Navigation/Navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { setIsMenuMobile } from "../../../redux/global/slice";

export const Header = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleOpenMenu = () => {
    dispatch(setIsMenuMobile(true));
  };

  return (
    <div className={css.headerWrapper}>
      <div className={css.headerBox}>
        <Logo />
        <DesktopNavigation />
        <div className={css.headerRightSide}>
          <UserLogo />
          <img
            src="/assets/icon-nav-hamburger.png"
            alt="nav-hamburger"
            className={css.navHamburger}
            onClick={handleOpenMenu}
          />
        </div>
      </div>
    </div>
  );
};
