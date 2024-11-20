import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 10px 120px;
    background-color: rgb(16, 148, 255);
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
    width: 1270px;
    padding: 10px 0;
`;

export const WrapperTextHeader = styled.span`
    font-size: 18px;
    color: #fff;
    font-weight:  bold;
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: #fff;
`

export const WrapperTextHeaderSmall = styled.div`
    font-size: 12px;
    color: #fff;
    white-space: nowrap;
`

// export const WrapperIconHeader = styled.div`
//    font-size: 30px;
//     color: #fff;
// `