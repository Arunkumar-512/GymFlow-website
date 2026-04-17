"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-[100] transition-all duration-500 ease-in-out px-4 ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 px-6 py-3 rounded-2xl border ${
            scrolled
              ? "bg-[#0A0A0A]/70 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* LOGO */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6A00] rounded-lg flex items-center justify-center rotate-3">
              <span className="font-black text-black italic text-lg">G</span>
            </div>
            <h1 className="text-xl font-black italic tracking-tighter uppercase">
              Gym<span className="text-[#FF6A00]">Flow</span>
            </h1>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 hover:text-[#FF6A00] transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#FF6A00] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-[#FF6A00] hover:text-white transition-all active:scale-95"
            >
              Join the Team
            </a>
          </div>

          {/* MOBILE BURGER */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`w-6 h-[2px] bg-white transition-all ${
                mobileMenuOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-white transition-all ${
                mobileMenuOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] bg-[#050505] pt-32 px-10 flex flex-col gap-8 md:hidden"
          >
             {/* Background Text Decor */}
            <div className="absolute top-20 right-[-10%] text-[20vw] font-black text-white/[0.03] rotate-90 pointer-events-none">
              MENU
            </div>

            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-5xl font-black italic uppercase tracking-tighter text-zinc-800 hover:text-[#FF6A00] transition-colors"
              >
                {link.name}
              </motion.a>
            ))}

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-10 w-full py-5 bg-[#FF6A00] text-black text-center font-black uppercase tracking-widest rounded-2xl"
            >
              Get Started Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}