"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";
import { useI18n } from "@/i18n/context";

function getYearsOfExperience(): number {
  const start = new Date(2020, 1, 1);
  const now = new Date();
  let years = now.getFullYear() - start.getFullYear();
  if (now.getMonth() < start.getMonth()) years--;
  return years;
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="border-l border-white/10 pl-6"
    >
      <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">{value}</p>
      <p className="text-[11px] tracking-[0.25em] uppercase text-white mt-3">{label}</p>
    </motion.div>
  );
}

export default function About() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const years = useMemo(() => getYearsOfExperience(), []);
  const bioText = t.about.bio.replace("{years}", String(years)).replace("{artYears}", String(years-3));

  return (
    <section id="about" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-6">
            {t.about.title}
          </p>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.15] max-w-3xl mb-6">
            {bioText}
          </h2>

          <div className="max-w-2xl mb-20">
            <p className="text-sm sm:text-base text-white leading-[1.8]">
              {t.about.philosophyText}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-3 gap-8">
          <StatCard value={`${years}+`} label={t.about.stats.years} delay={0} />
          <StatCard value="10+" label={t.about.stats.clients} delay={0.1} />
          <StatCard value="8" label={t.about.stats.sectors} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
