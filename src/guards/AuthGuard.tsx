import { FC } from "react";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

const AuthGuard: FC<any> = ({ children }) => {
  const { isInitialized, isAuthenticated } = useAuth();

  if (!isInitialized) return 'Loading ...';

  if (!isAuthenticated) return <Navigate to="/auth/sign-in" replace />;

  return (
    <>{children}</>
  );
};

export default AuthGuard;