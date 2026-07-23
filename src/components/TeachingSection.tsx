"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/context";
import Lightbox from "./Lightbox";

const TEACHING_IMAGES = [
  { src: "/images/teaching/ardc.jpeg", alt: "As Raparigas do Código" },
  { src: "/images/teaching/edit.jpeg", alt: "EDIT — Disruptive Digital Education" },
];

export default function TeachingSection() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="teaching" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-6">
            {t.teachingSection.title}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-8">
            {t.teachingSection.subtitle}
          </h2>

          <p className="text-sm sm:text-base text-white leading-[1.8] max-w-3xl mb-12">
            {t.teachingSection.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6 sm:p-8">
              <button
                type="button"
                className="aspect-[16/9] w-full rounded-lg bg-neutral-800 border border-white/10 overflow-hidden mb-5 cursor-zoom-in"
                onClick={() => setLightboxSrc(TEACHING_IMAGES[0].src)}
              >
                <Image
                  src={TEACHING_IMAGES[0].src}
                  alt={TEACHING_IMAGES[0].alt}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                />
              </button>
              <h3 className="text-lg font-bold text-white mb-3">
                {t.teachingSection.raparigas.name}
              </h3>
              <p className="text-sm text-white leading-[1.8]">
                {t.teachingSection.raparigas.description}
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6 sm:p-8">
              <button
                type="button"
                className="aspect-[16/9] w-full rounded-lg bg-neutral-800 border border-white/10 overflow-hidden mb-5 cursor-zoom-in"
                onClick={() => setLightboxSrc(TEACHING_IMAGES[1].src)}
              >
                <Image
                  src={TEACHING_IMAGES[1].src}
                  alt={TEACHING_IMAGES[1].alt}
                  width={600}
                  height={338}
                  className="w-full h-full object-cover"
                />
              </button>
              <h3 className="text-lg font-bold text-white mb-3">
                {t.teachingSection.edit.name}
              </h3>
              <p className="text-sm text-white leading-[1.8]">
                {t.teachingSection.edit.description}
              </p>
            </div>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-white mb-3">
              {t.teachingSection.talk.title}
            </h3>
            <p className="text-sm text-white leading-[1.8] mb-5">
              {t.teachingSection.talk.description}
            </p>
            <div className="aspect-video rounded-lg overflow-hidden border border-white/10">
              <iframe
                src="https://www.youtube-nocookie.com/embed/degc0KonSaQ"
                title={t.teachingSection.talk.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={
            TEACHING_IMAGES.find((img) => img.src === lightboxSrc)?.alt ??
            "Teaching"
          }
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </section>
  );
}
