import { trpc } from "@trpc/trpc";

export function useAuthState() {
  const response = trpc.auth.getAuthState.useQuery();

  return response;
}
