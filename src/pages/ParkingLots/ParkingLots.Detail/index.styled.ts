import Typo from "@components/Typo/Typo";
import { Tag } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 40%;
  flex: 1;
`;
export const PageTitle = styled(Typo)`
  margin-bottom: var(--s-2);
`;
export const ContentWrapper = styled.div`
  background-color: var(--c-white);
  padding: var(--s-4);
  border-radius: var(--br-1);
`;
export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--s-2);
`;
export const HeaderTag = styled(Tag)`
  font-size: 14px;
  font-weight: 700;
  padding: var(--s-1) var(--s-3);
`;
export const SectionTitle = styled(Typo)`
  margin-bottom: var(--s-1);
`;

export const InfoRow = styled.div`
  display: flex;
  margin-bottom: var(--s-1);
`;

export const Label = styled.span`
  font-weight: bold;
  margin-right: var(--s-2);
  width: 160px;
`;

export const Value = styled.span`
  font-size: 16px;
  width: 100%;
`;
export const ValueUrl = styled.span`
  font-size: 16px;
  width: 100%;
  color: var(--c-blue);
  cursor: pointer;
  text-decoration: underline;
`;
export const PricingTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

export const PricingTableRow = styled.tr`
  border-bottom: 1px solid var(--c-gray-2);
`;

export const PricingTableHeader = styled.th`
  font-weight: bold;
  padding: var(--s-1);
`;

export const PricingTableCell = styled.td`
  padding: var(--s-1);
`;

export const ServicesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ServiceItem = styled.li`
  margin-bottom: var(--s-2);
`;

export const ServiceName = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export const ServiceDescription = styled.span`
  font-size: 14px;
  color: var(--c-gray-2);
`;

export const ServicePrice = styled.span`
  font-weight: bold;
  font-size: 16px;
`;
