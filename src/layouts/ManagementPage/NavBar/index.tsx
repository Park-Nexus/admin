import * as S from "./index.styled";
import Logo from "@assets/images/mobile-logo.png";
import UserActions from "../UserActions";

export default function NavBar() {
  return (
    <S.NavBar>
      <S.Logo>
        <S.LogoImage src={Logo} alt="Logo" />
        <S.LogoText variant="h4">Admin Portal</S.LogoText>
      </S.Logo>
      <S.Divider />
      <UserActions />
    </S.NavBar>
  );
}
