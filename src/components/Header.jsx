// components/Header.js
"use client";
import Link from "next/link";
import { useState } from "react";


export default function Header({ logo, ctaLabel, ctaUrl }) {
  const [open, setOpen] = useState(false);
  

  const menu = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--dark-bg)] shadow-md px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3">
        {/* Logo */}
        <a href="/">
          {logo ? (
            <div className="flex gap-4">
            <img src={logo} alt="Brew & Beyond" className="h-10 w-auto" />
            <h2 className="font-bold text-4xl text-[var(--light-text)]">Brew & Beyond</h2>
            </div>
          ) : (
            <span className="font-bold text-xl text-[var(--light-text)]">Brew & Beyond</span>
          )}
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-[var(--secondary-accent)] transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[var(--light-text)] focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[var(--accent)]">
          {menu.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-3 text-[var(--light-text)] hover:text-[var(--dark-text)] border-b"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
