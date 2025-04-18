"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-gradient-to-b from-cyan-200 to-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled
            ? "pt-2 pb-2"
            : "pt-4 pb-12 sm:pt-6 sm:pb-16 md:pt-6 md:pb-20 lg:pt-8 lg:pb-32"
        }`}
      >
        <nav className="flex justify-between items-center">
          <div className="w-1/4">
            <Link
              href="/"
              className="text-2xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent"
            >
              Cypherex
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex justify-center space-x-8 xl:space-x-16 2xl:space-x-24 w-1/2">
            <Link
              href="/contact"
              className="text-lg xl:text-2xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Contact Us
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg xl:text-2xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Github
            </Link>
            <Link
              href="/docs"
              className="text-lg xl:text-2xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Documentation
            </Link>
          </div>

          <div className="hidden lg:block w-1/4 text-right">
            <Link
              href="/coming-soon"
              className="text-lg xl:text-2xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Coming Soon
            </Link>
          </div>

          {/* Custom Hamburger Menu Button */}
          <div
            className="w-[40px] h-[40px] flex flex-col justify-center items-center cursor-pointer lg:hidden transition-all duration-300 z-50"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div
              className={`bg-purple-500 w-[18px] h-[2px] transition-all duration-300 ${
                isMenuOpen
                  ? "-rotate-45 translate-y-[8px] delay-200"
                  : "rotate-0 translate-y-0"
              }`}
            ></div>
            <div
              className={`bg-purple-500 h-[2px] flex justify-center items-center my-[6px] transition-all duration-300 ${
                isMenuOpen ? "w-0" : "w-[18px] delay-300"
              }`}
            ></div>
            <div
              className={`bg-purple-500 w-[18px] h-[2px] transition-all duration-300 ${
                isMenuOpen
                  ? "rotate-45 -translate-y-[8px] delay-200"
                  : "rotate-0 translate-y-0"
              }`}
            ></div>
          </div>
        </nav>

        {/* Mobile Navigation with Animation */}
        <div
          className={`lg:hidden fixed left-0 right-0 bg-white bg-opacity-95 shadow-lg transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{
            top: isScrolled ? "48px" : "calc(4rem + 1rem)",
          }}
        >
          <div className="py-4 px-4 space-y-4">
            <Link
              href="/contact"
              className="block py-2 text-xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Github
            </Link>
            <Link
              href="/docs"
              className="block py-2 text-xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Documentation
            </Link>
            <Link
              href="/coming-soon"
              className="block py-2 text-xl font-light bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent hover:bg-gray-100 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Coming Soon
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
