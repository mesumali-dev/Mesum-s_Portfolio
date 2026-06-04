"use client";

import { useState } from "react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { sendContactEmail } from "@/app/actions";

export default function ContactSection() {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: String(formData.get("name") || ""),
            email: String(formData.get("email") || ""),
            phone: String(formData.get("phone") || ""),
            message: String(formData.get("message") || ""),
        };

        try {
            const res = await sendContactEmail(data);
            
            if (res.success) {
                form.reset();
                setShowModal(true);
                setTimeout(() => setShowModal(false), 3000);
            } else {
                alert(res.message || "Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send message.");
        }
    };

    return (
        <section id="Contact" className="bg-[#050505] py-12 px-6 md:px-16 relative overflow-hidden">
                {/* Background Atmosphere */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5D76E] opacity-[0.02] rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                        
                        {/* Left Side: Communication Bridge */}
                        <div className="lg:col-span-5 space-y-8" data-aos="fade-right">
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                                    Let&apos;s <span className="text-[#F5D76E]">Connect</span>
                                </h2>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-[2px] bg-[#F5D76E]"></div>
                                    <span className="text-[#E5E5E5]/50 text-[10px] font-bold uppercase tracking-[0.3em]">Communication Bridge</span>
                                </div>
                                <p className="text-base text-[#E5E5E5]/70 leading-relaxed font-light">
                                    Ready to architect the next generation of AI-driven systems? Reach out to discuss collaboration or operational optimization.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { icon: <FaPhoneAlt size={12}/>, label: "Direct Line", value: "+92 331 2096750", href: "tel:+923312096750" },
                                    { icon: <FaEnvelope size={12}/>, label: "Professional Email", value: "s.mesumali99@gmail.com", href: "mailto:s.mesumali99@gmail.com" },
                                    { icon: <FaMapMarkerAlt size={12}/>, label: "Base Location", value: "Karachi, Pakistan", href: "#" }
                                ].map((contact, i) => (
                                    <a 
                                        key={i} 
                                        href={contact.href}
                                        className="group flex items-center p-3 bg-white/[0.01] border border-white/5 rounded-xl hover:border-[#F5D76E]/20 transition-all duration-300"
                                    >
                                        <div className="w-8 h-8 bg-[#F5D76E]/10 rounded-lg flex items-center justify-center text-[#F5D76E] border border-[#F5D76E]/10 group-hover:scale-105 transition-transform">
                                            {contact.icon}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-[8px] uppercase tracking-widest text-[#E5E5E5]/40 font-bold">{contact.label}</p>
                                            <p className="text-sm text-[#E5E5E5] font-medium group-hover:text-white transition-colors">{contact.value}</p>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            <div className="pt-6 border-t border-white/5">
                                <p className="text-[9px] uppercase tracking-[0.2em] text-[#E5E5E5]/30 font-bold mb-4">Sync via Social Networks</p>
                                <div className="flex gap-3">
                                    {[
                                        { icon: <FaLinkedinIn size={16} />, url: "https://www.linkedin.com/in/mesumali-dev/", label: "LinkedIn" },
                                        { icon: <FaGithub size={16} />, url: "https://github.com/mesumali-dev/", label: "GitHub" },
                                        { icon: <FaTwitter size={16} />, url: "https://x.com/mesumali_dev", label: "Twitter" }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center text-[#E5E5E5]/60 hover:text-[#F5D76E] hover:border-[#F5D76E]/20 transition-all duration-300 transform hover:-translate-y-1"
                                            aria-label={social.label}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Premium Request Portal */}
                        <div className="lg:col-span-7" data-aos="fade-left">
                            <div className="bg-white/[0.02] border border-white/5 rounded-[32px] p-6 md:p-10 relative overflow-hidden shadow-2xl">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-[#F5D76E] opacity-[0.01] blur-3xl"></div>
                                
                                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-1.5">
                                            <label htmlFor="name" className="text-[9px] uppercase tracking-widest text-[#E5E5E5]/40 font-bold ml-1">Full Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                placeholder="Syed Mesum Ali"
                                                className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-5 text-sm text-[#E5E5E5] placeholder-white/10 focus:outline-none focus:border-[#F5D76E]/30 focus:bg-white/[0.07] transition-all duration-300"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label htmlFor="phone" className="text-[9px] uppercase tracking-widest text-[#E5E5E5]/40 font-bold ml-1">Phone Reference</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                placeholder="+92 XXX XXXXXXX"
                                                className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-5 text-sm text-[#E5E5E5] placeholder-white/10 focus:outline-none focus:border-[#F5D76E]/30 focus:bg-white/[0.07] transition-all duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-[9px] uppercase tracking-widest text-[#E5E5E5]/40 font-bold ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="mesum@example.com"
                                            className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-5 text-sm text-[#E5E5E5] placeholder-white/10 focus:outline-none focus:border-[#F5D76E]/30 focus:bg-white/[0.07] transition-all duration-300"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label htmlFor="message" className="text-[9px] uppercase tracking-widest text-[#E5E5E5]/40 font-bold ml-1">Project Insight / Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            placeholder="Describe your vision or inquiry..."
                                            rows={4}
                                            className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-5 text-sm text-[#E5E5E5] placeholder-white/10 focus:outline-none focus:border-[#F5D76E]/30 focus:bg-white/[0.07] transition-all duration-300 resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="group w-full bg-[#F5D76E] hover:bg-[#d4b74e] text-black py-4 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-500 transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(245,215,110,0.1)] flex items-center justify-center space-x-2"
                                    >
                                        <span>Dispatch Message</span>
                                        <LuSend size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Success Modal */}
                {showModal && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md px-6">
                        <div className="bg-[#0a0a0a] border border-[#F5D76E]/20 p-12 rounded-[40px] text-center shadow-2xl max-w-md w-full" data-aos="zoom-in">
                            <div className="w-20 h-20 bg-[#F5D76E]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#F5D76E]/20">
                                <LuSend size={32} className="text-[#F5D76E]" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">Message Dispatched</h2>
                            <p className="text-[#E5E5E5]/60 font-light">Your inquiry has been successfully transmitted. Expect a response shortly.</p>
                        </div>
                    </div>
                )}
            </section>
    );
}