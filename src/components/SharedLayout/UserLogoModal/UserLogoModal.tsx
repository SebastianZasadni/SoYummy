import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { KeyboardEvent } from "react";
import { useEffect, useRef } from "react";
import css from "./UserLogoModal.module.css";
import {
  setIsLogoutModal,
  setIsUserInfoModal,
  setIsUserLogoModal,
} from "../../../redux/global/slice";

export const UserLogoModal = () => {
  const dispatch: AppDispatch = useDispatch();
  const modalRef = useRef<HTMLInputElement | null>(null);

  const handleModalExit = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      dispatch(setIsUserLogoModal(false));
    }
  };

  const handleOpenUserInfoModal = () => {
    dispatch(setIsUserInfoModal(true));
  };

  const handleOpenLogoutModal = () => {
    dispatch(setIsLogoutModal(true));
  };

  useEffect(() => {
    modalRef.current && modalRef.current.focus();
  }, []);

  return (
    <div
      className={css.userLogoModalWrapper}
      ref={modalRef}
      onKeyDown={handleModalExit}
      tabIndex={0}
    >
      <div className={css.editProfileButton} onClick={handleOpenUserInfoModal}>
        <p className={css.editProfileText}>Edit profile</p>
        <svg className={css.editProfileIcon}>
          <use
            href="/assets/icons.svg#icon-pen"
            className={css.editProfileIconn}
          />
        </svg>
      </div>
      <div className={css.logoutBtn} onClick={handleOpenLogoutModal}>
        <p className={css.logoutBtnText}>Log out</p>
        <svg className={css.logoutBtnIcon}>
          <use href="/assets/icons.svg#icon-arrow" />
        </svg>
      </div>
    </div>
  );
};
