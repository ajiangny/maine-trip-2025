// src/components/Car.tsx
import React from "react";
import carImg from "../assets/car.png";

type Props = {
  screenX: number;
  direction: "left" | "right";
};

export const Car: React.FC<Props> = ({ screenX, direction }) => {
    return (
      <>
        {/* Inline keyframe style */}
        <style>
          {`
            @keyframes bump {
              0%, 100% {
                transform: translateY(0) ${direction === "left" ? "scaleX(-1)" : "scaleX(1)"};
              }
              50% {
                transform: translateY(-5px) ${direction === "left" ? "scaleX(-1)" : "scaleX(1)"};
              }
            }
          `}
        </style>
  
        <img
          src={carImg}
          alt="car"
          style={{
            position: "absolute",
            bottom: "5vh",
            left: `calc(${screenX}px - 6vw)`,
            width: "12vw",
            height: "auto",
            zIndex: 10,
            imageRendering: "pixelated",
            transition: "left 0.1s linear",
            animation: "bump 0.6s ease-in-out infinite",
          }}
        />
      </>
    );
  };