import Table, { ITableProps } from "@components/Table";
import Button from "@components/Button";
import {
  TItem,
  usePayoutDetail,
  usePayouts,
  usePlatformBalance,
} from "./index.data";

import { useCreatePayouts } from "./index.create";
import { Modal, Tag } from "antd";
import styled from "styled-components";
import { useState } from "react";
import Typo from "@components/Typo/Typo";

export function Payout() {
  const { payouts } = usePayouts();
  const [selectedPayoutId, setSelectedPayoutId] = useState<number>();
  const { createPayout, isPending } = useCreatePayouts();
  const { payout } = usePayoutDetail(selectedPayoutId);
  const { balance } = usePlatformBalance();

  const tableProps: ITableProps<TItem> = {
    dataSource: payouts,
    rowKey: "id",
    columns: [
      {
        title: "Parking Lot",
        dataIndex: ["parkingLot", "name"],
        width: 150,
      },
      {
        title: "Total Net ($)",
        dataIndex: "totalNetInUsd",
        render: (amount) => `$${amount.toFixed(2)}`,
        width: 100,
      },
      {
        title: "Fee ($)",
        dataIndex: "totalFeeInUsd",
        render: (amount) => `$${amount.toFixed(2)}`,
        width: 100,
      },
      {
        title: "Status",
        dataIndex: "status",
        render: (status) => {
          const colors: Record<string, string> = {
            COMPLETED: "green",
            PENDING: "orange",
            FAILED: "red",
          };
          return <Tag color={colors[status] || "blue"}>{status}</Tag>;
        },
        width: 100,
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        render: (date) => new Date(date).toLocaleString(),
        width: 150,
      },
    ],
    onRow: (record) => ({
      onClick: () => setSelectedPayoutId(record.id),
    }),
    pagination: { pageSize: 5 },
  };

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
      <S.Header>
        <Typo variant="h4">Payouts</Typo>
        <Button onClick={onCreatePayout} disabled={isPending}>
          Generate Payouts
        </Button>
      </S.Header>

      <S.BalanceContainer>
        <S.BalanceCard>
          <Typo variant="body2">Available Balance</Typo>
          <Typo variant="h5">
            ${balance?.available?.[0]?.amount || 0 / 100}
          </Typo>
        </S.BalanceCard>
        <S.BalanceCard>
          <Typo variant="body2">Pending Balance</Typo>
          <Typo variant="h5">${balance?.pending?.[0]?.amount || 0 / 100}</Typo>
        </S.BalanceCard>
        <S.BalanceCard>
          <Typo variant="body2">Connect Reserved</Typo>
          <Typo variant="h5">
            ${balance?.connect_reserved?.[0]?.amount || 0 / 100}
          </Typo>
        </S.BalanceCard>
      </S.BalanceContainer>

      <S.Panel>
        <S.PayoutListWrapper>
          <Typo variant="h5">Payout History</Typo>
          <div style={{ height: "16px" }} />
          <Table {...tableProps} />
        </S.PayoutListWrapper>
        <S.PayoutDetailWrapper>
          <Typo variant="h5">Payout Detail</Typo>
          <div style={{ height: "16px" }} />
          {payout ? (
            <S.DetailCard>
              <Typo variant="body2">
                <strong>Parking Lot:</strong> {payout.parkingLot.name}
              </Typo>
              <Typo variant="body2">
                <strong>Owner Email:</strong>{" "}
                {payout.parkingLot.owner.account.email}
              </Typo>
              <Typo variant="body2">
                <strong>Total Net:</strong> ${payout.totalNetInUsd.toFixed(2)}
              </Typo>
              <Typo variant="body2">
                <strong>Fee:</strong> ${payout.totalFeeInUsd.toFixed(2)}
              </Typo>
              <Typo variant="body2">
                <strong>Status:</strong> {payout.status}
              </Typo>
              <Typo variant="body2">
                <strong>Created At:</strong>{" "}
                {new Date(payout.createdAt).toLocaleString()}
              </Typo>
            </S.DetailCard>
          ) : (
            <p>Select a payout to see details</p>
          )}
        </S.PayoutDetailWrapper>
      </S.Panel>
    </S.Wrapper>
  );
}

namespace S {
  export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
  `;

  export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 16px;
  `;

  export const BalanceContainer = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 16px;
  `;

  export const BalanceCard = styled.div`
    background-color: #ffffff; /* Changed to white */
    border-radius: 8px;
    padding: 16px;
    flex: 1;
    text-align: center;

    h5 {
      margin: 8px 0 0;
    }
  `;

  export const Panel = styled.div`
    display: flex;
    gap: 16px;
  `;

  export const PayoutListWrapper = styled.div`
    flex: 2;
    padding: 16px;
    background-color: #ffffff;
    border-radius: 8px;
  `;

  export const PayoutDetailWrapper = styled.div`
    flex: 1;
    background-color: #f9f9f9;

    border-radius: 8px;
  `;

  export const DetailCard = styled.div`
    background-color: #fff;
    padding: 16px;
    border-radius: 8px;
    p {
      margin-bottom: 8px;
    }
  `;
}
