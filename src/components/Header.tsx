import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { label: "Education", href: "#education" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Goals", href: "#goals" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-white/95 via-blue-50/95 to-purple-50/95 backdrop-blur border-b-2 border-blue-300/50 shadow-lg">
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-5">
          <a
            href="#hero"
            className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-sans hover:opacity-80 transition-opacity"
            style={{ fontFamily: "Inter, system-ui, sans-serif" }}
          >
            Christopher Di Prima
          </a>

          {/* Desktop & Mobile - Contact Button and Menu */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact
            </a>

            {/* Menu Button - Now for both mobile and desktop */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Navigation Menu - Full Page Slide Out (Mobile & Desktop) */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-out Menu */}
        <div
          className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-gradient-to-br from-white via-blue-50 to-purple-50 shadow-2xl transform transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex justify-between items-center px-6 py-5 border-b-2 border-blue-300/50">
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Menu
            </h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full hover:bg-blue-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col py-4">
            {navLinks.map((link, index) => (
              <li
                key={link.href}
                className={`transform transition-all duration-300 ease-out ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-6 py-5 text-lg text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 font-semibold transition-all duration-200 border-b border-blue-100/50 last:border-b-0 active:scale-95"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
