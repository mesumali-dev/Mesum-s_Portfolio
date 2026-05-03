"use client";

import { FaLinkedin } from "react-icons/fa";

export default function Insights() {
  return (
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
  );
}