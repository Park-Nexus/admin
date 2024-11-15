import { Outlet } from "react-router-dom";
import * as S from "./index.styled";
import LogoImage from "@assets/images/vertical-logo.png";
import Footer from "@components/Footer";

export default function AuthPage() {
  return (
    <S.AuthPage>
      <S.Logo>
        <S.LogoImage src={LogoImage} />
      </S.Logo>
      {/* Content goes here ------- */}
      <Outlet />
      {/* End of content ---------- */}
      <Footer />
    </S.AuthPage>
  );
}
