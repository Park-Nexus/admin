import { trpc } from "@trpc/trpc";
import { TrpcOutput } from "@trpc/trpc.types";

export function usePayouts() {
  const response = trpc.payment.payout.get.many.useQuery({});

  const payouts = response.data || [];

  return Object.assign({ payouts }, response);
}
export type TItem = TrpcOutput["payment"]["payout"]["get"]["many"][number];
