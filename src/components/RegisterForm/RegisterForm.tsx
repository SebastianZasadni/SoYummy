import cx from "classnames";
import css from "./RegisterForm.module.css";

export const RegisterForm = () => {
  return (
    <form className={css.registerForm}>
      <h2 className={css.registerForm__Heading}>Registration</h2>
      <div className={css.registerForm__InputBox}>
        <label className={css.registerForm__Label}>
        <svg className={cx(css.icons, css.iconName)}>
            <use href="/assets/icons.svg#icon-name"></use>
          </svg>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className={css.registerForm__Inputs}
          />
        </label>
        <label className={css.registerForm__Label}>
          <svg className={cx(css.icons, css.iconEmail)}>
            <use href="/assets/icons.svg#icon-email"></use>
          </svg>
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={css.registerForm__Inputs}
          />
        </label>
        <label className={css.registerForm__Label}>
          <svg className={cx(css.icons, css.iconPassword)}>
            <use href="/assets/icons.svg#icon-password"></use>
          </svg>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className={css.registerForm__Inputs}
          />
        </label>
      </div>
      <button className={css.registerForm__Button} type="button">
        Sign up
      </button>
    </form>
  );
};
