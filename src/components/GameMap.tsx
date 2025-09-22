// src/components/GameMap.tsx
import React, { useEffect, useState, useMemo, useRef } from "react";
import { Car } from "./Car";
import { MobileControls } from "./MobileControls";
import day1 from "../assets/backgrounds/day1.jpg";
import day2 from "../assets/backgrounds/day2.jpg";
import day3 from "../assets/backgrounds/day3.jpg";
import day4 from "../assets/backgrounds/day4.jpg";
import day5 from "../assets/backgrounds/day5.jpg";
import day6 from "../assets/backgrounds/day6.jpg";
import day7 from "../assets/backgrounds/day7.jpg";
import { PhotoViewer } from "./PhotoViewer";
import { PHOTOS } from "../data/photoData";
import bgm from "../assets/audio/bgm.mp3";

// Define the background zones with their respective images and positions
const BACKGROUND_ZONES = [
  { name: "portland", start: 0, end: 1250, image: day1 },
  { name: "ogunquit", start: 1250, end: 2500, image: day2 },
  { name: "llbean_and_cruise", start: 2500, end: 3750, image: day3 },
  { name: "mainegardens_edgewater", start: 3750, end: 5000, image: day4 },
  { name: "pemaquid", start: 5000, end: 6250, image: day5 },
  { name: "camden", start: 6250, end: 7500, image: day6 },
  { name: "acadia", start: 7500, end: 8750, image: day7 },
];

export const GameMap: React.FC = () => {
  const [hasStartedMusic, setHasStartedMusic] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [userToggledMusic, setUserToggledMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<null | (typeof PHOTOS)[0]>(
    null
  );
  const openPhotoModal = (photo: (typeof PHOTOS)[0]) => setSelectedPhoto(photo);
  const [carX, setCarX] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  // Auto-play when mounted
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // optional: lower volume
      audioRef.current.play().catch(() => {}); // catch autoplay block
    }
  }, []);

  // This is the state logic
  const [zoneWidth, setZoneWidth] = useState(window.innerWidth);
  const [isMoving, setIsMoving] = useState(false);

  // Recalculate dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setZoneWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Derived values based on current zone width
  const carWidth = zoneWidth * 0.12;
  const halfCarWidth = carWidth / 2;
  const worldWidth = useMemo(
    () => BACKGROUND_ZONES.length * zoneWidth,
    [zoneWidth]
  );

  const stepRight = () => {
    setIsMoving(true);
    clearTimeout((stepRight as any)._timeout);
    (stepRight as any)._timeout = setTimeout(() => setIsMoving(false), 150);
    setCarX((prev) => {
      setDirection("right");
      return Math.min(prev + 20, worldWidth - halfCarWidth);
    });
  };

  const stepLeft = () => {
    setIsMoving(true);
    clearTimeout((stepLeft as any)._timeout);
    (stepLeft as any)._timeout = setTimeout(() => setIsMoving(false), 150);
    setCarX((prev) => {
      setDirection("left");
      return Math.max(prev - 20, halfCarWidth);
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      setIsMoving(true);
      clearTimeout((handleKeyDown as any)._timeout);
      (handleKeyDown as any)._timeout = setTimeout(
        () => setIsMoving(false),
        150
      );
    }

    // ✅ Only play if:
    // - music hasn't started before
    // - user hasn't toggled the music manually
    // - audio is available
    if (!hasStartedMusic && !userToggledMusic && audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.3;
      audio
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((err) => {
          console.warn("Auto-play blocked:", err);
        });
      setHasStartedMusic(true); // mark that we tried once
    }

    // Movement logic
    setCarX((prev) => {
      if (e.key === "ArrowRight") {
        setDirection("right");
        return Math.min(prev + 20, worldWidth - halfCarWidth);
      }
      if (e.key === "ArrowLeft") {
        setDirection("left");
        return Math.max(prev - 20, halfCarWidth);
      }
      return prev;
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasStartedMusic, userToggledMusic, isMusicPlaying]);

  const halfViewport = zoneWidth / 2;

  const cameraOffset =
    carX < halfViewport
      ? 0
      : carX > worldWidth - halfViewport
      ? worldWidth - zoneWidth
      : carX - halfViewport;

  const screenX =
    carX < halfViewport
      ? carX
      : carX > worldWidth - halfViewport
      ? carX - cameraOffset
      : halfViewport;

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#000",
      }}
    >
      {/* World container that scrolls based on car movement */}
      <div
        style={{
          position: "absolute",
          width: `${worldWidth}px`,
          height: "100%",
          transform: `translateX(-${cameraOffset}px)`,
          transition: "transform 0.1s linear",
          display: "flex",
          padding: 0,
          margin: 0,
        }}
      >
        {PHOTOS.map((photo) => {
          const xPos = photo.zoneIndex * zoneWidth + photo.xPercent * zoneWidth;
          const yPos = photo.bottomPercent * window.innerHeight;

          // 🚫 Hide photo until car gets close enough (e.g. 200px before photo)
          const revealDistance = 200;
          const isVisible = carX >= xPos - revealDistance;

          return (
            <img
              key={photo.id}
              src={photo.image}
              alt={photo.caption}
              onClick={() => isVisible && openPhotoModal(photo)}
              style={{
                position: "absolute",
                left: `${xPos}px`,
                bottom: `${yPos}px`,
                width: `${zoneWidth * 0.05}px`,
                height: `${zoneWidth * 0.06}px`,
                objectFit: "cover",
                border: "6px solid white",
                boxShadow: "0 0 10px rgba(0,0,0,0.4)",
                transform: isMoving
                  ? direction === "left"
                    ? "rotate(-6deg)"
                    : "rotate(6deg)"
                  : "rotate(0deg)",
                transition: "transform 0.3s ease",
                cursor: "pointer",
                zIndex: 10,
                opacity: isVisible ? 1 : 0, // 👈 hide until nearby
                pointerEvents: isVisible ? "auto" : "none", // 👈 disable click
              }}
            />
          );
        })}

        {/* Side-by-side background panels */}
        {BACKGROUND_ZONES.map((zone) => (
          <img
            key={zone.name}
            src={zone.image}
            alt={zone.name}
            style={{
              width: `${zoneWidth}px`,
              height: "100%",
              objectFit: "cover",
              flexShrink: 0,
              display: "block",
            }}
          />
        ))}
      </div>

      {selectedPhoto && (
        <PhotoViewer
          image={selectedPhoto.image}
          caption={selectedPhoto.caption}
          onClose={() => setSelectedPhoto(null)}
        />
      )}

      {/* Audio element */}
      <audio ref={audioRef} loop src={bgm} />

      {/* Music toggle button */}
      <button
        onClick={() => {
          if (!audioRef.current) return;

          // 🚫 This is what locks out keypress control
          setUserToggledMusic(true);

          if (isMusicPlaying) {
            audioRef.current.pause();
            setIsMusicPlaying(false);
          } else {
            audioRef.current.volume = 0.3;
            audioRef.current
              .play()
              .then(() => {
                setIsMusicPlaying(true);
              })
              .catch((err) => {
                console.warn("Play failed:", err);
              });
          }
        }}
        style={{
          position: "fixed",
          top: "16px",
          right: "16px",
          zIndex: 1000,
          padding: "10px 14px",
          borderRadius: "8px",
          backgroundColor: "#ffffffaa",
          border: "1px solid #ccc",
          fontWeight: "bold",
          fontFamily: "sans-serif",
          cursor: "pointer",
        }}
      >
        {isMusicPlaying ? "🔊 Music On" : "🔇 Music Off"}
      </button>

      {/* Car stays visually fixed in center logic */}
      <Car screenX={screenX} direction={direction} />

      {/* Mobile touch controls (hidden on large screens via component CSS) */}
      <MobileControls
        onStepLeft={stepLeft}
        onStepRight={stepRight}
        onHoldLeft={stepLeft}
        onHoldRight={stepRight}
      />
    </div>
  );
};
