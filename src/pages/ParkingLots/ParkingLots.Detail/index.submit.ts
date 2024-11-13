import { trpc } from "@trpc/trpc";
import { TrpcInput } from "@trpc/trpc.types";
import { notifyError, notifySuccess } from "@utils/notification";
import { parseTrpcErrorMessage } from "@utils/trpcHelpers";

export type TUpdateApprovalStatusPayload =
  TrpcInput["parking"]["lot"]["approvalStatus"]["update"];
export function useSubmit() {
  const mutation = trpc.parking.lot.approvalStatus.update.useMutation();

  const ctx = trpc.useUtils();
  const submitApprovalStatus = (payload: TUpdateApprovalStatusPayload) => {
    mutation.mutate(payload, {
      onSuccess() {
        ctx.parking.lot.get.single.invalidate();
        ctx.parking.lot.get.many.invalidate();
        notifySuccess("Approval status updated");
      },
      onError(error) {
        notifyError(parseTrpcErrorMessage(error.message));
      },
    });
  };

  return Object.assign({ submitApprovalStatus }, mutation);
}
