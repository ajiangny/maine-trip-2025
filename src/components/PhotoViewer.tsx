import React from "react";

interface PhotoViewerProps {
  image: string;
  caption: string;
  onClose: () => void;
}

export const PhotoViewer: React.FC<PhotoViewerProps> = ({ image, caption, onClose }) => {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside the frame
        style={{
          backgroundColor: "white",
          borderRadius: "6px",
          width: "400px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          cursor: "default",
        }}
      >
        {/* Polaroid image area */}
        <div
          style={{
            backgroundColor: "white",
            padding: "12px 12px 50px 12px", // Extra padding at bottom
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            
          }}
        >
          <img
            src={image}
            alt={caption}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "4px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Polaroid caption */}
        <div
          style={{
            padding: "0px 10px 40px",
            paddingTop: "0",
            fontSize: "30px",
            color: "#333",
            textAlign: "center",
            backgroundColor: "white",
            width: "100%",
            marginTop: "-8px",         // lift it closer to the image
            fontWeight: "500",         // make it bolder (optional)
          }}
        >
          {caption}
        </div>
      </div>
    </div>
  );
};