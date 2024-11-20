import React from "react";
import NavbarComponent from "../../components/navbar/NavbarComponent";
import CardComponent from "../../components/card/CardComponent";
import { Col, Pagination, Row } from "antd";
import { WrapperNavbar, WrapperProducts } from "./style";

const TypeProductPage = () => {
  const onChange = () => {};
  return (
    <div style={{ width: "100%", background: "#efefef" }}>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <Row style={{ flexWrap: "nowrap", paddingTop: "20px" }}>
          <WrapperNavbar span={4}>
            <NavbarComponent />
          </WrapperNavbar>
          <Col span={20}>
            <WrapperProducts>
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
              <CardComponent />
            </WrapperProducts>
            <Pagination defaultCurrent={2} total={100} onChange={onChange} style={{ textAlign: "center", marginTop: "10px" }} />;
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TypeProductPage;
