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
      <div className="h-56 w-full rounded-[22px] overflow-hidden relative mb-6 shadow-2xl shrink-0">
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
        <div className="absolute top-4 right-4 z-20">
          <span className="flex items-center space-x-2 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold text-white uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F5D76E] animate-pulse"></span>
            <span>Live Project</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow px-2">
        <div className="mb-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-5 h-[1px] bg-[#F5D76E]/40"></div>
            <p className="text-[9px] uppercase tracking-[0.2em] text-[#F5D76E] font-bold">{category}</p>
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#F5D76E] transition-colors duration-500 tracking-tight leading-tight">{title}</h3>
        </div>

        <p className="text-xs text-[#E5E5E5]/60 leading-relaxed font-light mb-6 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {techStack.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold text-[#E5E5E5]/40 group-hover:text-[#F5D76E]/80 transition-colors uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-white/5 flex flex-row justify-between items-center">
          {techIcons && (
            <div className="flex items-center -space-x-2">
              {techIcons.slice(0, 4).map((icon, index) => (
                <div key={index} className="w-8 h-8 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center transition-transform hover:-translate-y-1 hover:z-30 relative z-20 overflow-hidden">
                   <Image
                    src={icon.src}
                    alt={icon.alt}
                    width={16}
                    height={16}
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
            className="flex items-center space-x-2.5 text-white/40 hover:text-[#F5D76E] transition-all duration-300 text-[10px] font-bold uppercase tracking-widest group/btn"
            aria-label={`View ${title} project`}
          >
            <span>Explore Case Study</span>
            <FaExternalLinkAlt size={10} className="group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="Projects" className="bg-[#0a0a0a] py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-20 text-center lg:text-left" data-aos="fade-up">
          <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
            <div className="w-10 h-[1px] bg-[#F5D76E]/50"></div>
            <span className="text-[#F5D76E] text-[10px] font-bold uppercase tracking-[0.3em]">Featured Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
            Engineering <span className="text-[#F5D76E]">Digital Impact</span>
          </h2>
          <p className="text-[#E5E5E5]/50 text-sm max-w-2xl font-light leading-relaxed">
            A selection of high-performance systems and intelligent architectures designed to solve real-world complexities.
          </p>
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

        {/* View More Placeholder */}
        <div className="mt-20 text-center" data-aos="fade-up">
          <a 
            href="https://github.com/mesumali-dev/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/60 hover:text-[#F5D76E] transition-all duration-300 group"
          >
            <span className="text-xs font-bold uppercase tracking-widest">More on GitHub</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#F5D76E] group-hover:animate-ping"></div>
          </a>
        </div>
      </div>
    </section>
  );
}