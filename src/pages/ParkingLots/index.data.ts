import { trpc } from "@trpc/trpc";
import { TrpcOutput } from "@trpc/trpc.types";

export function useParkingLots() {
  const response = trpc.parking.lot.get.many.useQuery({});

  const lots = response?.data || [];

  return Object.assign({ lots }, response);
}

export type TItem = TrpcOutput["parking"]["lot"]["get"]["many"][number];
