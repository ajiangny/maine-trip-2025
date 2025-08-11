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
      {/* Keyframes for the car's gentle bounce */}
      <style>
        {`
          @keyframes bump {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
        `}
      </style>

      {/* Wrapper handles positioning and bounce animation */}
      <div
        style={{
          position: "absolute",
          bottom: "5vh",
          left: `calc(${screenX}px - 6vw)`,
          width: "12vw",
          height: "auto",
          zIndex: 10,
          transition: "left 0.1s linear",
          animation: "bump 0.6s ease-in-out infinite",
        }}
      >
        {/* Image flips horizontally based on travel direction */}
        <img
          src={carImg}
          alt="car"
          style={{
            width: "100%",
            height: "auto",
            imageRendering: "pixelated",
            transform: direction === "left" ? "scaleX(-1)" : "scaleX(1)",
          }}
        />
      </div>
    </>
  );
};
