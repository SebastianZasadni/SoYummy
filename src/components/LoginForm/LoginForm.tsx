import cx from "classnames";
import css from "./loginForm.module.css";

export const LoginForm = () => {
  return (
    <form className={css.loginForm}>
      <h2 className={css.loginForm__Heading}>Sign In</h2>
      <div className={css.loginForm__InputBox}>
        <label className={css.loginForm__Label}>
          <svg className={cx(css.icons, css.iconEmail)}>
            <use href="/assets/icons.svg#icon-email"></use>
          </svg>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={css.loginForm__Inputs}
          />
        </label>
        <label className={css.loginForm__Label}>
          <svg className={cx(css.icons, css.iconPassword)}>
            <use href="/assets/icons.svg#icon-password"></use>
          </svg>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={css.loginForm__Inputs}
          />
        </label>
      </div>
      <button className={css.loginForm__Button} type="button">
        Sign in
      </button>
    </form>
  );
};
