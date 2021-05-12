import React from "react";
import { List, Steps } from "antd";
import {
  LoadingOutlined,
  SmileOutlined,
  CreditCardOutlined,
  SendOutlined,
} from "@ant-design/icons";

const listData = [];

for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    image: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description: "Ant Design, a design language for background.",
    status: 1,
    type: "product",
  });
}

const stepIcons = {
  1: <CreditCardOutlined />,
  2: <SendOutlined />,
};

function Notification(value) {
  const { Step } = Steps;

  const getIconStep = (icon, status) => {
    if (icon === status) return <LoadingOutlined />;
    return stepIcons[status];
  };

  const getStatus = (status, current) => {
    if (current === status && current !== 3) return "process";

    if (current >= status) {
      return "finish";
    }

    return "wait";
  };

  return (
    <List
      itemLayout="vertical"
      size="small"
      pagination={{
        pageSize: 3,
        size: "small",
      }}
      className="notification-style"
      dataSource={listData}
      renderItem={(item) => (
        <List.Item key={item.title}>
          <List.Item.Meta
            avatar={<img src={item.image} width={70} height={70} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
          {item.type !== "answear" ? (
            <Steps current={item.status} className="ant-progress-style">
              <Step
                status={getStatus(1, item.status)}
                title="Pagamento"
                icon={getIconStep(1, item.status)}
              />
              <Step
                status={getStatus(2, item.status)}
                title="Envio"
                icon={getIconStep(2, item.status)}
              />
              <Step
                status={getStatus(3, item.status)}
                title="Concluido"
                icon={<SmileOutlined />}
              />
            </Steps>
          ) : (
            <></>
          )}
        </List.Item>
      )}
    />
  );
}

export default Notification;
