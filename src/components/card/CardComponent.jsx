import React from "react";
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperImageStyle, WrapperPriceText, WrapperReportText, WrapperStyleTextSell } from "./style";
import { StarFilled } from "@ant-design/icons";
import logo from "../../assets/images/logo.png";

const CardComponent = () => {
  return (
    <WrapperCardStyle hoverable style={{ width: 240 }} styles={{body:{padding: "10px"}, header:{ width: "200px", height: "200px"}}}  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}>
      <WrapperImageStyle src={logo} alt="logo" />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.96</span>
          <StarFilled style={{ fontSize: "12px", color: "yellow" }} />
        </span>
        <WrapperStyleTextSell> | Da ban 1000+</WrapperStyleTextSell>
      </WrapperReportText>
      <span>
        <WrapperPriceText>
          <span style={{ marginRight: "8px" }}>1.000.000d</span>
          <WrapperDiscountText>-6%</WrapperDiscountText>
        </WrapperPriceText>
      </span>
    </WrapperCardStyle>
  );
};

export default CardComponent;
