import styled from "styled-components";
import ButtonComponent from "../button/ButtonComponent";

export const WrapperLabelText = styled.h4`
  color: rgb(56, 56, 61);
  font-size: 14px;
  font-weight: 500;
`;

export const WrapperTextValue = styled.div`
  color: rgb(56, 56, 61);
  font-size: 12px;
  font-wight: 400;
`;

export const WrapperContent = styled.div`
    display: flex:
    align-items: center;
    flex-direction: column;
    gap: 12px;
`;

export const WrapperTextPrice = styled.div`
  border-adius: 10px;
  color: rgb(56, 56, 61);
  background-color: rgb(238, 238, 238);
  width: fit-content;
  padding: 4px;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background-color: rgb(13, 92, 182) !important;
    span {
      color: #fff;
    }
  }
`;
