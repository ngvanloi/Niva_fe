import { Col, Image, InputNumber, Row } from "antd";
import React from "react";
import product1 from "../../assets/images/product1.jpg";
import { WrapperAddressProduct, WrapperButtonQuantityProduct, WrapperColImage, WrapperInputNumber, WrapperPriceProduct, WrapperPriceTextProduct, WrapperQuantityProduct, WrapperStyleImageSmall, WrapperStyleNameProduct, WrapperStyleTextSell } from "./style";
import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../button/ButtonComponent";

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", backgroundColor: "#fff", borderRadius: "4px" }}>
      <Col span={10} style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}>
        <Image src={product1} alt="image product" preview={false} />
        <Row style={{ paddingTop: "10px", justifyContent: "space-between" }}>
          <WrapperColImage span={4}>
            <WrapperStyleImageSmall src={product1} alt="image small" preview={false} />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperStyleImageSmall src={product1} alt="image small" preview={false} />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperStyleImageSmall src={product1} alt="image small" preview={false} />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperStyleImageSmall src={product1} alt="image small" preview={false} />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperStyleImageSmall src={product1} alt="image small" preview={false} />
          </WrapperColImage>
          <WrapperColImage span={4}>
            <WrapperStyleImageSmall src={product1} alt="image small" preview={false} />
          </WrapperColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>Giày Thể Thao Cao Cấp Nữ Biti's Hunter Street đế [BÀO] x VietMax: BEATER - Humble Edition HSW002100DEN (Đen)</WrapperStyleNameProduct>
        <div>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
          <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
        </div>
        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000 d</WrapperPriceTextProduct>
        </WrapperPriceProduct>
        <WrapperAddressProduct>
          <span>Giao den </span>
          <span class="address">Q. 1, P. ben ghe, ho chi minh </span> -<span class="change-address">Doi dia chi</span>
        </WrapperAddressProduct>
        <div style={{ margin: "10px 0 20px", borderTop: "1px solid #e5e5e5", borderBottom: "1px solid #e5e5e5", padding: "10px 0" }}>
          <div style={{ marginBottom: "10px" }}>So luong</div>
          <WrapperQuantityProduct>
            <WrapperButtonQuantityProduct>
              <MinusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </WrapperButtonQuantityProduct>

            <WrapperInputNumber min={0} max={10} defaultValue={3} onChange={onchange} size="small"></WrapperInputNumber>

            <WrapperButtonQuantityProduct>
              <PlusOutlined style={{ color: "#000", fontSize: "20px" }} />
            </WrapperButtonQuantityProduct>
          </WrapperQuantityProduct>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent size={40} styleButton={{ backgroundColor: "rgb(255, 57, 69)", height: "48px", width: "220px" }} textButton="Mua" styleText={{ color: "#fff", fontSize: "15px", formatWeight: "700" }}></ButtonComponent>
          <ButtonComponent size={40} styleButton={{ backgroundColor: "$fff", height: "48px", width: "220px", border: "1px solid rgb(13, 92, 128)" }} textButton="Mua Tra Sau" styleText={{ color: "rgb(13, 92, 128)" }}></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
