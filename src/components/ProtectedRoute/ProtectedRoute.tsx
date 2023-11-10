import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isAuth = true;
  const isRefreshing = true;
  const shouldRedirect = !isAuth && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
