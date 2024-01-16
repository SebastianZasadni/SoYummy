import { NavLink } from "react-router-dom";
import { Logo } from "../Logo/Logo";
import css from "./Navigation.module.css";
import { setIsMenuMobile } from "../../redux/global/slice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

const MenuList = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsMenuMobile(false));
  };
  return (
    <ul className={css.menuList}>
      <li className={css.menuListItem}>
        <NavLink
          to={`/category/beef/?page=1`}
          className={css.menuListLink}
          onClick={handleClick}
        >
          Categories
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/add" className={css.menuListLink} onClick={handleClick}>
          Add recipes
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/my-recipes" className={css.menuListLink} onClick={handleClick}>
          My recipes
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/favorites" className={css.menuListLink} onClick={handleClick}>
          Favorites
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/shopping-list" className={css.menuListLink} onClick={handleClick}>
          Shopping list
        </NavLink>
      </li>
      <li className={css.menuListItem}>
        <NavLink to="/search" className={css.menuListLink} onClick={handleClick}>
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
  const dispatch: AppDispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsMenuMobile(false));
  };
  return (
    <div className={css.othersNavigationWrapper}>
      <div className={css.menuHeader}>
        <Logo />
        <svg className={css.iconExit} onClick={handleClick}>
          <use href="/assets/icons.svg#icon-exit"></use>
        </svg>
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
