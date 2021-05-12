import React from "react";
import Link from "next/link";
import { Form, Input, Button, Row, Col, Select, Typography } from "antd";
import MaskedInput from "antd-mask-input";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  MobileOutlined,
} from "@ant-design/icons";

import { validateMessages } from "core/constants/form-messages";

function FormSignup() {
  const { form } = Form;
  const { Text } = Typography;

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
      <Row gutter={[16]}>
        <Col span={24}>
          <Form.Item name="name" rules={[{ required: true }]}>
            <Input
              size="large"
              placeholder="nome: João da Silva"
              prefix={<UserOutlined className="signup-input-icon" />}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
            <Input
              size="large"
              placeholder="e-mail: joao@mail.com"
              prefix={<MailOutlined className="signup-input-icon" />}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password
              size="large"
              placeholder="senha: senha123"
              prefix={<LockOutlined className="signup-input-icon" />}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
        </Col>
        <Col span={24}>
          <Form.Item name="cellphone" rules={[{ required: true }]}>
            <MaskedInput
              mask="(11) 1 1111-1111"
              size="large"
              placeholder="telefone: (11) 1 1111-1111"
              prefix={<MobileOutlined className="signup-input-icon" />}
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              type="primary"
              style={{ width: "100%" }}
            >
              Cadastrar
            </Button>
          </Form.Item>
        </Col>
        <Col xs={24} md={12}>
          <Form.Item>
            <Link href="/signin">
              <Button size="large" type="link" className="link-button">
                Já possui uma conta?
              </Button>
            </Link>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

export default FormSignup;
