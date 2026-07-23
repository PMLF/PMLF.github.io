"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/i18n/context";

export default function Footer() {
  const { t } = useI18n();
  const scrollText = `${t.footer.scroll} ${t.footer.scroll} ${t.footer.scroll} `;

  return (
    <footer className="relative z-10 border-t border-white/[0.06] overflow-hidden">
      <div className="py-8 overflow-hidden">
        <motion.p
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="text-[11px] tracking-[0.6em] uppercase text-white whitespace-nowrap font-bold"
        >
          {scrollText}
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06]">
        <p className="text-[11px] tracking-wider text-white">
          &copy; {new Date().getFullYear()} Pedro Fonseca. {t.footer.rights}
        </p>
        <p className="text-[11px] tracking-wider text-white">
          {t.footer.builtWith}
        </p>
      </div>
    </footer>
  );
}
