import React, { useState, useRef } from "react";
import Joi from "joi";
import cx from "classnames";
import css from "./LoginForm.module.css";
import { validationCorrect, validationError } from "../../utils/validation";
import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { login } from "../../redux/auth/operations";

export interface CredentialsLogin {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [emailValidation, setEmailValidation] = useState("");
  const iconErrorEmailRef = useRef(null);
  const iconSuccessEmailRef = useRef(null);
  const iconEmailRef = useRef(null);
  const validationEmailRef = useRef(null);
  const inputEmailRef = useRef(null);
  const iconLittleSecureRef = useRef(null);

  const dispatch: AppDispatch = useDispatch();

  const emailSchema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "pl"] },
    }),
  });

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const validateEmail = emailSchema.validate({ email });
    if (validateEmail.error) {
      validationError(
        iconErrorEmailRef,
        iconSuccessEmailRef,
        iconLittleSecureRef,
        iconEmailRef,
        validationEmailRef,
        inputEmailRef
      );
      setEmailValidation("Enter a valid email");
    } else {
      validationCorrect(
        iconSuccessEmailRef,
        iconErrorEmailRef,
        iconLittleSecureRef,
        iconEmailRef,
        validationEmailRef,
        inputEmailRef
      );
      setEmailValidation("Your email is valid");
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const credentials: CredentialsLogin = {
      email: form.email.value,
      password: form.password.value,
    };
    await dispatch(login(credentials));
    form.reset();
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit}>
      <h2 className={css.loginForm__Heading}>Sign In</h2>
      <div className={css.loginForm__InputBox}>
        <label className={css.loginForm__Label}>
          <svg ref={iconEmailRef} className={cx(css.icons, css.iconEmail)}>
            <use href="/assets/icons.svg#icon-email"></use>
          </svg>
          <input
            ref={inputEmailRef}
            type="email"
            placeholder="Email"
            name="email"
            className={css.loginForm__Inputs}
            onChange={handleEmailChange}
          />
          <img
            src="/assets/icon-error.png"
            className={css.iconError}
            ref={iconErrorEmailRef}
            alt="error-icon"
          />
          <img
            src="/assets/icon-success.png"
            className={css.iconSuccess}
            ref={iconSuccessEmailRef}
            alt="success-icon"
          />
          <p ref={validationEmailRef} className={css.validation}>
            {emailValidation}
          </p>
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
      <button className={css.loginForm__Button} type="submit">
        Sign in
      </button>
    </form>
  );
};
