import { Spin, Tag } from "antd";
import { useParkingLotsContext } from "../index.context";
import { useParkingLotDetail } from "./index.data";
import * as S from "./index.styled";
import Button from "@components/Button";

export function Detail() {
  const { selectedLotId } = useParkingLotsContext();
  const { lot, isFetching } = useParkingLotDetail();

  if (!selectedLotId) return null;
  return (
    <S.Wrapper>
      <S.PageTitle variant="h6">Detail</S.PageTitle>
      <S.ContentWrapper>
        <S.Header>
          <S.HeaderTag color={lot?.isApproved ? "cyan" : "red"}>
            {lot?.isApproved ? "Approved" : "Pending Approval"}
          </S.HeaderTag>
          <Button
            style={{
              backgroundColor: lot?.isApproved
                ? "var(--c-red)"
                : "var(--c-blue)",
            }}>
            {lot?.isApproved ? "Withdraw Approval" : "Approve"}
          </Button>
        </S.Header>
        <Spin spinning={isFetching} size="large" />
        {lot && (
          <>
            <S.SectionTitle variant="h6">Lot Information</S.SectionTitle>
            <S.InfoRow>
              <S.Label>Name:</S.Label>
              <S.Value>{lot.name}</S.Value>
            </S.InfoRow>
            <S.InfoRow>
              <S.Label>Description:</S.Label>
              <S.Value>{lot.description}</S.Value>
            </S.InfoRow>
            <S.InfoRow>
              <S.Label>Phone:</S.Label>
              <S.Value>{lot.phone}</S.Value>
            </S.InfoRow>
            <S.InfoRow>
              <S.Label>Check In Start:</S.Label>
              <S.Value>{lot.openAt}</S.Value>
            </S.InfoRow>
            <S.InfoRow>
              <S.Label>Check In End:</S.Label>
              <S.Value>{lot.closeAt}</S.Value>
            </S.InfoRow>
            <div style={{ height: 8 }} />

            <S.SectionTitle variant="h6">Pricing</S.SectionTitle>
            <S.PricingTable>
              <S.PricingTableRow>
                <S.PricingTableHeader>Vehicle Type</S.PricingTableHeader>
                <S.PricingTableHeader>Price</S.PricingTableHeader>
              </S.PricingTableRow>
              {lot.parkingLotPrices.map((price) => (
                <S.PricingTableRow key={price.vehicleType}>
                  <S.PricingTableCell>{price.vehicleType}</S.PricingTableCell>
                  <S.PricingTableCell>${price.price}</S.PricingTableCell>
                </S.PricingTableRow>
              ))}
            </S.PricingTable>
            <div style={{ height: 16 }} />

            <S.SectionTitle variant="h6">Services</S.SectionTitle>
            <S.ServicesList>
              {lot.parkingLotServices.map((service) => (
                <S.ServiceItem key={service.id}>
                  <S.ServiceName>{service.name}: </S.ServiceName>
                  <S.ServicePrice>${service.price}</S.ServicePrice>
                </S.ServiceItem>
              ))}
            </S.ServicesList>
          </>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  );
}
