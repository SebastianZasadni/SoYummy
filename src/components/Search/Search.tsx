import css from "./Search.module.css";

export const Search = () => {
  return (
    <div className={css.sectionSearch}>
      <h1 className={css.sectionSearchHeading}>
        <span className={css.green}>So</span>Yummy
      </h1>
      <p className={css.sectionSearchDescription}>
        "What to cook?" is not only a recipe app, it is, in fact, your cookbook.
        You can add your own recipes to save them for the future."
      </p>
      <form className={css.sectionSearchForm}>
        <input type="text" className={css.formInput} />
        <button type="button" className={css.formButton}>
          Search
        </button>
      </form>
    </div>
  );
};
