import { trpc } from "@trpc/trpc";

export function useMe() {
  const response = trpc.user.profile.get.single.useQuery();
  const me = response.data;
  return Object.assign({ me }, response);
}
