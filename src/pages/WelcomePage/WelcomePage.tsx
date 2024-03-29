import { NavLink } from "react-router-dom";
import css from "./WelcomePage.module.css";

const WelcomePage = () => {
  return (
    <div className={css.welcomePage__Wrapper}>
      <a href="/">
        <img
          srcSet="/assets/icon-logo.png 1x,
          /assets/icon-logo@2x.png 2x"
          alt="logo"
          className={css.iconLogo}
        />
      </a>
      <h1 className={css.welcomePage__Heading}>Welcome to the app!</h1>
      <p className={css.welcomePage__Describe}>
        This app offers more than just a collection of
        <br /> recipes - it is designed to be your very own
        <br /> digital cookbook. You can easily save and
        <br /> retrieve your own recipes at any time.
      </p>
      <nav className={css.welcomePage__Nav}>
        <NavLink to="/register" className={css.welcomePage__RegisterBtn}>
          Registration
        </NavLink>
        <NavLink to="/login" className={css.welcomePage__LoginBtn}>
          Sign in
        </NavLink>
      </nav>
    </div>
  );
};

export default WelcomePage;
