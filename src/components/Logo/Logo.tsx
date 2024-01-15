import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";

export const Logo = () => {
  return (
    <NavLink to="/main">
      <img
        srcSet="/assets/icon-logo-header.png 1x, /assets/icon-logo-header@2x.png 2x"
        alt="logo"
        className={css.headerLogo}
      />
    </NavLink>
  );
};
