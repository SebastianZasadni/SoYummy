import css from "./ChooseYourBreakfast.module.css";

export const ChooseYourBreakfast = () => {
  return (
    <div className={css.box}>
      <p className={css.text}>
        <span className={css.greenText}>Delicious and healthy </span>
        way to enjoy a variety of fresh ingredients in one satisfying meal
      </p>
      <button type="button" className={css.button}>
        See recipes
        <svg className={css.iconArrow}>
          <use href="/assets/icons.svg#icon-arrow"></use>
        </svg>
      </button>
    </div>
  );
};
