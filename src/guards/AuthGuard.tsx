import { FC, ReactNode } from "react";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

type TAuthGuard = {
  children: ReactNode
}
const AuthGuard: FC<TAuthGuard> = ({ children }) => {
  const { isInitialized, isAuthenticated } = useAuth();

  if (!isInitialized) return <>Loading ...</>;

  if (!isAuthenticated) return <Navigate to="/auth/sign-in" replace />;

  return (
    <>{children}</>
  );
};

export default AuthGuard;