"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";

function AreaCard({
  index,
  number,
  name,
  description,
  isLast,
}: {
  index: number;
  number: string;
  name: string;
  description: string;
  isLast: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
      className={`group py-10 first:border-t border-white/10 ${isLast ? "" : "border-b"}`}
    >
      <div className="flex items-start gap-6 sm:gap-10">
        <span className="text-[11px] tracking-[0.3em] text-amber-500 font-mono mt-2 shrink-0">
          {number}
        </span>
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight mb-4 group-hover:text-amber-500 transition-colors duration-500">
            {name}
          </h3>
          <p className="text-sm text-white leading-[1.8] max-w-xl">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const areas = [
    { number: "01", ...t.work.software },
    { number: "02", ...t.work.illustrations },
    { number: "03", ...t.work.teaching },
  ];

  return (
    <section id="work" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-6">
            {t.work.title}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            {t.work.subtitle}
          </h2>
        </motion.div>

        <div>
          {areas.map((area, i) => (
            <AreaCard key={area.number} index={i} isLast={i === areas.length - 1} {...area} />
          ))}
        </div>
      </div>
    </section>
  );
}
