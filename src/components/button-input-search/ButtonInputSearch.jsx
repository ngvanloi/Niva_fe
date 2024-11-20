import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../input/InputComponent";
import ButtonComponent from "../button/ButtonComponent";

const ButtonInputSearch = (props) => {
  const { size, placeHolder, textButton, bordered, backgroundColorInput = "#fff", backgroundColorButton = "rgb(13, 92, 182)", colorButton = "#fff" } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent size={size} placeholder={placeHolder} bordered={false} style={{ backgroundColor: backgroundColorInput, borderRadius: "0px" }} />
      <ButtonComponent
        size={size}
        type="text"
        icon={<SearchOutlined style={{ color: colorButton }} />}
        textButton={textButton}
        styleText={{ color: colorButton }}
        styleButton={{
          backgroundColor: backgroundColorButton,
          border: !bordered && "none",
          borderRadius: "0px",
        }}
      />
    </div>
  );
};

export default ButtonInputSearch;
