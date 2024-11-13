import * as S from "./index.styled";
import DrawerItem from "./Drawer.Item";

import ParkingLotApprovalIcon from "@assets/icons/parking-lot-approval.png";
import OverviewIcon from "@assets/icons/overview.png";

const DRAWER_ITEMS = [
  {
    to: "/",
    label: "Overview",
    icon: OverviewIcon,
  },
  {
    to: "/parking-lots",
    label: "Parking Lots",
    icon: ParkingLotApprovalIcon,
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
