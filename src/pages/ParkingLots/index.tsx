import Table, { ITableProps } from "@components/Table";
import { TItem, useParkingLots } from "./index.data";

import * as S from "./index.styled";
import dayjs from "dayjs";
import { Badge, Tag } from "antd";

export function ParkingLots() {
  const { lots } = useParkingLots();
  console.log(lots);

  const tableProps: ITableProps<TItem> = {
    dataSource: lots,
    pagination: { pageSize: 10 },
    columns: [
      {
        title: "id",
        dataIndex: "id",
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: "name",
        dataIndex: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        render: (date) => dayjs(date).format("HH:mm DD/MM/YYYY "),
      },
      {
        title: "Location",
        render: (_, record) => (
          <S.LocationUrl
            variant="body2"
            title="Open in Google Maps"
            onClick={() =>
              window.open(
                `https://www.google.com/maps/search/?api=1&query=${record.latitude},${record.longitude}`
              )
            }>
            {record.latitude}, {record.longitude}
          </S.LocationUrl>
        ),
      },
      {
        title: "Is Approved",
        dataIndex: "isApproved",
        render: (isApproved) =>
          isApproved ? <Tag color="cyan">Yes</Tag> : <Tag color="red">No</Tag>,
      },
    ],
  };

  return (
    <S.Wrapper>
      <S.PageTitle variant="h6">Parking Lots</S.PageTitle>
      <S.TableWrapper>
        <Table {...tableProps} />
      </S.TableWrapper>
    </S.Wrapper>
  );
}
