import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "./index.data";

export default function RouteGuard() {
  const { data } = useAuthState();

  if (data?.isAuthenticated) return <Outlet />;

  return <Navigate to="/login" />;
}
