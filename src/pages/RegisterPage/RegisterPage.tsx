import { NavLink } from "react-router-dom";
import { RegisterForm } from "../../components/RegisterForm/RegisterForm";

import css from "./RegisterPage.module.css";

export const RegisterPage = () => {
  return (
    <div className={css.registerPage__Wrapper}>
      <RegisterForm />
      <NavLink to="/login" className={css.registerPage__LoginLink}>
        Sign in
      </NavLink>
    </div>
  );
};
