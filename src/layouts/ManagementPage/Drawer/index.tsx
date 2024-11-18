import * as S from "./index.styled";
import DrawerItem from "./Drawer.Item";

import ParkingLotApprovalIcon from "@assets/icons/parking-lot-approval.png";
import OverviewIcon from "@assets/icons/overview.png";
import SystemMetricsIcon from "@assets/icons/system-metrics.png";
import PayrollIcon from "@assets/icons/payroll.png";

const DRAWER_ITEMS = [
  {
    to: "/",
    label: "Overview",
    icon: OverviewIcon,
  },
  {
    to: "/system-metrics",
    label: "System Metrics",
    icon: SystemMetricsIcon,
  },
  {
    to: "/parking-lots",
    label: "Parking Lots",
    icon: ParkingLotApprovalIcon,
  },
  {
    to: "/payout",
    label: "Payout",
    icon: PayrollIcon,
  },
];

export default function Drawer() {
  return (
    <S.Drawer>
      <S.Title variant="h4">ParkNexus</S.Title>
      {DRAWER_ITEMS.map((item, index) => (
        <DrawerItem key={index} {...item} />
      ))}
    </S.Drawer>
  );
}
