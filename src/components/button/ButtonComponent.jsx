import { Button } from "antd";
import React from "react";

const ButtonComponent = ({ size, type ,bordered, textButton, styleText, styleButton,disabled, ...rests }) => {
  return (
    <Button size={size} variant={type} bordered={bordered} {...rests} 
    style={{
      ...styleButton, 
      background : disabled ? '#ccc'  : styleButton.backgroundColor
    }}
     {...rests}>
      <span style={styleText}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
