"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useI18n } from "@/i18n/context";
import Lightbox from "./Lightbox";

const ALL_IMAGES = [
  "/images/p26/csc.jpeg",
  "/images/p26/lucia.jpeg",
  "/images/p26/portugal.jpeg",
  "/images/p26/scut.jpeg",
  "/images/p26/vala.jpeg",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function useRotatingImages(count: number, paused: boolean) {
  const initial = ALL_IMAGES.slice(0, count);
  const [slots, setSlots] = useState<string[]>(initial);
  const slotsRef = useRef<string[]>(initial);
  const initialized = useRef(false);

  useEffect(() => {
    if (paused) return;

    if (!initialized.current) {
      const shuffled = shuffle(ALL_IMAGES);
      slotsRef.current = shuffled.slice(0, count);
      initialized.current = true;
    }

    const offsets = [0, 3000, 6000];
    const timers: NodeJS.Timeout[] = [];

    offsets.forEach((offset, slotIdx) => {
      const t = setTimeout(() => {
        const interval = setInterval(() => {
          const current = [...slotsRef.current];
          const available = ALL_IMAGES.filter((img) => !current.includes(img));
          current[slotIdx] =
            available[Math.floor(Math.random() * available.length)];
          slotsRef.current = current;
          setSlots([...current]);
        }, 9000);
        timers.push(interval);
      }, offset);
      timers.push(t);
    });

    return () => timers.forEach(clearTimeout);
  }, [count, paused]);

  return slots;
}

export default function Pedro26() {
  const { t } = useI18n();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const slots = useRotatingImages(3, lightboxSrc !== null);

  return (
    <section id="art" className="relative z-10 py-32 sm:py-40 px-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/[0.06] p-8 sm:p-12 md:p-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[11px] tracking-[0.5em] uppercase text-amber-500 mb-6">
            {t.pedro26.title}
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-8">
            {t.pedro26.subtitle}
          </h2>

          <p className="text-sm sm:text-base text-white leading-[1.8] max-w-3xl mb-12">
            {t.pedro26.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            {slots.map((src, i) => (
              <button
                key={i}
                type="button"
                className="aspect-[4/3] rounded-xl bg-neutral-800 border border-white/10 overflow-hidden relative cursor-zoom-in"
                onClick={() => setLightboxSrc(src)}
              >
                <Image
                  key={src}
                  src={src}
                  alt={`PEDRO26 illustration ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover animate-[fadeIn_0.8s_ease-out]"
                />
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-3">
                {t.pedro26.commissions}
              </h3>
              <p className="text-sm text-white leading-[1.8]">
                {t.pedro26.commissionsDesc}
              </p>
            </div>
            <div className="rounded-xl bg-white/[0.04] border border-white/10 p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-3">
                {t.pedro26.merch}
              </h3>
              <p className="text-sm text-white leading-[1.8]">
                {t.pedro26.merchDesc}
              </p>
            </div>
          </div>

          <a
            href={t.pedro26.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase text-amber-500 hover:text-white transition-colors duration-300"
          >
            {t.pedro26.cta}
            <span className="text-lg">&rarr;</span>
          </a>
        </motion.div>
      </div>

      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt="PEDRO26 illustration"
          onClose={() => setLightboxSrc(null)}
        />
      )}
    </section>
  );
}
