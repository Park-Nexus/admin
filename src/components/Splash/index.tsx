import styled from "styled-components";

import Logo from "@assets/images/vertical-logo.png";

export function Splash() {
  return (
    <S.Wrapper>
      <S.Logo src={Logo} alt="Logo" />
    </S.Wrapper>
  );
}

namespace S {
  export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--c-white);
  `;
  export const Logo = styled.img`
    width: 160px;
    height: 160px;
  `;
}
