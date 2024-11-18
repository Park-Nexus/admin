import { trpc } from "@trpc/trpc";
import { TrpcOutput } from "@trpc/trpc.types";

export function usePayouts() {
  const response = trpc.payment.payout.get.many.useQuery({});
  const payouts = response.data || [];
  return Object.assign({ payouts }, response);
}
export type TItem = TrpcOutput["payment"]["payout"]["get"]["many"][number];

export function usePayoutDetail(id?: number) {
  const response = trpc.payment.payout.get.single.useQuery(
    { id: id! },
    { enabled: !!id }
  );
  const payout = response.data;
  return Object.assign({ payout }, response);
}

export function usePlatformBalance() {
  const response = trpc.payment.payout.platformBalance.get.useQuery();
  const balance = response.data?.balance;
  return Object.assign({ balance }, response);
}
