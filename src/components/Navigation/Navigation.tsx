import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import css from "./Navigation.module.css";

const MenuList = () => {
  return (
    <ul className={css.menuList}>
      <li className={css.menuListItem}>
        <NavLink to="/" className={css.menuListLink}>
          Categories
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/" className={css.menuListLink}>
          Add recipes
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/" className={css.menuListLink}>
          My recipes
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/" className={css.menuListLink}>
          Favorites
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/" className={css.menuListLink}>
          Shopping list
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/" className={css.menuListLink}>
          <img
            src="/assets/icon-search.png"
            alt="loupe"
            className={css.loupe}
          />
          <p className={css.textSearch}>Search</p>
        </NavLink>
      </li>
    </ul>
  );
};

export const OthersNavigation = () => {
  return (
    <div className={css.othersNavigationWrapper}>
      <div className={css.menuHeader}>
        <Logo />
        <img
          srcSet="/assets/icon-exit.png 1x, /assets/icon-exit@2x.png 2x"
          alt="exit"
          className={css.iconExit}
        />
      </div>
      <MenuList />
    </div>
  );
};

export const DesktopNavigation = () => {
  return (
    <div className={css.desktopNavigationWrapper}>
      <MenuList />
    </div>
  );
};
