import { IRoute } from "@interfaces/common";

import ForgotPassword from "@pages/ForgotPassword/ForgotPassword";
import Login from "@pages/Login";

export const authRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "/forgot-password",
    component: <ForgotPassword />,
  },
];
