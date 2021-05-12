import React from "react";
import { Button, List } from "antd";
import { FormatNumber } from "aliet";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const listData = [];
for (let i = 0; i < 6; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    price: 45.5,
    quantity: 2,
  });
}

const cart = { totals: { quantity: 20, value: 500 }, items: listData };

function Cart() {
  const listFooter = (
    <footer className="footer-cart-list justify-between align-center">
      <div>{new FormatNumber(cart.totals.value).formatCurrency()}</div>
      <Button size="large" icon={<ShoppingCartOutlined />}>
        Finalizar
      </Button>
      <div className="align-end gap-4">
        {cart.totals.quantity} <span className="span-item">items</span>
      </div>
    </footer>
  );

  return (
    <List
      itemLayout="vertical"
      className="cart-style"
      dataSource={cart.items}
      footer={listFooter}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <List.Item.Meta
            avatar={<img src={item.image} width={70} height={70} />}
            title={<a href={item.href}>{item.title}</a>}
            description={new FormatNumber(
              item.price * item.quantity
            ).formatCurrency()}
          />
          <div className="footer-cart-item justify-between align-center">
            <div className="align-center gap-8">
              <Button
                size="small"
                icon={<DeleteOutlined className="footer-cart-icon" />}
              >
                Remover
              </Button>
            </div>
            <div className="align-center gap-8">
              quantidade:
              <Button size="small">-</Button>
              {item.quantity}
              <Button size="small">+</Button>
            </div>
          </div>
        </List.Item>
      )}
    />
  );
}

export default Cart;
