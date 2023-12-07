import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Props } from "../RestrictedRoute/RestrictedRoute";

export const ProtectedRoute = ({
  component: Component,
  redirectTo = "/",
}: Props) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
