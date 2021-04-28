import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import {
  UserOutlined,
  LockOutlined,
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";

import Link from "core/components/active-link/active-link.component";

import "./form-signin.styles.less";

function FormSignin() {
  const { form } = Form;

  return (
    <Form form={form} className="form-singin">
      <Form.Item name="login">
        <Input
          size="large"
          prefix={<UserOutlined className="signin-input-icon" />}
          placeholder="digite seu e-mail"
        />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password
          size="large"
          prefix={<LockOutlined />}
          className="signin-input-icon"
          placeholder="digite sua senha"
        />
      </Form.Item>
      <div className="justify-between align-center">
        <Form.Item>
          <Checkbox>Manter Conectado</Checkbox>
        </Form.Item>
        <Form.Item>
          <a>Esqueceu sua senha?</a>
        </Form.Item>
      </div>
      <Form.Item>
        <Button size="large" type="primary" className="signin-btn">
          Entrar
        </Button>
      </Form.Item>
      <div className="justify-between align-center">
        <div className="justify-start align-center gap-8">
          Redes Sociais:
          <InstagramFilled className="social-icon" />
          <FacebookFilled className="social-icon" />
          <LinkedinFilled className="social-icon" />
        </div>
        <Link href="/signup">Registre-se</Link>
      </div>
    </Form>
  );
}

export default FormSignin;
