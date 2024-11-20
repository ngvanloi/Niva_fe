import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

const InputFormComponent = (props) => {
  const { placeholder, ...rests } = props;

  const handleOnChangeInput = (e) => {
    props.onChange(e.target.value)
  }

  return (
    <>
      <WrapperInputStyle placeholder={placeholder} value={props.value} {...rests} onChange={handleOnChangeInput}/>
        {/* <span>An</span>
        <span>Hien</span>
      </WrapperInputStyle> */}
    </>
  );
};

export default InputFormComponent;
