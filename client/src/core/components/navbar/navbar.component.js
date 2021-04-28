import React from "react";
import { useRouter } from "next/router";

import Link from "core/components/active-link/active-link.component";
import NavUser from "./navbar-user.component";

import "./navbar.styles.less";

function Navbar({}) {
  const router = useRouter();

  const getNavbar = (route) => {
    if (route === "/signin" || route === "/signup") return <></>;
    return <NavUser />;
  };

  return (
    <nav className="navbar-style justify-center">
      <div className="navbar-content justify-between align-center ">
        <Link href="/">
          <div className="navbar-logo column-center">
            Aliet <br /> <span>Tecidos atacado</span>
          </div>
        </Link>
        {getNavbar(router.pathname)}
      </div>
    </nav>
  );
}

export default Navbar;
