import * as S from "./ChangePassword.styled";

import Typo from "@components/Typo/Typo";
import { Form, Formik } from "formik";
import { Col } from "antd";
import { Input } from "@components/formComponents";

import { useState } from "react";

import notiUtil from "@utils/notification";

export default function ChangePassword() {
  const onSubmit = (values) => {};

  return (
    <S.ChangePassword>
      <Formik initialValues={{}} onSubmit={onSubmit}>
        <Form>
          <S.FormContainer>
            <Typo variant="h5">Change Password</Typo>
            <S.Divider />
            <S.FormGroup>
              <Col span={8}>
                <Typo variant="body1">New Password</Typo>
                <Input name="password" type="password" />
              </Col>
            </S.FormGroup>
            <S.FormGroup>
              <Col span={8}>
                <Typo variant="body1">Confirm New Password</Typo>
                <Input name="password_confirmation" type="password" />
              </Col>
            </S.FormGroup>
            <S.FormGroup>
              <Col span={8}>
                <S.SubmitBtn type="submit" size="large" disabled={loading}>
                  Save
                </S.SubmitBtn>
              </Col>
            </S.FormGroup>
          </S.FormContainer>
        </Form>
      </Formik>
    </S.ChangePassword>
  );
}
