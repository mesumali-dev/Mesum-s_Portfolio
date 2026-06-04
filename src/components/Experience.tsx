import { PiBriefcaseLight } from "react-icons/pi";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance / Client Work",
    period: "Apr 2025 – Present",
    description: "Developing custom CRM and inventory management systems for local businesses to improve operational efficiency. Architecting AI-powered chatbots using RAG pipelines for automated customer support.",
    impact: [
      "Delivered end-to-end solutions from database design to cloud deployment.",
      "Built RAG-based AI systems for internal process automation.",
      "Directly collaborated with clients to translate business needs into scalable software."
    ],
    tech: ["Next.js", "Python", "FastAPI", "OpenAI Agents Python Sdk", "RAG", "Multi-Agent Orchestration", "PostgreSQL", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    role: "Jr. Full Stack Developer",
    company: "Plug IT Solution",
    period: "Aug 2024 – Mar 2025",
    description: "Architected and maintained production-grade full-stack systems, specializing in high-concurrency RESTful API design, database schema optimization, and secure authentication workflows.",
    impact: [
      "Engineered core RESTful APIs for enterprise CRM and inventory management systems using FastAPI.",
      "Optimized database queries and indexing, resulting in a 30% reduction in latency for data-heavy operations.",
      "Implemented secure JWT-based authentication and role-based access control (RBAC) across multiple platforms.",
      "Modernized legacy frontend modules using Next.js, significantly improving SEO and Core Web Vitals."
    ],
    tech: ["Next.js", "FastAPI", "RESTful APIs", "JWT", "PostgreSQL", "Tailwind CSS"]
  }
];

export default function Experience() {
  return (
    <section id="Experience" className="bg-[#050505] py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5D76E] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Professional <span className="text-[#F5D76E]">Experience</span>
          </h2>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="w-10 h-[2px] bg-[#F5D76E]"></div>
            <span className="text-[#E5E5E5]/50 text-[10px] font-bold uppercase tracking-[0.3em]">Career Path</span>
          </div>
        </div>

        {/* Experience List */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group bg-white/2 border border-white/5 rounded-[40px] p-8 md:p-12 transition-all duration-700 hover:border-[#F5D76E]/20 hover:bg-white/4 relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-[#F5D76E] transition-colors duration-500 mb-2 leading-tight">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-[#F5D76E] text-sm font-bold uppercase tracking-widest">{exp.company}</p>
                    <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block"></span>
                    <span className="text-xs text-white/40 font-medium">{exp.period}</span>
                  </div>
                </div>
                <div className="px-5 py-2 bg-white/5 rounded-full border border-white/5 self-start md:self-center">
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Full-Time Role</span>
                </div>
              </div>

              <p className="text-base text-[#E5E5E5]/70 leading-relaxed mb-10 font-light max-w-4xl italic">
                "{exp.description}"
              </p>

              <div className="grid lg:grid-cols-2 gap-12 pt-10 border-t border-white/5">
                <div>
                  <h4 className="text-[10px] font-bold text-[#F5D76E] uppercase tracking-[0.3em] mb-6">Strategic Impact</h4>
                  <ul className="space-y-4">
                    {exp.impact.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-sm text-[#E5E5E5]/60 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F5D76E] mt-2 shrink-0 shadow-[0_0_8px_rgba(245,215,110,0.4)]"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-[10px] font-bold text-[#F5D76E] uppercase tracking-[0.3em] mb-6">Stack & Tools</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 border border-white/5 rounded-xl text-[10px] font-bold text-[#E5E5E5]/40 uppercase tracking-wider group-hover:text-[#F5D76E]/80 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}