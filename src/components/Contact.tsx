"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";

const links = [
  { label: "Email", href: "mailto:pedro@pedro26.pt", display: "pedro@pedro26.pt" },
  { label: "LinkedIn", href: "https://linkedin.com/in/pedromlfonseca", display: "pedromlfonseca" },
  { label: "GitHub", href: "https://github.com/PMLF", display: "PMLF" },
];

export default function Contact() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="relative z-10 py-40 sm:py-52 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-8">
            {t.contact.title}
          </p>

          <h2 className="text-5xl sm:text-7xl md:text-8xl font-black text-white tracking-tight mb-20 leading-[0.9]">
            {t.contact.cta}
          </h2>

          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                className="group"
              >
                <p className="text-[11px] tracking-[0.4em] uppercase text-amber-500 mb-2">
                  {link.label}
                </p>
                <p className="text-sm font-medium text-white group-hover:text-amber-500 transition-colors duration-500">
                  {link.display}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
