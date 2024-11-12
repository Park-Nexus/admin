import { IRoute } from "@interfaces/common";

import General from "@pages/General/General";
import Settings from "@pages/Settings/Settings";

export const managementRoutes: IRoute[] = [
  {
    path: "/",
    component: <General />,
  },
  {
    path: "employee/*",
    component: <></>,
  },
  {
    path: "settings/*",
    component: <Settings />,
  },
];
