import { ParkingLotsContext } from "./index.context";
import { Detail } from "./ParkingLots.Detail";
import { List } from "./ParkingLots.List";

export function ParkingLots() {
  return (
    <ParkingLotsContext>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          gap: "var(--s-4)",
          flex: 1,
          marginBottom: "var(--s-4)",
        }}>
        <List />
        <Detail />
      </div>
    </ParkingLotsContext>
  );
}
