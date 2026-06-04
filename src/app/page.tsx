import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Insights from "@/components/Insights";
import ContactSection from '@/components/Contact';
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Hero />
      <About />
      <Specializations />
      <Experience />
      <Projects />
      <Insights />
      <ContactSection />
      <Footer />
    </>
  );
}