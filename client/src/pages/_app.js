import React from "react";
import Router from 'next/router';

import Navbar from "core/components/navbar/navbar.component.js";
import Footer from "core/components/footer/footer.component.js";
import MenuMobile from "core/components/navbar/navbar-menu-mobile/navbar-menu-mobile.component";
import NavbarProvider from "core/providers/navbar";

import "../styles/globals.less";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarProvider>
        <Navbar />
        <MenuMobile />
      </NavbarProvider>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
