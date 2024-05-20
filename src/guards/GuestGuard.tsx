import { FC } from "react";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

const GuestGuard: FC<any> = ({ children }) => {
  const { isInitialized, isAuthenticated } = useAuth();

  if (!isInitialized) return <>Loading ...</>;

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <>{children}</>
  );
};

export default GuestGuard;