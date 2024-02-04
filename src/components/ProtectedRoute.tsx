import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { checkToken } from "../utils/tokenStorage";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  if (!checkToken()) {
    return <Navigate to="/start" replace />;
  }
  return children;
};

export default ProtectedRoute;
