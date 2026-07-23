"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";

const ICONS: Record<string, string> = {
  football: "⚽",
  travel: "✈️",
  sports: "🏋️",
  people: "❤️",
};

const ITEM_KEYS = ["football", "travel", "sports", "people"] as const;

export default function BeyondTheCode() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="beyond" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-6">
            {t.beyondthecode.title}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            {t.beyondthecode.subtitle}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ITEM_KEYS.map((key, i) => {
            const item = t.beyondthecode.items[key];
            return (
              <BeyondTheCodeCard
                key={key}
                icon={ICONS[key]}
                name={item.name}
                description={item.description}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BeyondTheCodeCard({
  icon,
  name,
  description,
  index,
}: {
  icon: string;
  name: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group rounded-xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.08] transition-colors duration-500"
    >
      <span className="text-2xl mb-4 block">{icon}</span>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors duration-500">
        {name}
      </h3>
      <p className="text-sm text-white leading-[1.8]">
        {description}
      </p>
    </motion.div>
  );
}
