import * as S from "./ForgotPassword.styled";

import { Formik } from "formik";
import { Navigate } from "react-router-dom";

import { useState } from "react";
import notiUtil from "@utils/notification";

export default function ForgotPassword() {
  const onSubmit = (values) => {};

  return (
    <S.ForgotPassword>
      {true && <Navigate to="/" />}
      <S.Title variant="h4">Forgot Password</S.Title>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        <S.Form>
          <S.InputLabel variant="body1">Your work email:</S.InputLabel>
          <S.FormInput type="email" name="email" />
          <S.ConfirmButton type="submit" size="large">
            Confirm & Send OTP
          </S.ConfirmButton>
          <S.BackToLoginContainer>
            <S.BackToLoginLink to="/login">Back to Login</S.BackToLoginLink>
          </S.BackToLoginContainer>
        </S.Form>
      </Formik>
    </S.ForgotPassword>
  );
}
