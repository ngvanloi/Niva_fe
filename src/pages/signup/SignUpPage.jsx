import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from "./style";
import InputFormComponent from "../../components/input-form/InputFormComponent";
import ButtonComponent from "../../components/button/ButtonComponent";
import { Image } from "antd";
import logo from "../../assets/images/login.png";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cornfirmPassword, setCornfirmPassword] = useState('');

  const handleNavigateSignIn = () => {
    navigate('/sign-in')
  }
  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const handleOnchangeConfirmPassword = (value) => {
    setCornfirmPassword(value)
  }

  const handleSignUp =() => {
    console.log('====================================');
    console.log(email);
    console.log(password);
    console.log(cornfirmPassword);
    console.log('====================================');
  }


  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#ccc", height: "100vh" }}>
      <div style={{ width: "800px", height: "445px", borderRadius: "6px", backgroundColor: "#fff", display: "flex" }}>
        <WrapperContainerLeft>
          <h1>Xin Chao</h1>
          <p>Dang Nhap va tao tai khoan</p>
          <InputFormComponent style={{ marginBottom: "10px" }} placeholder="abc@gmail.com" value={email} onChange={handleOnchangeEmail} />
          <div style={{ position: "relative" }}>
            <span onClick={() => setIsShowPassword(!isShowPassword)} style={{ zIndex: "10", position: "absolute", top: "4px", right: "8px" }}>{isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}</span>
            <InputFormComponent placeholder="Password" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
          </div>
          <div style={{ position: "relative" }}>
            <span onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)} style={{ zIndex: "10", position: "absolute", top: "4px", right: "8px" }}>{isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}</span>
            <InputFormComponent placeholder="Confirm Password" type={isShowConfirmPassword ? "text" : "password"} value={cornfirmPassword} onChange={handleOnchangeConfirmPassword}/>
          </div>
          <ButtonComponent onClick={handleSignUp} disabled={!email.length || !password.length || !cornfirmPassword.length} size={40} styleButton={{ backgroundColor: "rgb(255, 57, 69)", height: "48px", width: "100%", borderRadius: "4px", margin: "26px 0 10px" }} textButton="Dang nhap" styleText={{ color: "#fff", fontSize: "15px", formatWeight: "700" }}></ButtonComponent>
         <p>Ban da vo tai khoan? <WrapperTextLight onClick={handleNavigateSignIn}>Dang nhap</WrapperTextLight></p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image src={logo} preview={false} alt="image-logo" width={203} height={203} />
          <h4>Mua sam tai Tiki</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpPage;
