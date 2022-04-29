import { Button } from "@telia/styleguide/business";
import React from "react";
import { useNavigate } from "react-router-dom";
import useMatomoAnalytics from "./hooks/useMatomo";

const Home = () => {
  useMatomoAnalytics();
  const navigate = useNavigate();
  const enterFlow = () => navigate("/Flow");

  return (
    <>
      <div
        style={{
          height: window.innerHeight,
          width: window.innerWidth,
          backgroundColor: "#181818",
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
          backgroundColor: "#181818",
        }}
      ></div>
    </>
  );
};
export default Home;
