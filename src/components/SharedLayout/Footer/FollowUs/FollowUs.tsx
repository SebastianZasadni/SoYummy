import css from "./FollowUs.module.css";

export const FollowUs = () => {
  return (
    <ul className={css.footerMediaList}>
      <li className={css.mediaListItem}>
        <a href="https://www.facebook.com">
          <svg className={css.mediaIcon}>
            <use href="/assets/icons.svg#icon-facebook"></use>
          </svg>
        </a>
      </li>
      <li className={css.mediaListItem}>
        <a href="https://www.youtube.com">
          <svg className={css.mediaIcon}>
            <use href="/assets/icons.svg#icon-youtube"></use>
          </svg>
        </a>
      </li>
      <li className={css.mediaListItem}>
        <a href="https://www.twitter.com">
          <svg className={css.mediaIcon}>
            <use href="/assets/icons.svg#icon-twitter"></use>
          </svg>
        </a>
      </li>
      <li className={css.mediaListItem}>
        <a href="https://www.instagram.com">
          <svg className={css.mediaIcon}>
            <use href="/assets/icons.svg#icon-instagram"></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};
