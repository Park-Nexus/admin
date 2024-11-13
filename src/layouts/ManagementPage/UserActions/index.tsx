import { logout } from "@auth/auth.utils";
import * as S from "./index.styled";

import Avatar from "@components/Avatar";

import { Popover } from "antd";
import { useMe } from "./index.data";

export default function UserActions() {
  const { me } = useMe();

  const Menu = (
    <S.UserActionsMenu>
      <S.UserInfo>
        <Avatar username="admin" />
        <S.Username variant="h5">
          {me?.firstName + " " + me?.lastName}
        </S.Username>
      </S.UserInfo>
      <S.LogoutBtn size="large" onClick={logout}>
        Sign Out
      </S.LogoutBtn>
      {/* <S.ResetPasswordBtn to="/settings/change-password">
        Reset Password
      </S.ResetPasswordBtn> */}
    </S.UserActionsMenu>
  );

  return (
    <Popover content={Menu} trigger={"click"}>
      <Avatar username="admin" />
    </Popover>
  );
}
