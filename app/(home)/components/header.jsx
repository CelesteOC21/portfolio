"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "experience", "contact"];
    const observers = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.3, rootMargin: "-80px 0px 0px 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="glass-nav fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="#home"
            className="text-xl font-bold text-white/90 hover:text-white transition-colors"
          >
            MyPortfolio
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="lg:hidden text-gray-300 hover:text-white focus:outline-none p-2 rounded-md hover:bg-white/5 transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-white/5 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.href.replace("#", "")
                    ? "text-white bg-white/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
