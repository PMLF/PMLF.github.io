"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import en from "./en.json";
import pt from "./pt.json";

type Locale = "en" | "pt";
type Translations = typeof en;

const translations: Record<Locale, Translations> = { en, pt };

interface I18nContextType {
  locale: Locale;
  t: Translations;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType | null>(null);

function detectLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem("locale") as Locale | null;
  if (stored && translations[stored]) return stored;
  const browserLang = navigator.language.slice(0, 2);
  return browserLang === "pt" ? "pt" : "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const detected = detectLocale();
    document.documentElement.lang = detected;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- server renders "en" for hydration, then client detects actual locale
    setLocale(detected);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale((prev) => {
      const next = prev === "en" ? "pt" : "en";
      localStorage.setItem("locale", next);
      document.documentElement.lang = next;
      return next;
    });
  }, []);

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
