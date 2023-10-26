import { NavLink } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";

import css from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className={css.loginPage__Wrapper}>
      <LoginForm />
      <NavLink to="/login" className={css.loginPage__RegisterLink}>
        Registration
      </NavLink>
    </div>
  );
};
