import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export interface Props {
  component: JSX.Element;
  redirectTo: string;
}

export const RestrictedRoute = ({
  component: Component,
  redirectTo = "/",
}: Props) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};


