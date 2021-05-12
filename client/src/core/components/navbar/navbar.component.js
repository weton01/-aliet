import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import NavUser from "./navbar-user.component";

function Navbar({}) {
  const router = useRouter();

  const getNavbar = (route) => {
    if (route === "/signin" || route === "/signup") return <></>;
    return (
      <>
        <nav className="navbar-style justify-center">
          <div className="navbar-content justify-between align-center ">
            <Link href="/">
              <div>
              <Image
                src={"/images/logo-ali.png"}
                alt="logo-nav"
                width={100}
                height={100}
              />
              </div>
            </Link>
            <NavUser />
          </div>
        </nav>
      </>
    );
  };

  return getNavbar(router.pathname);
}

export default Navbar;
