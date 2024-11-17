import { trpc } from "@trpc/trpc";

export function useCreatePayouts() {
  const mutation = trpc.payment.payout.create.useMutation();

  const createPayout = async () => {
    await mutation.mutateAsync();
  };

  return Object.assign({ createPayout }, mutation);
}
