import React from "react";
import Image from "next/image";
import { Input, Select, Badge, Dropdown, Menu, Popover } from "antd";
import {
  ShoppingCartOutlined,
  MenuOutlined,
  CloseOutlined,
  BellOutlined,
  DownOutlined,
  UserOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import Link from "core/components/active-link/active-link.component";
import { icons } from "core/constants/icons";

import Cart from "./cart/cart.component";
import Notification from "./notification/notification.component";

import { useNavbar } from "../../providers/navbar";

import "./navbar.styles.less";

function NavbarUser({ user = { token: false, name: "Wellington", icon: 1 } }) {
  const { Search } = Input;
  const { visible, setVisible } = useNavbar();

  const search_placeholder = "Busque produtos, categorias e muito mais...";

  const menu = (
    <Menu>
      <Menu.Item>
        <UserOutlined />
        Minha conta
      </Menu.Item>
      <Menu.Item>
        <QuestionCircleOutlined />
        Ajuda
      </Menu.Item>
      <Menu.Item>
        <LogoutOutlined />
        Sair
      </Menu.Item>
    </Menu>
  );

  const before_input = (
    <Select
      className="navbar-search-category"
      placeholder="Categoria"
      size="large"
    ></Select>
  );

  const handleVisible = (e) => {
    setVisible(!visible);
  };

  const renderMobileIcon = (visible) => {
    if (visible)
      return (
        <CloseOutlined
          className="navbar-icon menu-ic"
          onClick={handleVisible}
        />
      );
    return (
      <MenuOutlined className="navbar-icon menu-ic" onClick={handleVisible} />
    );
  };

  const notificationTitle = (
    <div className="justify-between align-center">
      Notificações
      <a>Veja tudo</a>
    </div>
  );

  const cartTitle = (
    <div className="justify-between align-center">
      Carrinho
      <a>Veja tudo</a>
    </div>
  );

  const renderOptions = (token, icon, name) => {
    if (!token) {
      return (
        <ul className="options-content justify-start align-center gap-16">
          <Popover
            title={cartTitle}
            trigger="click"
            placement="bottomRight"
            content={Cart}
          >
            <li>
              <Badge count={4} offset={[1, -1]}>
                <ShoppingCartOutlined className="navbar-icon" />
              </Badge>
            </li>
          </Popover>
          <li>
            <Link href="signup">Crie sua conta</Link>
          </li>
          <li>
            <Link href="signin">Entre</Link>
          </li>
        </ul>
      );
    }

    return (
      <ul className="options-content justify-start align-center gap-20">
        <Popover
          title={notificationTitle}
          trigger="click"
          placement="bottomRight"
          content={Notification}
        >
          <li>
            <Badge count={3} offset={[-3, -1]}>
              <BellOutlined className="navbar-icon" />
            </Badge>
          </li>
        </Popover>
        <Popover
          title={cartTitle}
          trigger="click"
          placement="bottomRight"
          content={Cart}
        >
          <li>
            <Badge count={4} offset={[1, -1]}>
              <ShoppingCartOutlined className="navbar-icon" />
            </Badge>
          </li>
        </Popover>
        <Dropdown overlay={menu} placement="bottomRight">
          <li className="align-center gap-4">
            <div className="align-center" style={{ width: 24, height: 24 }}>
              <Image src={icons[icon]} alt="me" width={24} height={24} />
            </div>
            {name} {<DownOutlined />}
          </li>
        </Dropdown>
      </ul>
    );
  };

  return (
    <>
      <Search
        placeholder={search_placeholder}
        className="navbar-search-input"
        size="large"
        addonBefore={before_input}
      />
      {renderOptions(user.token, user.icon, user.name)}
      {renderMobileIcon(visible)}
    </>
  );
}

export default NavbarUser;
