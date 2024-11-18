import { IRoute } from "@interfaces/common";
import { Overview } from "@pages/Overview";
import { ParkingLots } from "@pages/ParkingLots";
import { Payout } from "@pages/Payout";
import { SystemMetrics } from "@pages/SystemMetrics";

export const managementRoutes: IRoute[] = [
  {
    path: "/",
    component: <Overview />,
  },
  {
    path: "system-metrics/*",
    component: <SystemMetrics />,
  },
  {
    path: "parking-lots/*",
    component: <ParkingLots />,
  },
  {
    path: "payout/*",
    component: <Payout />,
  },
];
