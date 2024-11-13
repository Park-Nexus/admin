import Button from "@components/Button";
import Typo from "@components/Typo/Typo";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
`;

export const PageTitle = styled(Typo)`
  margin-bottom: var(--s-2);
`;

export const TableHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: var(--s-2);
`;
export const RefreshBtn = styled(Button)``;
export const TableWrapper = styled.div`
  flex: 1;
  background-color: var(--c-white);
  padding: var(--s-3);
  border-radius: var(--br-1);
`;

export const LocationUrl = styled(Typo)`
  color: var(--c-blue-2);
  cursor: pointer;
  text-decoration: underline;
`;
