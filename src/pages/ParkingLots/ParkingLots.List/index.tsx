import Table, { ITableProps } from "@components/Table";
import { TItem, useParkingLots } from "./index.data";

import * as S from "./index.styled";
import { Tag } from "antd";
import dayjs from "dayjs";
import { useParkingLotsContext } from "../index.context";

export function List() {
  const { lots, isFetching, refetch } = useParkingLots();
  const { setSelectedLotId } = useParkingLotsContext();

  const tableProps: ITableProps<TItem> = {
    loading: isFetching,
    dataSource: lots,
    pagination: { pageSize: 10 },
    scroll: { x: "max-content" },
    rowKey: "id",
    onRow: (record) => ({
      onDoubleClick: () => {
        setSelectedLotId(record.id);
      },
    }),
    columns: [
      {
        width: 50,
        title: "id",
        dataIndex: "id",
        sorter: (a, b) => a.id - b.id,
        fixed: "left",
      },
      {
        width: 150,
        title: "name",
        dataIndex: "name",
        sorter: (a, b) => a.name.localeCompare(b.name),
        fixed: "left",
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
            Lat: {record.latitude}
            <br />
            Lon: {record.longitude}
          </S.LocationUrl>
        ),
      },
      {
        width: 80,
        title: "Status",
        dataIndex: "status",
        render: (status: TItem["status"]) => {
          if (status === "ACTIVE") return <Tag color="green">Active</Tag>;
          if (status === "INACTIVE") return <Tag color="orange">Inactive</Tag>;
          if (status === "SUSPENDED") return <Tag color="red">Suspended</Tag>;
          if (status === "DELETED") {
            return <Tag color="processing">Deleted</Tag>;
          }
        },
      },
      {
        width: 100,
        title: "Is Approved",
        dataIndex: "isApproved",
        render: (isApproved) =>
          isApproved ? <Tag color="cyan">Yes</Tag> : <Tag color="red">No</Tag>,
      },
      {
        width: 100,
        title: "Created At",
        dataIndex: "createdAt",
        render: (date) => dayjs(date).format("HH:mm DD/MM/YYYY "),
      },
      {
        width: 100,
        title: "Updated At",
        dataIndex: "updatedAt",
        render: (date) => dayjs(date).format("HH:mm DD/MM/YYYY "),
      },
    ],
  };

  return (
    <S.Wrapper>
      <S.PageTitle variant="h6">Parking Lots</S.PageTitle>
      <S.TableWrapper>
        <S.TableHeader>
          <S.RefreshBtn
            size="medium"
            disabled={isFetching}
            onClick={() => refetch()}>
            Refresh
          </S.RefreshBtn>
        </S.TableHeader>
        <Table {...tableProps} />
      </S.TableWrapper>
    </S.Wrapper>
  );
}
