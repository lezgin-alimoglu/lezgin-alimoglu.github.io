import React from "react";
import Link from "next/link";
import MatrixRain from "./components/MatrixRain"; // Import the MatrixRain component

const Matrix404 = () => {
  return (
    <div className="relative h-screen bg-black text-green-500 font-mono overflow-hidden">
      {/* Matrix Rain Effect */}
      <MatrixRain />

      {/* Content */}
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <div className="text-center">
          <h1 className="text-6xl mb-4">404</h1>
          <h2 className="text-2xl mb-8">The Matrix has encountered an error.</h2>
          <p className="mb-4 text-lg">You are trying to access a page that doesn&apos;t exist.</p>
          <Link href="/" className="text-lg underline hover:text-green-300">
            Return to the real world
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Matrix404;
