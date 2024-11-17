import Button from "@components/Button";
import { usePayouts } from "./index.data";

import * as S from "./index.styled";
import { useCreatePayouts } from "./index.create";
import { Modal } from "antd";

export function Payout() {
  const { payouts, isLoading } = usePayouts();
  const { createPayout, isPending } = useCreatePayouts();
  console.log(payouts, isLoading);

  const onCreatePayout = () => {
    if (isPending) return;
    Modal.confirm({
      title: "Create Payout",
      content: `Are you sure you want to generate payouts?`,
      onOk: createPayout,
    });
  };

  return (
    <S.Wrapper>
      Payout
      <Button onClick={onCreatePayout} disabled={isPending}>
        Click me
      </Button>
    </S.Wrapper>
  );
}
