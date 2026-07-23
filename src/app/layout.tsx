import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { I18nProvider } from "@/i18n/context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedro Fonseca | Front End Developer & Sports Illustrator",
  description:
    "Portfolio of Pedro Fonseca — front end developer with 6+ years of experience, sports illustrator with 700+ clients, and tech teacher. Based in Portugal, working across Europe.",
  keywords: [
    "Pedro Fonseca",
    "front end developer",
    "react developer",
    "typescript",
    "next.js",
    "portfolio",
    "sports illustrator",
    "football illustration",
    "PEDRO26",
    "web developer Portugal",
    "Futurice",
    "freelance illustrator",
  ],
  authors: [{ name: "Pedro Fonseca", url: "https://pedrofonseca.dev" }],
  creator: "Pedro Fonseca",
  metadataBase: new URL("https://pedrofonseca.dev"),
  openGraph: {
    title: "Pedro Fonseca | Front End Developer & Sports Illustrator",
    description:
      "Front end developer with 6+ years of consulting experience across Europe. Sports illustrator with 700+ clients. Teacher. Based in Portugal.",
    url: "https://pedrofonseca.dev",
    siteName: "Pedro Fonseca",
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_PT",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Fonseca | Front End Developer & Sports Illustrator",
    description:
      "Front end developer, sports illustrator, and teacher. Building digital experiences with tech, art, and feeling.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://pedrofonseca.dev",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icons/icon-192x192.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Pedro Fonseca",
      url: "https://pedrofonseca.dev",
      inLanguage: ["en", "pt"],
    },
    {
      "@type": "Person",
      name: "Pedro Fonseca",
      url: "https://pedrofonseca.dev",
      jobTitle: "Front End Developer",
      knowsAbout: [
        "React",
        "TypeScript",
        "Next.js",
        "Front End Development",
        "Sports Illustration",
      ],
      sameAs: [
        "https://linkedin.com/in/pedromlfonseca",
        "https://github.com/PMLF",
        "https://pedro26.pt",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Futurice",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
