"use client";

import React, { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button after 300px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? "opacity-100" : "opacity-0"
      } fixed bottom-6 right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg transition-opacity duration-300 transform hover:scale-110`}
      style={{ display: showButton ? "block" : "none" }}
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
