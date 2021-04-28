import React from "react";
import Image from "next/image";

import FormSignin from "../modules/auth/form-signin/form-signin.component";

function Signin() {
  return (
    <section className="global-screen column-center gap-40 padding-16">
      <div className="column-center gap-20">
        <div className="justify-center align-center gap-24">
          <Image src={"/images/logo.png"} alt="me" width={60} height={60} />
          <h4 style={{ height: 45 }}>
            Tecidos <br /> Atacado
          </h4>
        </div>
        <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>
          O novo jeitinho brasileiro de se vestir
        </p>
      </div>
      <FormSignin />
    </section>
  );
}

export default Signin;
