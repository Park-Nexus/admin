import { setAccessToken, setRefreshToken } from "@auth/auth.utils";
import { trpc } from "@trpc/trpc";
import { TrpcInput } from "@trpc/trpc.types";
import { notifyError } from "@utils/notification";
import { parseTrpcErrorMessage } from "@utils/trpcHelpers";

export type TLoginPayload = TrpcInput["auth"]["login"];
export function useSubmit() {
  const mutation = trpc.auth.login.useMutation();

  const ctx = trpc.useUtils();
  const submit = (payload: TLoginPayload) => {
    mutation.mutate(payload, {
      onSuccess({ accessToken, refreshToken }) {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        ctx.auth.getAuthState.invalidate();
      },
      onError(error) {
        notifyError(parseTrpcErrorMessage(error.message));
      },
    });
  };

  return Object.assign({ submit }, mutation);
}
