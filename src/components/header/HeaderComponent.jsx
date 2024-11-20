import { Badge, Col, Input } from "antd";
import React from "react";
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperTextHeaderSmall } from "./style";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import ButtonInputSearch from "../button-input-search/ButtonInputSearch";
import {useNavigate} from 'react-router-dom'

const { Search } = Input;

const HeaderComponent = () => {

  const navigate = useNavigate()
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  const handleNavigateLogin = () => {
    navigate('/sign-in')
  }

  return (
    <div style={{ width: "100%", background: "rgb(26,148,255)", display: "flex", justifyContent: "center"}}>
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>Niva</WrapperTextHeader>
        </Col>
        <Col span={13}>
          <ButtonInputSearch size="large" placeHolder="input search text" textButton="Tim kiem" />
        </Col>
        <Col span={6} style={{ display: "flex", gap: "54px", alignItems: "center" }}>
          <WrapperHeaderAccount>
            <div>
              <UserOutlined style={{ fontSize: "30px" }} />
            </div>
            <div onClick={handleNavigateLogin} style={{cursor: "pointer"}}>
              <WrapperTextHeaderSmall>Dang nhap/Dang ky</WrapperTextHeaderSmall>
              <div>
                <WrapperTextHeaderSmall>Tai khoan</WrapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            </Badge>
            <WrapperTextHeaderSmall>Gio hang</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
