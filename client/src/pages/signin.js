import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Typography } from "antd";

import FormSignin from "../modules/auth/components/form-signin/form-signin.component";

function Signin() {
  const { Text } = Typography;

  return (
    <section className="global-screen column-start-center gap-40 padding-16">
      <div className="column-center ">
        <div className="justify-center align-center" style={{cursor:'pointer'}}>
          <Link href="/">
            <div>
              <Image
                src={"/images/logo-ali.png"}
                alt="me"
                width={200}
                height={200}
              />
            </div>
          </Link>
        </div>
        <Text type="secondary" style={{ marginTop: -35, textAlign: 'center'  }}>
          O novo jeitinho brasileiro de se vestir. Sempre levando o melhor pra
          você
        </Text>
      </div>
      <FormSignin />
    </section>
  );
}

export default Signin;
