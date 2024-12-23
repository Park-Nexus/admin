import * as S from "./index.styled";

import { Formik } from "formik";
import { Navigate } from "react-router-dom";
import { Input } from "@components/formComponents";

import { TLoginPayload, useSubmit } from "./index.submit";
import { useAuthState } from "./index.data";
import { clearAuthTokens } from "@auth/auth.utils";

export function Login() {
  const { isAuthenticated } = useAuthState();
  const { submit, isPending } = useSubmit();

  const onSubmit = (values: TLoginPayload) => {
    clearAuthTokens();
    submit({ ...values });
  };

  return (
    <S.Login>
      {isAuthenticated && <Navigate to="/" />}
      <S.Title variant="h4">Sign In</S.Title>
      <Formik onSubmit={onSubmit} initialValues={{ email: "", password: "" }}>
        <S.Form>
          {/* Username ----------------------------------------------------- */}
          <S.FormGroup>
            <S.InputLabel variant="body1">Username:</S.InputLabel>
            <Input type="text" name="email" />
          </S.FormGroup>

          {/* Password ----------------------------------------------------- */}
          <S.FormGroup>
            <S.InputLabel variant="body1">Password:</S.InputLabel>
            <Input type="password" name="password" />
          </S.FormGroup>

          {/* Buttons ----------------------------------------------------- */}
          <S.LoginButton size="large" type="submit" disabled={isPending}>
            Login
          </S.LoginButton>
        </S.Form>
      </Formik>
    </S.Login>
  );
}
