import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

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
