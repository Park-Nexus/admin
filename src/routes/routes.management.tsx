import { IRoute } from "@interfaces/common";
import Overview from "@pages/Overview";
import Settings from "@pages/Settings/Settings";

export const managementRoutes: IRoute[] = [
  {
    path: "/",
    component: <Overview />,
  },
  {
    path: "parking-lot-approval/*",
    component: <></>,
  },
  {
    path: "settings/*",
    component: <Settings />,
  },
];
