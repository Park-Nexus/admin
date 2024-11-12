import { trpc } from "@trpc/trpc";

export function useAuthState() {
  const response = trpc.auth.getAuthState.useQuery();

  const isAuthenticated = response.data?.isAuthenticated || false;

  return { isAuthenticated };
}
