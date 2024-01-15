import { NavLink } from "react-router-dom";
import css from "./Nav.module.css";

export const Nav = () => {
  return (
    <nav className={css.footerNav}>
      <ul className={css.navList}>
        <li className={css.navListItem}>
          <NavLink to="/" className={css.navListLink}>
            Ingredients
          </NavLink>
        </li>
        <li className={css.navListItem}>
          <NavLink to="/add" className={css.navListLink}>
            Add recipes
          </NavLink>
        </li>
        <li className={css.navListItem}>
          <NavLink to="/" className={css.navListLink}>
            My recipes
          </NavLink>
        </li>
        <li className={css.navListItem}>
          <NavLink to="/" className={css.navListLink}>
            Favorite
          </NavLink>
        </li>
        <li className={css.navListItem}>
          <NavLink to="/shopping-list" className={css.navListLink}>
            Shopping list
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
