import Navbar from '../src/core/components/navbar/navbar.component';
import MenuMobile from '../src/core/components/navbar/menu-mobile/menu-mobile.component';
import NavbarProvider from '../src/core/providers/navbar'
import globalStyles from '../styles/global.js';
import antd from 'antd/dist/antd.css';
 
const AppComponent = ({ Component, pageProps, currentUser }) => {
  return (
    <div  >
      <NavbarProvider>
        <Navbar/>
        <MenuMobile/>
      </NavbarProvider>
      <style jsx global>{globalStyles}</style>
      <style jsx global>{antd}</style>
      <style jsx global>{`
        .ant-form-vertical .ant-form-item-label{
          margin-bottom: 2px  !important;
          margin-right: 0px !important;
          padding: 0px;
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
};



export default AppComponent;
  