"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useI18n } from "@/i18n/context";

export default function NotFound() {
  const { t } = useI18n();

  return (
    <>
      <Navbar />
      <div className="bg-pattern" aria-hidden="true" />
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-4xl tracking-[0.5em] text-amber-500 mb-6">
          {t.notFound.code}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-white tracking-tight mb-6 max-w-3xl">
          {t.notFound.heading}
        </h1>
        <p className="text-sm text-neutral-400 mb-10 max-w-md">
          {t.notFound.description}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.15em] uppercase text-amber-500 hover:text-white transition-colors duration-300"
        >
          <span className="text-lg">&larr;</span>
          {t.notFound.backHome}
        </Link>
      </main>
    </>
  );
}
