import React from "react";
import { Form, Input, Button, Row, Col, Select } from "antd";
import MaskedInput from "antd-mask-input";
import {
  UserOutlined,
  MailOutlined,
  TeamOutlined,
  LockOutlined,
} from "@ant-design/icons";

import Link from "core/components/active-link/active-link.component";
import { validateMessages } from "core/constants/form-messages";

import "./form-signup.styles.less";

function FormSignup() {
  const { form } = Form;

  const onFinish = (e) => {
    console.log("chegou aqui");
  };

  return (
    <Form
      name="form-signup"
      validateMessages={validateMessages}
      className="form-signup"
      onFinish={onFinish}
    >
      <p className="form-title">Registro</p>
      <Row gutter={[16]}>
        <Col xs={24} lg={12}>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input
              size="large"
              prefix={<UserOutlined className="signup-input-icon" />}
              placeholder="nome"
            />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="last_name" rules={[{ required: true }]}>
            <Input
              size="large"
              prefix={<TeamOutlined className="signup-input-icon" />}
              placeholder="sobrenome"
            />
          </Form.Item>
        </Col>
        <Col xs={24}>
          <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
            <Input
              size="large"
              prefix={<MailOutlined className="signup-input-icon" />}
              placeholder="e-mail ex: seuemail@gmail.com"
            />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password
              size="large"
              prefix={<LockOutlined className="signup-input-icon" />}
              placeholder="senha"
            />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="confirm_password" rules={[{ required: true }]}>
            <Input.Password
              size="large"
              prefix={<LockOutlined className="signup-input-icon" />}
              placeholder="confirme a senha"
            />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="cpf" rules={[{ required: true }]}>
            <MaskedInput
              mask="111.111.111-11"
              size="large"
              prefix={<div className="signup-input-icon">CPF</div>}
              placeholder="111.111.111-11"
            />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item name="cellphone" rules={[{ required: true }]}>
            <MaskedInput
              mask="(11) 1 1111-1111"
              size="large"
              addonBefore={
                <Select value={55} size="large" style={{ width: 75 }} />
              }
              placeholder="(11) 1 1111-1111"
            />
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              type="primary"
              style={{ width: "100%" }}
            >
              Finalizar Registro
            </Button>
          </Form.Item>
        </Col>
        <Col xs={24} lg={12}>
          <Form.Item>
            <div className="link-disp-style">
              <Link href="/signin">Já possui uma conta? Entre</Link>
            </div>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default FormSignup;
