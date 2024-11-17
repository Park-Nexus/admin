import { IRoute } from "@interfaces/common";
import { Overview } from "@pages/Overview";
import { ParkingLots } from "@pages/ParkingLots";
import { Payout } from "@pages/Payout";

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
    path: "payout/*",
    component: <Payout />,
  },
];
