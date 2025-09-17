// components/Header.js
"use client";
import { useState } from "react";


export default function Header({ logo, ctaLabel, ctaUrl }) {
  const [open, setOpen] = useState(false);
  

  const menu = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--accent)] shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="/">
          {logo ? (
            <div className="flex gap-4">
            <img src={logo} alt="Brew & Beyond" className="h-10 w-auto" />
            <h2 className="font-bold text-4xl">Brew & Beyond</h2>
            </div>
          ) : (
            <span className="font-bold text-xl">Brew & Beyond</span>
          )}
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white hover:text-green-400"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          {menu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
