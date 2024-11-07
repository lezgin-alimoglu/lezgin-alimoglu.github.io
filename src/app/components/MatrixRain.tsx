"use client";

import React, { useState, useEffect, useRef } from "react";


// Matrix Rain Component
const MatrixRain = () => {
  const [columns, setColumns] = useState<number>(30); // Number of columns for the rain
  const [isClient, setIsClient] = useState(false); // State to check if we are on the client
  const matrixRef = useRef<HTMLDivElement>(null); // Reference to the matrix container

  useEffect(() => {
    setIsClient(true); // Set to true once the component is rendered on the client

    const handleResize = () => {
      setColumns(Math.floor(window.innerWidth / 30)); // Dynamically adjust number of columns based on screen width
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set initial number of columns

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const generateRandomCharacter = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  const rainEffect = () => {
    if (!matrixRef.current) return;

    const rainColumns = matrixRef.current.querySelectorAll(".matrix-rain");
    rainColumns.forEach((column: any, index: number) => {
      const spans = column.querySelectorAll("span");
      spans.forEach((span: any, idx: number) => {
        span.style.transform = `translateY(${(idx * 30)}px)`; // Adjust animation
      });
    });

    requestAnimationFrame(rainEffect); // Continue the animation with requestAnimationFrame
  };

  useEffect(() => {
    if (isClient) {
      requestAnimationFrame(rainEffect); // Start the animation loop after mounting the component
    }
  }, [isClient]);

  if (!isClient) {
    return null;
  }

  const createMatrixRain = () => {
    const rain = [];
    for (let i = 0; i < columns; i++) {
      rain.push(
        <div key={i} className="matrix-rain">
          {[...Array(15)].map((_, index) => (
            <span
              key={index}
              style={
                {
                  "--i": Math.random() * 30, // Randomize animation delay for each character
                } as React.CSSProperties
              }
            >
              {generateRandomCharacter()}
            </span>
          ))}
        </div>
      );
    }
    return rain;
  };

  return (
    <div className="matrix-container flex justify-center items-center absolute inset-0 overflow-hidden" ref={matrixRef}>
      {createMatrixRain()}
    </div>
  );
};

export default MatrixRain;
