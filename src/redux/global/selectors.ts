interface State {
  global: {
    isMenuMobile: boolean;
  };
}

export const selectIsMenuMobile = (state: State) => state.global.isMenuMobile;
