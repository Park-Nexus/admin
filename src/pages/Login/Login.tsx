import * as S from "./Login.styled";

import { Formik } from "formik";
import { Select as AntSelect } from "antd";
import { Navigate } from "react-router-dom";
import { Input } from "@components/formComponents";

import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    setLoading(true);
  };

  return (
    <S.Login>
      {true && <Navigate to="/" />}
      <S.Title variant="h4">Sign In</S.Title>
      <Formik onSubmit={onSubmit} initialValues={{}}>
        {({ errors }) => (
          <S.Form>
            {/* Username ----------------------------------------------------- */}
            <S.FormGroup>
              <S.InputLabel variant="body1">Username:</S.InputLabel>
              <Input type="text" name="username" />
            </S.FormGroup>

            {/* Password ----------------------------------------------------- */}
            <S.FormGroup>
              <S.InputLabel variant="body1">Password:</S.InputLabel>
              <Input type="password" name="password" />
            </S.FormGroup>

            {/* Buttons ----------------------------------------------------- */}
            <S.LoginButton size="large" type="submit" disabled={loading}>
              Login
            </S.LoginButton>
            <S.ForgotPasswordContainer>
              <S.ForgotPasswordLink to="/forgot-password">
                Forgot Your Password?
              </S.ForgotPasswordLink>
            </S.ForgotPasswordContainer>
          </S.Form>
        )}
      </Formik>
    </S.Login>
  );
}
