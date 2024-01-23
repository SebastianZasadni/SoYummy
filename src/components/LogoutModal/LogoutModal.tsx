import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import css from "./LogoutModal.module.css";
import { setIsLogoutModal } from "../../redux/global/slice";

export const LogoutModal = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleCloseModal = () => {
    dispatch(setIsLogoutModal(false));
  };

  return (
    <div className={css.modalLogoutWrapper}>
      <p className={css.logoutWarningText}>Are you sure you want to log out?</p>
      <div className={css.buttonsBox}>
        <button type="button" className={css.buttonYes} onClick={handleLogout}>
          Yes
        </button>
        <button
          type="button"
          className={css.buttonNo}
          onClick={handleCloseModal}
        >
          No
        </button>
      </div>
    </div>
  );
};
