import { NavLink } from "react-router-dom";
import { LoginForm } from "../../components/LoginForm/LoginForm";

import css from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={css.loginPage__Wrapper}>
      <LoginForm />
      <NavLink to="/register" className={css.loginPage__RegisterLink}>
        Registration
      </NavLink>
    </div>
  );
};

export default LoginPage;