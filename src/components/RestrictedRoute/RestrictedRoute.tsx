import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isAuth = false;

  return isAuth ? <Navigate to={redirectTo} /> : Component;
};
