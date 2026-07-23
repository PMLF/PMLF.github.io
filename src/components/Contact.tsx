"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
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
    <section id="contact" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-6">
            {t.contact.title}
          </p>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 mb-16">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight flex-1">
              {t.contact.cta}
            </h2>

            <div className="flex-shrink-0">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-neutral-800 border border-white/10 overflow-hidden">
                <Image
                  src="/images/connect.png"
                  alt="Pedro Fonseca"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

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
