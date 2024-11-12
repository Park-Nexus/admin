import * as S from "./index.styled";
import NavBar from "./NavBar";
import Drawer from "./Drawer";
import Footer from "@components/Footer";
import { Outlet } from "react-router-dom";

export default function ManagementPage() {
  return (
    <S.ManagementPage>
      {/* Horizontal Nav ---------------- */}
      <NavBar />
      {/* Vertical Nav ------------------ */}
      <Drawer />
      <S.ContentContainer>
        {/* Content ------------ */}
        <Outlet />
        {/* End of content ----- */}
        <Footer />
      </S.ContentContainer>
    </S.ManagementPage>
  );
}
