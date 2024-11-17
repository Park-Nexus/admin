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

export function Payout() {
  const { payouts, refetch } = usePayouts();
  const [selectedPayoutId, setSelectedPayoutId] = useState<number>();
  const { createPayout, isPending } = useCreatePayouts();
  const { payout } = usePayoutDetail(selectedPayoutId);
  const { balance } = usePlatformBalance();

  console.log(payouts);
  console.log(payout);
  console.log(balance);

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
        <h2>Payouts</h2>
        <Button onClick={onCreatePayout} disabled={isPending}>
          Generate Payouts
        </Button>
      </S.Header>

      <S.Panel>
        {/* Payout List */}
        <S.PayoutListWrapper>
          <h3>Payout History</h3>
          <Table {...tableProps} />
        </S.PayoutListWrapper>

        {/* Payout Detail */}
        <S.PayoutDetailWrapper>
          <h3>Payout Detail</h3>
          {payout ? (
            <S.DetailCard>
              <p>
                <strong>Parking Lot:</strong> {payout.parkingLot.name}
              </p>
              <p>
                <strong>Owner Email:</strong>{" "}
                {payout.parkingLot.owner.account.email}
              </p>
              <p>
                <strong>Total Net:</strong> ${payout.totalNetInUsd.toFixed(2)}
              </p>
              <p>
                <strong>Fee:</strong> ${payout.totalFeeInUsd.toFixed(2)}
              </p>
              <p>
                <strong>Status:</strong> {payout.status}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(payout.createdAt).toLocaleString()}
              </p>
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
    margin-bottom: 16px;

    h2 {
      margin: 0;
    }
  `;

  export const Panel = styled.div`
    display: flex;
    gap: 16px;
  `;

  export const PayoutListWrapper = styled.div`
    flex: 2;
  `;

  export const PayoutDetailWrapper = styled.div`
    flex: 1;
    background-color: #f9f9f9;
    padding: 16px;
    border-radius: 8px;

    h3 {
      margin-bottom: 16px;
    }
  `;

  export const DetailCard = styled.div`
    background-color: #fff;
    border: 1px solid #e0e0e0;
    padding: 16px;
    border-radius: 8px;

    p {
      margin: 8px 0;
    }

    strong {
      font-weight: 600;
    }
  `;
}
