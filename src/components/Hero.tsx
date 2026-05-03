"use client";

import { Link } from 'react-scroll';
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { PiBrainLight } from "react-icons/pi";
import { LuDownload } from "react-icons/lu";
import pic from "./../../public/mesum.png";

export default function Hero() {
  return (
    <div className="bg-[#050505] lg:h-screen min-h-screen text-white overflow-hidden relative flex items-center pt-16">
      {/* AI-Inspired Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#F5D76E] opacity-[0.04] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[5%] right-[-5%] w-[35%] h-[35%] bg-[#F5D76E] opacity-[0.03] rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl md:text-6xl font-light mb-2 tracking-tight text-white">
              Hi, I’m <span className="font-bold">Mesum <span className="text-[#F5D76E]">Ali</span></span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F5D76E] via-[#F5D76E] to-[#E5E5E5] mb-6">
              Full Stack & AI Developer
            </h2>

            <p className="max-w-xl text-base text-[#E5E5E5]/70 mb-8 leading-relaxed font-light">
              Architecting intelligent web systems and autonomous business architectures. Expert in bridging the gap between LLMs and production-ready software.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="200">
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="bg-[#F5D76E] hover:bg-[#d4b74e] text-black px-10 py-3.5 rounded-full font-bold text-sm transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F5D76E]/20 cursor-pointer flex items-center justify-center"
              >
                View Projects
              </Link>
              <Link
                to="Contact"
                smooth={true}
                duration={500}
                offset={-80}
                className="group px-10 py-3.5 rounded-full font-bold text-sm border-2 border-white/10 hover:border-[#F5D76E]/40 text-[#E5E5E5] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Get in Touch</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[#F5D76E] group-hover:animate-ping"></div>
              </Link>
            </div>

            {/* Social Integration */}
            <div className="mt-10 flex flex-wrap lg:justify-start justify-center items-center gap-6" data-aos="fade-up" data-aos-delay="400">
              {[
                { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/mesumali-dev/", label: "LinkedIn" },
                { icon: <FaGithub size={20} />, url: "https://github.com/mesumali-dev/", label: "GitHub" },
                { icon: <FaTwitter size={20} />, url: "https://x.com/mesumali_dev", label: "Twitter" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E5E5E5]/40 hover:text-[#F5D76E] transition-all duration-300 transform hover:-translate-y-1"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
              <div className="w-12 h-[1px] bg-white/10 hidden sm:block"></div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold hidden sm:block">Connect with me</span>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center" data-aos="fade-left">
            <div className="relative">
              {/* Decorative element behind image */}
              <div className="absolute -inset-4 border border-white/5 rounded-[40px] rotate-3 z-0"></div>
              <div className="absolute -inset-4 border border-[#F5D76E]/10 rounded-[40px] -rotate-3 z-0"></div>

              <div className="relative z-10 w-64 h-80 md:w-72 md:h-[420px] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={pic}
                  alt="Mesum Ali - Software Engineering Student"
                  className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
              </div>

              {/* AI Floating Card */}
              <div className="absolute -bottom-6 -right-6 md:-right-8 bg-[#0a0a0a]/90 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl z-20 max-w-[180px]" data-aos="fade-up" data-aos-delay="600">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-[#F5D76E]/10 flex items-center justify-center">
                    <PiBrainLight className="text-[#F5D76E]" size={18} />
                  </div>
                  <span className="text-[11px] font-bold text-white">AI Engine</span>
                </div>
                <p className="text-[9px] text-[#E5E5E5]/50 leading-relaxed">Implementing advanced LLM architectures for next-gen apps.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}