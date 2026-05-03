"use client";

import { Element, Link } from 'react-scroll';
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import pic from "./../../public/mesum.png";
import project_1 from "@/app/assets/img/Project_1.png";
import project_2 from "@/app/assets/img/Project_2.png";
import project_3 from "@/app/assets/img/Project_3.png";

import { PiBrainLight, PiCubeLight, PiCodeLight, PiTrendUpLight, PiChartLineUpLight } from "react-icons/pi";
import { IoServer } from "react-icons/io5";
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import Footer from "./components/Footer";
import SkillsSection from "./components/Skills";
import ContactSection from './components/Contact';

import { projects } from "@/app/constants/projects";

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
                <h1 className="text-4xl md:text-6xl font-light mb-2 tracking-tight">
                  Hi, I’m <span className="font-bold text-white">Mesum<span className="text-[#F5D76E]">Ali</span></span>
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
                  <button
                    className="group px-10 py-3.5 rounded-full font-bold text-sm border-2 border-white/10 hover:border-[#F5D76E]/40 text-[#E5E5E5] hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                  >
                    <span>Download CV</span>
                    <LuDownload size={14} className="group-hover:translate-y-0.5 transition-transform duration-300 text-[#F5D76E]" />
                  </button>
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
      </Element>

      <Element name="About">
        <section id="about" className="bg-[#0a0a0a] py-24 px-6 md:px-16 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5D76E] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Heading */}
            <div className="mb-16 text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                About <span className="text-[#F5D76E]">Me</span>
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#F5D76E]"></div>
                <span className="text-[#E5E5E5]/50 text-xs font-bold uppercase tracking-[0.3em]">Professional Profile</span>
              </div>
              <p className="max-w-3xl text-lg text-[#E5E5E5]/70 leading-relaxed font-light mx-auto lg:mx-0">
                I am a Software Engineering Student dedicated to bridging the gap between <span className="text-white font-medium italic">Large Language Models</span> and production-ready software. My focus lies in architecting <span className="text-[#F5D76E] font-medium">AI Employees</span> and <span className="text-white font-medium">AI Agents</span> that optimize operational efficiency through autonomous business systems and advanced AI automation.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Side: Personal Info & Education */}
              <div className="lg:col-span-5 space-y-12" data-aos="fade-right">
                <div>
                  <h3 className="text-[#F5D76E] text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#F5D76E]/30"></span> Personal Details
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {[
                      { label: "Name", value: "Syed Mesum Ali Shah" },
                      { label: "Location", value: "Karachi, Pakistan" },
                      { label: "Email", value: "s.mesumali99@gmail.com" },
                      { label: "Phone", value: "+92 331 2096750" }
                    ].map((item, i) => (
                      <div key={i} className="group border-b border-white/5 pb-4 hover:border-[#F5D76E]/20 transition-colors">
                        <p className="text-[10px] uppercase tracking-widest text-[#E5E5E5]/40 mb-1 font-bold">{item.label}</p>
                        <p className="text-[#E5E5E5] font-medium group-hover:text-white transition-colors">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-[#F5D76E] text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#F5D76E]/30"></span> Education
                  </h3>
                  <div className="space-y-6">
                    <div className="relative pl-6 border-l border-[#F5D76E]/20">
                      <div className="absolute left-[-5px] top-0 w-2 h-2 bg-[#F5D76E] rounded-full shadow-[0_0_10px_#F5D76E]"></div>
                      <h4 className="text-white font-bold">BE – Software Engineering</h4>
                      <p className="text-xs text-[#F5D76E]/60 font-bold mb-2">Iqra University | 2026 – Present</p>
                    </div>
                    <div className="relative pl-6 border-l border-white/10">
                      <h4 className="text-white/80 font-bold text-sm">Certified Agentic AI Dev</h4>
                      <p className="text-xs text-[#E5E5E5]/40 font-bold">GIAIC Initiative | 2025 – Present</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Technical Expertise */}
              <div className="lg:col-span-7" data-aos="fade-left">
                <div className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#F5D76E] opacity-[0.02] blur-3xl"></div>
                  
                  <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-4">
                    Technical <span className="text-[#F5D76E]">Arsenal</span>
                  </h3>

                  <div className="space-y-8">
                    {[
                      { 
                        category: "AI & Agents", 
                        skills: ["OpenAI Agents Python SDK", "Multi-Agent Orchestration", "Spec-Driven Development (SpeckitPlus)", "n8n Workflow Automation"] 
                      },
                      { 
                        category: "Frontend Architecture", 
                        skills: ["Next.js (App Router)", "React.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"] 
                      },
                      { 
                        category: "Backend & Systems", 
                        skills: ["Python", "FastAPI", "Node.js", "RESTful API Design", "JWT Authentication"] 
                      },
                      { 
                        category: "Databases", 
                        skills: ["PostgreSQL (Neon)", "Prisma (ORM)", "SQLModel", "Alembic (Migrations)"] 
                      },
                      { 
                        category: "DevOps & Tools", 
                        skills: ["Docker", "Git/GitHub", "Vercel", "Hugging Face", "Postman", "Linux", "AI Observability Tools"] 
                      }
                    ].map((group, i) => (
                      <div key={i}>
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F5D76E] font-bold mb-3">{group.category}</h4>
                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill, si) => (
                            <span key={si} className="px-3 py-1.5 bg-white/5 border border-white/5 rounded-full text-[11px] text-[#E5E5E5]/80 font-medium hover:border-[#F5D76E]/30 hover:text-white transition-all cursor-default">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="HowDoIWork">
        <section id="HowDoIWork" className="bg-[#050505] py-24 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-16 text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Core <span className="text-[#F5D76E]">Specializations</span>
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-[2px] bg-[#F5D76E]"></div>
                <span className="text-[#E5E5E5]/50 text-xs font-bold uppercase tracking-[0.3em]">Engineering Pillars</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Autonomous AI Agents",
                  desc: "Developing multi-agent workforces where specialized 'AI Employees' collaborate: one handles leads, another drafts emails, and a third generates proposals to automate entire business departments seamlessly.",
                  icon: <PiBrainLight size={32} className="text-[#F5D76E]" />,
                  delay: 0
                },
                {
                  title: "Scalable Systems Architecture",
                  desc: "Implementing Spec-Driven Development using FastAPI and PostgreSQL to build robust, high-performance backends that handle enterprise-scale data.",
                  icon: <PiCubeLight size={32} className="text-[#F5D76E]" />,
                  delay: 200
                },
                {
                  title: "End-to-End Intelligence",
                  desc: "Bridging sophisticated Frontend Architecture with intelligent automation, ensuring seamless user experiences that are powered by real-time AI logic.",
                  icon: <PiCodeLight size={32} className="text-[#F5D76E]" />,
                  delay: 400
                }
              ].map((pillar, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={pillar.delay}
                  className={`group bg-white/[0.02] border transition-all duration-500 p-10 rounded-[40px] relative overflow-hidden ${
                    i === 1 
                    ? "border-[#F5D76E]/40 -translate-y-2 shadow-[0_20px_50px_rgba(245,215,110,0.1)] bg-white/[0.04]" 
                    : "border-white/5"
                  }`}
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-[#F5D76E] blur-3xl transition-opacity ${i === 1 ? "opacity-[0.05]" : "opacity-[0.02] group-hover:opacity-[0.05]"}`}></div>
                  
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border transition-all duration-500 ${
                    i === 1 
                    ? "bg-[#F5D76E]/20 border-[#F5D76E]/20 scale-110" 
                    : "bg-[#F5D76E]/10 border-[#F5D76E]/10 group-hover:scale-110"
                  }`}>
                    {pillar.icon}
                  </div>
                  
                  <h3 className={`text-xl font-bold mb-4 transition-colors ${i === 1 ? "text-[#F5D76E]" : "text-white group-hover:text-[#F5D76E]"}`}>{pillar.title}</h3>
                  <p className="text-[#E5E5E5]/60 text-sm leading-relaxed font-light">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      <Element name="Projects">
        <section id="project" className="bg-[#0a0a0a] py-24 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-16 text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Impactful <span className="text-[#F5D76E]">Solutions</span>
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-12 h-[2px] bg-[#F5D76E]"></div>
                <span className="text-[#E5E5E5]/50 text-xs font-bold uppercase tracking-[0.3em]">Built with Purpose</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  {...project}
                  alt={project.title}
                />
              ))}
            </div>
          </div>
        </section>
      </Element>


      <Element name="Insights">
        <section id="insights" className="bg-[#050505] py-12 px-6 md:px-16 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 text-center lg:text-left" data-aos="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                Technical <span className="text-[#F5D76E]">Insights</span>
              </h2>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className="w-10 h-[2px] bg-[#F5D76E]"></div>
                <span className="text-[#E5E5E5]/50 text-[10px] font-bold uppercase tracking-[0.3em]">System Design & Strategy</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" data-aos="fade-up">
              <div className="lg:col-span-8">
                <div className="bg-white/[0.01] border border-white/5 rounded-[32px] p-6 md:p-10 relative overflow-hidden group hover:border-[#F5D76E]/20 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#F5D76E] opacity-[0.01] group-hover:opacity-[0.03] blur-3xl transition-opacity"></div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {["Workflow Optimization", "System Design", "Product Thinking"].map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-[#F5D76E]/5 border border-[#F5D76E]/10 rounded-full text-[9px] font-bold text-[#F5D76E] uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 leading-tight">
                    Refining Digital Ecosystems: From Logic to <span className="text-[#F5D76E]">Impact</span>
                  </h3>
                  
                  <p className="text-[#E5E5E5]/70 text-base leading-relaxed font-light mb-8">
                    Exploring the intersection of high-performance architecture and user-centric design. I dive deep into how optimized workflows drive business value in modern AI-integrated environments.
                  </p>

                  <a 
                    href="https://www.linkedin.com/posts/mesumali-dev_workflowoptimization-systemdesign-productthinking-ugcPost-7412098324599730176-RjfK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#F5D76E] text-black px-6 py-3 rounded-full font-bold text-xs hover:bg-[#d4b74e] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#F5D76E]/10"
                  >
                    <span>Read on LinkedIn</span>
                    <FaLinkedin size={14} />
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-4 hidden lg:block">
                <div className="relative">
                  <div className="absolute -inset-10 bg-[#F5D76E] opacity-[0.03] blur-[80px] rounded-full"></div>
                  <div className="text-[100px] font-black text-white/[0.015] select-none leading-none rotate-12">
                    LOGIC
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      <Element name="Contact">
        <ContactSection/>
      </Element>

      <Footer />
    </>
  );
}

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc: StaticImageData;
  techStack: string[];
  techIcons?: { src: string; alt: string }[];
  link: string;
  alt: string;
  target?: string;
}

const ProjectCard = ({ title, category, description, imageSrc, techStack, techIcons, link, alt, target }: ProjectCardProps) => (
  <div className="group w-full bg-[#0a0a0a] border border-white/5 rounded-[32px] p-1.5 transition-all duration-700 hover:border-[#F5D76E]/30 relative" data-aos="fade-up">
    {/* Inner Card Container */}
    <div className="bg-[#050505] rounded-[28px] p-4 h-full relative overflow-hidden flex flex-col">
        {/* Subtle Glow */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-[#F5D76E] opacity-0 group-hover:opacity-[0.05] blur-[60px] transition-opacity duration-700"></div>
        
        {/* Image Container */}
        <div className="h-48 w-full rounded-[22px] overflow-hidden relative mb-5 shadow-2xl shrink-0">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <Image
                alt={alt}
                src={imageSrc}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-100"
                loading="lazy"
            />
            {/* Status Tag */}
            <div className="absolute top-3 right-3 z-20">
                <span className="flex items-center space-x-1.5 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[8px] font-bold text-white uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#34A853] animate-pulse"></span>
                    <span>Live</span>
                </span>
            </div>
        </div>

        <div className="flex flex-col flex-grow px-1">
            <div className="mb-3">
                <div className="flex items-center space-x-2 mb-1.5">
                    <div className="w-5 h-[1px] bg-[#F5D76E]/40"></div>
                    <p className="text-[8px] uppercase tracking-[0.2em] text-[#F5D76E] font-bold">{category}</p>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#F5D76E] transition-colors duration-500 tracking-tight">{title}</h3>
            </div>
            
            <p className="text-xs text-[#E5E5E5]/60 leading-relaxed font-light mb-5 line-clamp-2">
                {description}
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-1.5 mb-6">
                {techStack.map((tech, index) => (
                    <span key={index} className="px-2.5 py-0.5 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-[#E5E5E5]/40 group-hover:text-[#F5D76E]/80 transition-colors uppercase tracking-wider">
                        {tech}
                    </span>
                ))}
            </div>
            
            <div className="mt-auto pt-5 border-t border-white/5 flex flex-row justify-between items-center">
                {techIcons && (
                    <div className="flex items-center -space-x-1">
                        {techIcons.slice(0, 4).map((icon, index) => (
                            <div key={index} className="w-7 h-7 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center transition-transform hover:-translate-y-1 hover:z-30 relative z-20">
                                <img src={icon.src} alt={icon.alt} className="w-3.5 h-3.5 grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                            </div>
                        ))}
                    </div>
                )}
                <a
                    href={link}
                    target={target || "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/40 hover:text-[#F5D76E] transition-all duration-300 text-[9px] font-bold uppercase tracking-widest group/btn"
                    aria-label={`View ${title} project`}
                >
                    <span>View Site</span>
                    <FaExternalLinkAlt size={8} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
            </div>
        </div>
    </div>
  </div>
);