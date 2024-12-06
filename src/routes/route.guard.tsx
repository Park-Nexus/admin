import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "./routes.data";
import { Splash } from "@components/Splash";

export default function RouteGuard() {
  const { data, isFetching } = useAuthState();

  console.log("data", data);

  if (isFetching) return <Splash />;
  if (data?.isAuthenticated) return <Outlet />;
  return <Navigate to="/login" />;
}
