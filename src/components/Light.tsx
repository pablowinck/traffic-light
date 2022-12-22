import React from "react";
import { LightType, useLightContext } from "../contexts/LightContext";

const Light: React.FC<{ color: LightType }> = ({ color }) => {
  const { light } = useLightContext();
  return (
    <div
      className="light"
      style={{
        backgroundColor: color,
        filter: light === color ? "brightness(1.2)" : "brightness(0.5)",
        boxShadow: light === color ? `0 0 20px 2px ${color}` : "none",
      }}
    />
  );
};

export default Light;
