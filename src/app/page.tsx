import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Pedro26 from "@/components/Pedro26";
import TeachingSection from "@/components/TeachingSection";
import BeyondTheCode from "@/components/BeyondTheCode";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-pattern" aria-hidden="true" />
      <main className="relative">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Pedro26 />
        <TeachingSection />
        <BeyondTheCode />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
