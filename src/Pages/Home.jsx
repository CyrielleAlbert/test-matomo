import { Button } from "@telia/styleguide/business";
import React from "react";
import {useNavigate} from "react-router-dom"
const Home = () => {
    const navigate = useNavigate();
    const enterFlow = () => navigate("/Flow")

  return (
    <>
      <div
        style={{
          height: window.innerHeight,
          width: window.innerWidth,
          backgroundColor: "#F4f4F4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button label="Enter Flow" onClick={enterFlow} />
      </div>
      <div
        style={{
          height: window.innerHeight,
          width: window.innerWidth,
          backgroundColor: "white",
        }}
      ></div>
      <div
        style={{
          height: window.innerHeight,
          width: window.innerWidth,
          backgroundColor: "#F4f4F4",
        }}
      ></div>
    </>
  );
};
export default Home;
