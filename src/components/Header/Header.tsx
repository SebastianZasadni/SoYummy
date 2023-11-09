import css from "./Header.module.css";
import { Logo } from "../Logo/Logo";
import { UserLogo } from "../UserLogo/UserLogo";
import { DesktopNavigation } from "../Navigation/Navigation";

const isDesktop = window.innerWidth > 1279;

export const Header = () => {
  return (
    <div className={css.headerWrapper}>
      <div className={css.headerBox}>
        <Logo />
        {isDesktop && <DesktopNavigation />}
        <div className={css.headerRightSide}>
          <UserLogo />
          <img
            src="/assets/icon-nav-hamburger.png"
            alt="nav-hamburger"
            className={css.navHamburger}
          />
        </div>
      </div>
    </div>
  );
};
