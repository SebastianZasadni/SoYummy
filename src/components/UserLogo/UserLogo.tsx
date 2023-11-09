import css from "./UserLogo.module.css";

export const UserLogo = () => {
  return (
    <div className={css.userInfo}>
      <img
        srcSet="/assets/icon-user-logo.png 1x,
        /assets/icon-user-logo@2x.png 2x"
        alt="user-logo"
        className={css.userLogo}
      />
      <p className={css.userName}>Name</p>
    </div>
  );
};
