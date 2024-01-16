import { useNavigate } from "react-router";
import { FormEvent } from "react";
import css from "./SearchFormMainPage.module.css";

export const SearchFormMainPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    const query = form.query.value;
    navigate(`/search?query=${query}`);
  };

  return (
    <form className={css.formSearch} onSubmit={handleSubmit}>
      <input type="text" className={css.formInput} name="query" />
      <button type="submit" className={css.formButton}>
        Search
      </button>
    </form>
  );
};
