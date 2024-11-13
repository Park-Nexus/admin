import { trpc } from "@trpc/trpc";
import { useParkingLotsContext } from "../index.context";

export function useParkingLotDetail() {
  const { selectedLotId } = useParkingLotsContext();

  const response = trpc.parking.lot.get.single.useQuery(
    {
      id: selectedLotId!,
    },
    {
      enabled: !!selectedLotId,
    }
  );

  const lot = response.data;

  return Object.assign({ lot }, response);
}
