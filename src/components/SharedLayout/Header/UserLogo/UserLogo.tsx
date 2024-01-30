import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { selectUser } from "../../../../redux/auth/selectors";
import css from "./UserLogo.module.css";
import { setIsUserLogoModal } from "../../../../redux/global/slice";

export const UserLogo = () => {
  const dispatch: AppDispatch = useDispatch();
  const { username, thumb } = useSelector(selectUser);
  const handleOpenUserLogoModal = () => {
    dispatch(setIsUserLogoModal(true));
  };

  return (
    <div className={css.userInfo} onClick={handleOpenUserLogoModal}>
      <img src={thumb} alt="user-logo" className={css.userLogo} />
      <p className={css.userName}>{username}</p>
    </div>
  );
};
