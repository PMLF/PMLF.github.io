"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/context";

export default function Navbar() {
  const { t, locale, toggleLocale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#work", label: t.nav.work },
    { href: "/#experience", label: t.nav.experience },
    { href: "/#art", label: t.nav.art },
    { href: "/#teaching", label: t.nav.teaching },
    { href: "/#beyond", label: t.nav.beyond },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-neutral-950/80 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="group">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-white group-hover:text-amber-500 transition-colors duration-300">
            PF
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] font-medium tracking-[0.25em] uppercase text-white hover:text-amber-500 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleLocale}
            className="text-[11px] font-bold tracking-[0.25em] text-amber-500 hover:text-amber-400 transition-colors duration-300"
          >
            {locale === "en" ? "PT" : "EN"}
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-white transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3.5px]" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-white transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""}`} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase text-white hover:text-amber-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { toggleLocale(); setMenuOpen(false); }}
                className="text-sm font-bold tracking-[0.2em] text-amber-500 hover:text-amber-400 transition-colors self-start"
              >
                {locale === "en" ? "PT" : "EN"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
