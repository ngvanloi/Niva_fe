import React from "react";
import TypeProduct from "../../components/typeProduct/TypeProduct";
import { WrapperProducts, WrapperTypeProduct } from "./style";
import SliderComponent from "../../components/slider/SliderComponent";
import CardComponent from "../../components/card/CardComponent";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.png";
import { WrapperButtonMore } from "../../components/navbar/style";

const HomePage = () => {
  const arr = ["TV", "Tu Lanh", "LapTop"];

  return (
    <>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((e) => {
            return <TypeProduct name={e} key={e} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div className="body" style={{ width: "100%", background: "#efefef" }}>
        <div id="container" style={{ margin: '0 auto',  height: "1000px", width: '1270px' }}>
          <div id="sliders" style={{ display: "flex", gap: "20px" }}>
            <SliderComponent arrImages={[slider1, slider2, slider3]} />
            <SliderComponent arrImages={[slider2, slider3, slider1]} />
          </div>
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
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: "10px" }}>
            <WrapperButtonMore
              textButton="Xem Them"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116,229)",
                color: "rgb(11,116,229)",
                width: "240px",
                height: "38px",
                borderRadius: "4px",
              }}
              styleText={{ fontWieght: "500" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
