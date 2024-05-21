import { FC, ReactNode } from "react";
import { useAuth } from "../hook/useAuth";
import { Navigate } from "react-router-dom";

type TGuestGuard = {
  children: ReactNode
}
const GuestGuard: FC<TGuestGuard> = ({ children }) => {
  const { isInitialized, isAuthenticated } = useAuth();

  if (!isInitialized) return <>Loading ...</>;

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return (
    <>{children}</>
  );
};

export default GuestGuard;