import type { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { checkToken } from "../utils/tokenStorage";
import { useAppSelector } from "../services/hook";
import { getUserData } from "../services/selectors";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const { role, id, is_mentor } = useAppSelector(getUserData);

  if (!checkToken() || location.pathname.includes("NaN")) {
    return <Navigate to="/start" replace />;
  }
  if (role !== "manager" && location.pathname === "/") {
    return is_mentor ? <Navigate to={`/mentor/employee/${id}`} replace /> : <Navigate to={`/employee/${id}`} replace />;
  }
  return children;
};

export default ProtectedRoute;
