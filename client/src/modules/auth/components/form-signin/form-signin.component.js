import React from "react";
import Link from "next/link";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
} from "@ant-design/icons";

function FormSignin() {
  const { form } = Form;
  const { Text } = Typography;

  return (
    <Form form={form} className={"form-singin"}>
      <Form.Item name="login">
        <Input
          size="large"
          prefix={<UserOutlined className="signin-input-icon" />}
          placeholder="e-mail: joao@mail.com"
        />
      </Form.Item>
      <Form.Item name="password">
        <Input.Password
          size="large"
          prefix={<LockOutlined />}
          className="signin-input-icon"
          placeholder="senha: senha123"
        />
      </Form.Item>
      <div className="justify-between align-center">
        <Form.Item>
          <Checkbox>Manter Conectado</Checkbox>
        </Form.Item>
        <Form.Item>
          <Link href="/signup">
            <Button type="link" className="link-button">
              Esqueceu sua senha?
            </Button>
          </Link>
        </Form.Item>
      </div>
      <Form.Item>
        <Button size="large" type="primary" className={"signin"}>
          Entrar
        </Button>
      </Form.Item>
      <div className="justify-between align-center">
        <div className="justify-start align-center gap-8">
          <Text>Redes Sociais:</Text>
          <InstagramFilled className="social-icon" />
          <FacebookFilled className="social-icon" />
          <LinkedinFilled className="social-icon" />
        </div>
        <Link href="/signup">
          <Button type="link" className="link-button">
            Registre-se 
          </Button>
        </Link>
      </div>
    </Form>
  );
}

export default FormSignin;
