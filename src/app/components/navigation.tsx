"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname(); // Get the current path

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Me" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-900 text-white p-3 rounded-lg shadow-md flex justify-center space-x-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300

            ${pathname === item.href
              ? "bg-blue-600 text-white"
              : "text-gray-300 hover:bg-blue-500 hover:text-white"
            }`}
            style={{
                boxShadow: "none", // Remove shadow
                outline: "none",   // Remove outline
                border: "none"     // Remove border if necessary
            }}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};
