import { IRoute } from "@interfaces/common";
import { Overview } from "@pages/Overview";
import { ParkingLots } from "@pages/ParkingLots";
import { Settings } from "@pages/Settings/Settings";

export const managementRoutes: IRoute[] = [
  {
    path: "/",
    component: <Overview />,
  },
  {
    path: "parking-lots/*",
    component: <ParkingLots />,
  },
  {
    path: "settings/*",
    component: <Settings />,
  },
];
