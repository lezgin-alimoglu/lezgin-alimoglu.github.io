"use client";
import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4 mt-8 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </p>
      <p className="text-sm">
        <a href="/contact" className="text-blue-400 hover:underline">Contact</a>
        <span className="ml-4">Lezgin Alimoglu</span>
      </p>
      <p className="text-sm flex justify-center items-center gap-4 mt-2">
        {/* GitHub Links */}
        <a
          href="https://github.com/lezgin-alimoglu"
          className="text-blue-400 hover:underline flex items-center gap-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </p>
    </footer>
  );
};
