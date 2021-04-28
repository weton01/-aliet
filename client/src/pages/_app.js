import React from "react";

import Navbar from "core/components/navbar/navbar.component.js";
import MenuMobile from "core/components/navbar/navbar-menu-mobile/navbar-menu-mobile.component";
import NavbarProvider from "core/providers/navbar";

import "../core/styles/globals.less";
import "../core/styles/antd.less";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <MenuMobile />
      </NavbarProvider>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
