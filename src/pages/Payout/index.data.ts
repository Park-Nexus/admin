import { trpc } from "@trpc/trpc";

export function usePayouts() {
  const response = trpc.payment.payout.get.many.useQuery({});

  const payouts = response.data || [];

  return Object.assign({ payouts }, response);
}
