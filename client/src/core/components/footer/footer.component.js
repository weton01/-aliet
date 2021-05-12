import React from "react";
import Link from "next/link";
import { Typography } from "antd";

function Footer() {
  const { Text } = Typography;

  return (
    <footer className="footer-style column-center gap-12">
      <div className="align-center">
        <Text className="footer footer-title" style={{ color: "black", opacity: 0.45 }}>
          Aliet Tecidos Ltda.
        </Text>
      </div>
      <Text className="footer footer-desc"  style={{ color: "black", opacity: 0.25 }}>
        Copyright ©2020 Produced by Aliet Enginering Experience Technology
        Department
      </Text>
    </footer>
  );
}

export default Footer;
