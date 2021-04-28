import React from "react";
import Image from "next/image";

import FormSignup from "modules/auth/form-signup/form-signup.component";

function Signup() {
  return (
    <section className="global-screen column-center gap-24 padding-16">
      <div className="column-start gap-20">
        <div className="justify-start align-center gap-24">
          <Image src={"/images/logo.png"} alt="me" width={60} height={60} />
          <h4 style={{ height: 45 }}>
            Tecidos <br /> Atacado
          </h4>
        </div>
        <p style={{ color: "rgba(0, 0, 0, 0.45)" }}>
          O novo jeitinho brasileiro de se vestir
        </p>
      </div>
      <FormSignup />
    </section>
  );
}

export default Signup;
