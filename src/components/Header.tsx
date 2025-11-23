import React from "react";

const navLinks = [
  { label: "Main", href: "#main" },
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Goals", href: "#goals" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header: React.FC = () => (
  <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200 shadow-sm">
    <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
      <a
        href="#hero"
        className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-700 font-sans hover:opacity-80 transition-opacity"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        Christopher Di Prima
      </a>
      <ul className="hidden md:flex items-center gap-7">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1 rounded"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile nav (optional: can add hamburger menu here) */}
    </nav>
  </header>
);

export default Header;
