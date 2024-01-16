import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import css from "./SearchBar.module.css";

export const SearchBar = () => {
  const [searchOption, setSearchOption] = useState("title");
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const option = e.currentTarget.value;
    setSearchOption(option);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const query = form.query.value;
    if (searchOption === "title") {
      form.reset();
      return navigate(`/search?query=${query}`);
    } else {
      form.reset();
      return navigate(`/search?ingredient=${query}`);
    }
  };

  return (
    <div className={css.searchBarWrapper}>
      <form className={css.formSearch} onSubmit={handleSubmit}>
        <input type="text" className={css.formInput} name="query" />
        <button type="submit" className={css.formButton}>
          Search
        </button>
      </form>
      <label className={css.selectLabel}>
        Search by:
        <select className={css.select} onChange={handleChange}>
          <option value="title">Title</option>
          <option title="ingredient">Ingredient</option>
        </select>
      </label>
    </div>
  );
};
