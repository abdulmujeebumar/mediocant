"use client";

import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 md:px-12">

          {/* Logo */}
          <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 sm:text-sm">
            MEDIOCANT
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-10 text-sm text-zinc-500 md:flex">
            <a href="#" className="transition hover:text-white">
              Philosophy
            </a>

            <a href="#" className="transition hover:text-white">
              Systems
            </a>

            <a href="#" className="transition hover:text-white">
              Projects
            </a>

            <a href="#" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="flex flex-col gap-1 md:hidden"
          >
            <span className="h-[1px] w-5 bg-zinc-400" />
            <span className="h-[1px] w-5 bg-zinc-400" />
            <span className="h-[1px] w-5 bg-zinc-400" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black px-8 py-10 text-white">

          {/* Top Bar */}
          <div className="flex items-center justify-between">

            <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">
              MEDIOCANT
            </div>

            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-sm text-zinc-500"
            >
              Close
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="mt-24 flex flex-col gap-8 text-3xl font-medium">

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 transition hover:text-white"
            >
              Philosophy
            </a>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 transition hover:text-white"
            >
              Systems
            </a>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#"
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 transition hover:text-white"
            >
              Contact
            </a>

          </nav>
        </div>
      )}
    </>
  );
}