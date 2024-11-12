import { Route, Routes } from "react-router-dom";

import RouteGuard from "./route.guard";
import AuthPage from "@layouts/AuthPage";
import ManagementPage from "@layouts/ManagementPage";

import { authRoutes } from "./routes.auth";
import { managementRoutes } from "./routes.management";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthPage />}>
        {authRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
      <Route element={<RouteGuard />}>
        <Route element={<ManagementPage />}>
          {managementRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}
