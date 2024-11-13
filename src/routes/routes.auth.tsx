import { IRoute } from "@interfaces/common";
import { Login } from "@pages/Login";

export const authRoutes: IRoute[] = [
  {
    path: "/login",
    component: <Login />,
  },
];
