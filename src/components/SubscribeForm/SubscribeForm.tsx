import { FormEvent, useRef, useState } from "react";
import { Notify } from "notiflix";
import axios from "axios";
import Joi from "joi";
import { validationCorrect, validationError } from "../../utils/validation";
import css from "./SubscribeForm.module.css";

const emailSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "pl"] },
  }),
});

export const SubscribeForm = () => {
  const [isButtonDisabled, setButtonDisabled] = useState(true);

  const iconErrorEmailRef = useRef(null);
  const iconSuccessEmailRef = useRef(null);
  const iconEmailRef = useRef(null);
  const validationEmailRef = useRef(null);
  const inputEmailRef = useRef(null);
  const iconLittleSecureRef = useRef(null);
  const newsletterButtonRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const validateEmail = emailSchema.validate({ email });
    if (validateEmail.error) {
      setButtonDisabled(true);
      validationError(
        iconErrorEmailRef,
        iconSuccessEmailRef,
        iconLittleSecureRef,
        iconEmailRef,
        validationEmailRef,
        inputEmailRef
      );
    } else {
      setButtonDisabled(false);
      validationCorrect(
        iconSuccessEmailRef,
        iconErrorEmailRef,
        iconLittleSecureRef,
        iconEmailRef,
        validationEmailRef,
        inputEmailRef
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    try {
      await axios.post("https://soyummy-api.onrender.com/api/users/subscribe", {
        email,
      });
      Notify.success("Newsletter email sent.");
      form.reset();
    } catch (error) {
      Notify.failure("An error occurred while sending the request: " + error);
    }
  };

  return (
    <form className={css.footerForm} onSubmit={handleSubmit}>
      <p className={css.newsletterHeading}>Subscribe to our Newsletter</p>
      <p className={css.newsletterDescription}>
        Subscribe up to our newsletter. Be in touch with
        <br /> latest news and special offers, etc.
      </p>
      <label className={css.formLabel}>
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
        <input
          ref={inputEmailRef}
          onChange={handleChange}
          type="email"
          name="email"
          className={css.formInput}
          placeholder="Enter your email address"
        />
        <svg className={css.formIconEmail} ref={iconEmailRef}>
          <use href="/assets/icons.svg#icon-email"></use>
        </svg>
      </label>
      <button
        disabled={isButtonDisabled}
        type="submit"
        className={css.formButton}
        ref={newsletterButtonRef}
      >
        Subscribe
      </button>
    </form>
  );
};
