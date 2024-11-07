"use client"
export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4 mt-8 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} My Website. All rights reserved.
      </p>
      <p className="text-sm">
        <a href="/contact" className="text-blue-400 hover:underline">Contact</a>
      </p>
    </footer>
  );
};
