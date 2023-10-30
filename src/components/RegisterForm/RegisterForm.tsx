import { useRef, useState } from "react";
import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
import cx from "classnames";
import css from "./RegisterForm.module.css";
import {
  validationCorrect,
  validationError,
  validationLittleSecure,
} from "../../utils/validation";

const joiPassword = Joi.extend(joiPasswordExtendCore);

export const RegisterForm = () => {
  const [emailValidation, setEmailValidation] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const iconErrorEmailRef = useRef(null);
  const iconSuccessEmailRef = useRef(null);
  const iconErrorPasswordRef = useRef(null);
  const iconSuccessPasswordRef = useRef(null);
  const iconErrorNameRef = useRef(null);
  const iconSuccessNameRef = useRef(null);
  const iconLittleSecureRef = useRef(null);
  const iconEmailRef = useRef(null);
  const iconNameRef = useRef(null);
  const validationNameRef = useRef(null);
  const inputNameRef = useRef(null);
  const validationEmailRef = useRef(null);
  const inputEmailRef = useRef(null);
  const iconPasswordRef = useRef(null);
  const validationPasswordRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const emailSchema = Joi.object({
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "pl"] },
    }),
  });

  const nameSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
  });

  const passwordSchema = Joi.object({
    password: joiPassword
      .string()
      .min(8)
      .minOfLowercase(1)
      .minOfUppercase(1)
      .minOfNumeric(1)
      .minOfSpecialCharacters(1)
      .required(),
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

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;
    const validateName = nameSchema.validate({ name });
    if (validateName.error) {
      validationError(
        iconErrorNameRef,
        iconSuccessNameRef,
        iconLittleSecureRef,
        iconNameRef,
        validationNameRef,
        inputNameRef
      );
    } else {
      validationCorrect(
        iconSuccessNameRef,
        iconErrorNameRef,
        iconLittleSecureRef,
        iconNameRef,
        validationNameRef,
        inputNameRef
      );
    }
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const password = event.target.value;
    const validatePassword = passwordSchema.validate({ password });
    if (validatePassword.error) {
      if (
        validatePassword.error?.details[0].type ===
        "password.minOfSpecialCharacters"
      ) {
        setPasswordValidation("Your password is little secure");
        return validationLittleSecure(
          iconLittleSecureRef,
          iconSuccessPasswordRef,
          iconErrorPasswordRef,
          iconPasswordRef,
          validationPasswordRef,
          inputPasswordRef
        );
      }
      validationError(
        iconErrorPasswordRef,
        iconSuccessPasswordRef,
        iconLittleSecureRef,
        iconPasswordRef,
        validationPasswordRef,
        inputPasswordRef
      );
      setPasswordValidation("Your password isn't secure");
    } else {
      validationCorrect(
        iconSuccessPasswordRef,
        iconErrorPasswordRef,
        iconLittleSecureRef,
        iconPasswordRef,
        validationPasswordRef,
        inputPasswordRef
      );
      setPasswordValidation("Your password is secure");
    }
  };

  return (
    <form className={css.registerForm}>
      <h2 className={css.registerForm__Heading}>Registration</h2>
      <div className={css.registerForm__InputBox}>
        <label className={css.registerForm__Label}>
          <svg className={cx(css.icons, css.iconName)} ref={iconNameRef}>
            <use href="/assets/icons.svg#icon-name"></use>
          </svg>
          <input
            ref={inputNameRef}
            onChange={handleNameChange}
            type="text"
            placeholder="Name"
            name="name"
            className={css.registerForm__Inputs}
          />
          <img
            src="/assets/icon-error.png"
            className={css.iconError}
            ref={iconErrorNameRef}
          />
          <img
            src="/assets/icon-success.png"
            className={css.iconSuccess}
            ref={iconSuccessNameRef}
          />
        </label>
        <label className={css.registerForm__Label}>
          <svg className={cx(css.icons, css.iconEmail)} ref={iconEmailRef}>
            <use href="/assets/icons.svg#icon-email"></use>
          </svg>
          <input
            ref={inputEmailRef}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email"
            name="email"
            className={css.registerForm__Inputs}
          />
          <img
            src="/assets/icon-error.png"
            className={css.iconError}
            ref={iconErrorEmailRef}
          />
          <img
            src="/assets/icon-success.png"
            className={css.iconSuccess}
            ref={iconSuccessEmailRef}
          />
          <p ref={validationEmailRef} className={css.validation}>
            {emailValidation}
          </p>
        </label>

        <label className={css.registerForm__Label}>
          <svg
            className={cx(css.icons, css.iconPassword)}
            ref={iconPasswordRef}
          >
            <use href="/assets/icons.svg#icon-password"></use>
          </svg>
          <input
            onChange={handlePasswordChange}
            ref={inputPasswordRef}
            type="password"
            placeholder="Password"
            name="password"
            className={css.registerForm__Inputs}
          />
          <img
            src="/assets/icon-error.png"
            className={css.iconError}
            ref={iconErrorPasswordRef}
          />
          <img
            src="/assets/icon-success.png"
            className={css.iconSuccess}
            ref={iconSuccessPasswordRef}
          />
          <img
            src="/assets/icon-little-secure.png"
            className={css.iconLittleSecure}
            ref={iconLittleSecureRef}
          />
          <p ref={validationPasswordRef} className={css.validation}>
            {passwordValidation}
          </p>
        </label>
      </div>
      <button className={css.registerForm__Button} type="button">
        Sign up
      </button>
    </form>
  );
};
