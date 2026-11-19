"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";

function GoalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9 text-amber-500 btc-icon-football"
    >
      <rect x="1" y="8" width="22" height="13" rx="0" fill="currentColor" fillOpacity="0.06" stroke="none" />
      <line x1="1" y1="8" x2="1" y2="21" strokeWidth="2.5" />
      <line x1="23" y1="8" x2="23" y2="21" strokeWidth="2.5" />
      <line x1="1" y1="8" x2="23" y2="8" strokeWidth="2.5" />
      <circle cx="12" cy="16" r="3.5" fill="currentColor" fillOpacity="0.3" strokeWidth="1" className="btc-ball" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9 text-amber-500 btc-icon-plane"
    >
      <g transform="rotate(-35 12 12) scale(-1,1) translate(-24,0)">
        <path d="M2 14h5l3-4h4l-1 4h5l2-2v1l-2 2 2 2v1l-2-2h-5l1 4h-4l-3-4H2l-1-1z" fill="currentColor" fillOpacity="0.15" />
      </g>
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9 text-amber-500 btc-icon-dumbbell"
    >
      <line x1="6" y1="12" x2="18" y2="12" strokeWidth="2" />
      <rect x="2" y="8" width="4" height="8" rx="1" fill="currentColor" fillOpacity="0.15" />
      <rect x="18" y="8" width="4" height="8" rx="1" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-9 h-9 text-amber-500 btc-icon-heart"
    >
      <path d="M12 21C12 21 3 14 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 14 12 21 12 21Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
  );
}

const ICON_COMPONENTS: Record<string, React.ComponentType> = {
  football: GoalIcon,
  travel: PlaneIcon,
  sports: DumbbellIcon,
  people: HeartIcon,
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
                iconKey={key}
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
  iconKey,
  name,
  description,
  index,
}: {
  iconKey: string;
  name: string;
  description: string;
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const Icon = ICON_COMPONENTS[iconKey];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="group cursor-pointer rounded-xl bg-white/[0.04] border border-white/10 p-6 sm:p-8 hover:bg-white/[0.08] transition-colors duration-500"
    >
      <div className="mb-4">
        <Icon />
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors duration-500">
        {name}
      </h3>
      <p className="text-sm text-white leading-[1.8]">
        {description}
      </p>
    </motion.div>
  );
}
