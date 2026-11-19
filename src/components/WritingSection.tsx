"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useI18n } from "@/i18n/context";

function ArticleCard({
  item,
  hasLink,
}: {
  item: { name: string; description: string; publisher: string; date: string; language?: string; cta?: string; url?: string };
  hasLink: boolean;
}) {
  const content = (
    <>
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <span className="text-[11px] tracking-[0.3em] uppercase text-amber-500 font-medium">
          {item.publisher}
        </span>
        <span className="text-[11px] text-neutral-500">{item.date}</span>
        {item.language && (
          <span className="text-[10px] tracking-wider px-2 py-0.5 bg-amber-500/[0.08] border border-amber-500/20 text-amber-200 rounded-sm">
            {item.language}
          </span>
        )}
      </div>
      <h3 className={`text-base font-bold text-white mb-3 ${hasLink ? "group-hover:text-amber-500 transition-colors duration-500" : ""}`}>
        {item.name}
      </h3>
      <p className="text-sm text-neutral-300 leading-[1.8] mb-5">
        {item.description}
      </p>
      {hasLink && item.cta && (
        <span className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.1em] uppercase text-amber-500 group-hover:text-white transition-colors duration-300">
          {item.cta}
          <span>&rarr;</span>
        </span>
      )}
    </>
  );

  if (hasLink && item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-xl bg-white/[0.04] border border-white/[0.08] p-6 sm:p-8 hover:border-amber-500/20 transition-colors duration-500"
      >
        {content}
      </a>
    );
  }

  return (
    <div className="rounded-xl bg-white/[0.04] border border-white/[0.08] p-6 sm:p-8">
      {content}
    </div>
  );
}

export default function WritingSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    { ...t.writing.items.kwanOpenSource, hasLink: true },
    { ...t.writing.items.kwanGithub, hasLink: true },
    { ...t.writing.items.ajo, hasLink: false },
  ];

  return (
    <section id="writing" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-6">
            {t.writing.title}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-8">
            {t.writing.subtitle}
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 leading-[1.8] max-w-3xl mb-16">
            {t.writing.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ArticleCard key={item.name} item={item} hasLink={item.hasLink} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
