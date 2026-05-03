"use client";

import Image, { StaticImageData } from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "@/constants/projects";

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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={14}
                    height={14}
                    className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                  />
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

export default function Projects() {
  return (
    <section id="project" className="bg-[#0a0a0a] py-12 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Impactful <span className="text-[#F5D76E]">Solutions</span>
          </h2>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-10 h-[2px] bg-[#F5D76E]"></div>
            <span className="text-[#E5E5E5]/50 text-[10px] font-bold uppercase tracking-[0.3em]">Built with Purpose</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
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
  );
}