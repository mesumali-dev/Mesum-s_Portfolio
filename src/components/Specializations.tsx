import { PiBrainLight, PiCubeLight, PiCodeLight } from "react-icons/pi";

export default function Specializations() {
  return (
    <section id="HowDoIWork" className="bg-[#050505] py-12 px-6 md:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-12 text-center lg:text-left" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Core <span className="text-[#F5D76E]">Specializations</span>
          </h2>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <div className="w-10 h-[2px] bg-[#F5D76E]"></div>
            <span className="text-[#E5E5E5]/50 text-[10px] font-bold uppercase tracking-[0.3em]">Engineering Pillars</span>
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
  );
}