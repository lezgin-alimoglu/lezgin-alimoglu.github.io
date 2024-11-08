"use client";

import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <section className="text-center p-6 max-w-2xl">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Welcome to My Website</h1>
        <p className="text-lg mb-6">
          Hello! This is my personal website where you can learn more about me, check out my projects, read my blog, and get in touch.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/about" className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">
            About Me
          </Link>
          <Link href="/projects" className="px-4 py-2 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">
            Projects
          </Link>
          <Link href="/blog" className="px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition">
            Blog
          </Link>
          <Link href="/contact" className="px-4 py-2 bg-red-600 text-white rounded-md shadow hover:bg-red-700 transition">
            Contact
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
