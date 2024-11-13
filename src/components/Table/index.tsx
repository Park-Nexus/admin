import { TableProps } from "antd";
import * as S from "./index.styled";

export interface ITableProps<T> extends TableProps<T> {}
export default function Table({ ...props }: ITableProps) {
  return <S.Table {...props} />;
}
