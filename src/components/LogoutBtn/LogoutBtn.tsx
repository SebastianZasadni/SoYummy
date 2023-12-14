import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";
import css from "./LogoutBtn.module.css";

export const LogoutBtn = () => {
  const dispatch: AppDispatch = useDispatch();
  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <button type="submit" onClick={handleClick}>
      Logout
    </button>
  );
};
