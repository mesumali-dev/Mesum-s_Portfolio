export default function About() {
  return (
    <section id="About" className="bg-[#0a0a0a] py-12 px-6 md:px-16 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5D76E] opacity-[0.03] rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            About <span className="text-[#F5D76E]">Me</span>
          </h2>
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
            <div className="w-10 h-[2px] bg-[#F5D76E]"></div>
            <span className="text-[#E5E5E5]/50 text-[10px] font-bold uppercase tracking-[0.3em]">Professional Profile</span>
          </div>
          <p className="max-w-3xl text-base text-[#E5E5E5]/70 leading-relaxed font-light mx-auto lg:mx-0">
            I am a Software Engineering Student dedicated to bridging the gap between <span className="text-white font-medium italic">Large Language Models</span> and production-ready software. My focus lies in architecting <span className="text-[#F5D76E] font-medium">AI Employees</span> and <span className="text-white font-medium">AI Agents</span> that optimize operational efficiency through autonomous business systems and advanced AI automation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Side: Personal Info & Education */}
          <div className="lg:col-span-5 space-y-12" data-aos="fade-right">
            <div>
              <h3 className="text-[#F5D76E] text-sm font-bold uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-[#F5D76E]/30"></span> Personal Details
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
                <span className="w-8 h-px bg-[#F5D76E]/30"></span> Education
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
            <div className="bg-white/2 border border-white/5 rounded-[32px] p-8 md:p-12 relative overflow-hidden">
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
  );
}