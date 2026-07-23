"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/i18n/context";
import Image from "next/image";

const INTERVAL = 3000;
const SLOT_H = 44;

export default function Hero() {
  const { t } = useI18n();
  const roles = [t.roles.frontend, t.roles.teacher, t.roles.founder, t.roles.illustrator];
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % roles.length), INTERVAL);
    return () => clearInterval(id);
  }, [roles.length]);

  const prev = (active - 1 + roles.length) % roles.length;
  const next = (active + 1) % roles.length;

  const items = [
    { idx: prev, slot: -1 },
    { idx: active, slot: 0 },
    { idx: next, slot: 1 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 px-6 w-full max-w-6xl mx-auto">
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-xs sm:text-sm tracking-[0.4em] uppercase text-white mb-6"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white leading-[0.85]"
          >
            PEDRO
            <br />
            <span className="text-amber-500">FONSECA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-14 relative overflow-hidden"
            style={{ height: SLOT_H * 3 }}
          >
            <AnimatePresence initial={false}>
              {items.map(({ idx, slot }) => {
                const isActive = slot === 0;
                return (
                  <motion.p
                    key={idx}
                    initial={{ y: (slot + 2) * SLOT_H, opacity: 0 }}
                    animate={{
                      y: (slot + 1) * SLOT_H,
                      opacity: isActive ? 1 : 0.35,
                      fontSize: isActive ? 22 : 14,
                      color: isActive ? "#ffffff" : "#a3a3a3",
                    }}
                    exit={{ y: (slot - 1) * SLOT_H, opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute left-0 right-0 text-center lg:text-left whitespace-nowrap"
                    style={{
                      fontWeight: isActive ? 700 : 400,
                      lineHeight: `${SLOT_H}px`,
                    }}
                  >
                    {roles[idx]}
                  </motion.p>
                );
              })}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-8"
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-white hover:text-amber-500 transition-colors duration-500"
            >
              <motion.span
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                ↓
              </motion.span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
            <Image
              src="/images/hero.png"
              alt="Pedro Fonseca"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
