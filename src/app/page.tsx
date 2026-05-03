"use client";

import { useEffect } from "react";
import { Element } from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";

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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <Element name="Home">
        <Hero />
      </Element>

      <Element name="About">
        <About />
      </Element>

      <Element name="Specializations">
        <Specializations />
      </Element>

      <Element name="Experience">
        <Experience />
      </Element>

      <Element name="Projects">
        <Projects />
      </Element>

      <Element name="Insights">
        <Insights />
      </Element>

      <Element name="Contact">
        <ContactSection />
      </Element>

      <Footer />
    </>
  );
}