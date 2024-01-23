import css from "./Footer.module.css";
import { Nav } from "../Nav/Nav";
import { SubscribeForm } from "../SubscribeForm/SubscribeForm";
import { FollowUs } from "../FollowUs/FollowUs";

const isMobile = window.innerWidth < 768;
const isTablet = window.innerWidth < 1279;

export const Footer = () => {
  return (
    <div className={css.footerContainer}>
      <img
        src="/assets/layout-background-middle_mobile.png"
        className={css.middleBackgroundImgMobile}
      />
      <img
        src="/assets/layout-background-middle_tablet.png"
        className={css.middleBackgroundImgTablet}
      />
      <img
        src="/assets/layout-background-middle_desktop.png"
        className={css.middleBackgroundImgDesktop}
      />
      <div className={css.footerWrapper}>
        <div className={css.footerLogoAndListBox}>
          <div className={css.footerLogo}>
            <img
              srcSet="/assets/icon-logo-footer.png 1x, /assets/icon-logo-footer@2x.png 2x"
              alt="logo"
              className={css.footerLogoIcon}
            />
            <p className={css.footerLogoText}>So Yummy</p>
          </div>
          <ul className={css.featuresOfAppList}>
            <li className={css.featuresOfAppListItem}>
              Database of recipes that can be replenished{" "}
            </li>
            <li className={css.featuresOfAppListItem}>
              Flexible search for desired and unwanted ingredients
            </li>
            <li className={css.featuresOfAppListItem}>
              Ability to add your own recipes with photos
            </li>
            <li className={css.featuresOfAppListItem}>
              Convenient and easy to use
            </li>
          </ul>
        </div>
        <Nav />
        <div className={css.footerBottomBox}>
          <SubscribeForm />
          <FollowUs />
        </div>
      </div>
      <div className={css.footerTermsBox}>
        <p className={css.footerTermsLeft}>© 2023 All Rights Reserved.</p>
        <p>Terms of Service</p>
      </div>
    </div>
  );
};
