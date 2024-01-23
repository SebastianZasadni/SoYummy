interface State {
  global: {
    isMenuMobile: boolean;
    isUserLogoModal: boolean;
    isUserInfoModal: boolean;
    isLogoutModal: boolean;
  };
}

export const selectIsMenuMobile = (state: State) => state.global.isMenuMobile;
export const selectIsUserLogoModal = (state: State) =>
  state.global.isUserLogoModal;
export const selectIsUserInfoModal = (state: State) =>
  state.global.isUserInfoModal;
export const selectIsLogoutModal = (state: State) => state.global.isLogoutModal;
