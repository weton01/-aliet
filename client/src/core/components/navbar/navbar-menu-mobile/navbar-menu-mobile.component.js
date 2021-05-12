import { List, Button } from "antd";
import Image from "next/image";
import {
  TagsOutlined,
  QuestionCircleOutlined,
  BellOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import { icons } from "core/constants/icons";

import { useNavbar } from "../../../providers/navbar";

const data_signin = [
  {
    type: "userItem",
  },
  {
    title: "Categorias",
    icon: TagsOutlined,
  },
  {
    title: "Carrinho",
    icon: ShoppingCartOutlined,
  },
  {
    title: "Ajuda",
    icon: QuestionCircleOutlined,
  },
];

const data_signout = [
  {
    type: "userItem",
  },
  {
    title: "Categorias",
    icon: TagsOutlined,
  },
  {
    title: "Minha conta",
    icon: UserOutlined,
  },
  {
    title: "Notificações",
    icon: BellOutlined,
  },
  {
    title: "Carrinho",
    icon: ShoppingCartOutlined,
  },

  {
    title: "Ajuda",
    icon: QuestionCircleOutlined,
  },
  {
    title: "Sair",
    icon: LogoutOutlined,
  },
];

function MenuMobile({ user = { token: true, name: "Wellington", icon: 1 } }) {
  const { visible } = useNavbar();

  const makeClassName = (visible) => {
    if (visible) return "menu-mobile menu-visible";
    else return "menu-mobile";
  };

  const getUserItem = (token, icon, name) => {
    if (!token) {
      return (
        <div className="column-center" style={{ width: "100%" }}>
          Você ainda não tem conta?
          <div className="justify-center gap-8">
            <Button>Crie sua conta</Button>
            <Button>Entrar</Button>
          </div>
        </div>
      );
    }

    return (
      <div className="column-center" style={{ width: "100%" }}>
        <strong>Autenticado como:</strong>
        <div className="align-center gap-4">
          <Image src={icons[icon]} alt="me" width={24} height={24} /> {name}
        </div>
      </div>
    );
  };

  const getItem = (title, Icon) => {
    return (
      <div className="menu-item justify-center align-center gap-16">
        <Icon className="menu-item-icon" />
        {title}
      </div>
    );
  };

  return (
    <section className={makeClassName(visible)}>
      <List
        itemLayout="horizontal"
        dataSource={user.token ? data_signout : data_signin}
        renderItem={(item) => (
          <List.Item>
            {item.type === "userItem"
              ? getUserItem(user.token, user.icon, user.name)
              : getItem(item.title, item.icon)}
          </List.Item>
        )}
      />
    </section>
  );
}

export default MenuMobile;
