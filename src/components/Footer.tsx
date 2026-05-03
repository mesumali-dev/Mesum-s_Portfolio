import { Link } from 'react-scroll';
import {
    FaLinkedinIn,
    FaTwitter,
    FaGithub,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
    const navLinks = [
        { name: "Home", to: "Home" },
        { name: "About", to: "About" },
        { name: "Specializations", to: "HowDoIWork" },
        { name: "Projects", to: "Projects" },
        { name: "Insights", to: "Insights" },
        { name: "Contact", to: "Contact" },
    ];

    return (
        <footer className="bg-[#050505] text-white overflow-hidden relative pb-12 pt-20 px-6 md:px-16 border-t border-white/5">
            {/* Background Atmosphere */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#F5D76E] opacity-[0.02] rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">

                    {/* Logo and Brand Mission */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="flex items-center space-x-3 group cursor-pointer">
                            <div className="w-10 h-10 bg-[#F5D76E] rounded flex items-center justify-center transition-transform duration-300 group-hover:scale-95">
                                <span className="text-black font-bold text-xl">M</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl tracking-tight text-white leading-tight">
                                    <span className="font-light">Mesum</span><span className="font-bold text-[#F5D76E]">Ali</span>
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-[#E5E5E5]/60 leading-relaxed font-light max-w-sm">
                            Architecting autonomous AI ecosystems and high-performance digital solutions. Bridging the gap between intelligent reasoning and scalable software.
                        </p>
                        <div className="flex gap-4">
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
                                    className="w-10 h-10 bg-white/5 border border-white/5 rounded-xl flex items-center justify-center text-[#E5E5E5]/60 hover:text-[#F5D76E] hover:border-[#F5D76E]/20 transition-all duration-300"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F5D76E] font-bold mb-6">Navigation</h4>
                            <ul className="space-y-4">
                                {navLinks.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            smooth={true}
                                            duration={500}
                                            offset={-80}
                                            className="text-sm text-[#E5E5E5]/50 hover:text-[#F5D76E] transition-colors cursor-pointer font-medium"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F5D76E] font-bold mb-6">Core Focus</h4>
                            <ul className="space-y-4 text-sm text-[#E5E5E5]/50 font-light">
                                <li className="hover:text-white transition-colors cursor-default">AI Agent Orchestration</li>
                                <li className="hover:text-white transition-colors cursor-default">Multi-Agent Systems</li>
                                <li className="hover:text-white transition-colors cursor-default">Full Stack Architecture</li>
                                <li className="hover:text-white transition-colors cursor-default">Autonomous Automation</li>
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1">
                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#F5D76E] font-bold mb-6">Reach Out</h4>
                            <ul className="space-y-4">
                                <li className="flex items-center space-x-3 text-[#E5E5E5]/70">
                                    <FaPhoneAlt size={12} className="text-[#F5D76E]/60" />
                                    <span className="text-sm font-light">+92 331 2096750</span>
                                </li>
                                <li className="flex items-center space-x-3 text-[#E5E5E5]/70">
                                    <FaEnvelope size={12} className="text-[#F5D76E]/60" />
                                    <span className="text-sm font-light">s.mesumali99@gmail.com</span>
                                </li>
                                <li className="flex items-center space-x-3 text-[#E5E5E5]/70">
                                    <FaMapMarkerAlt size={12} className="text-[#F5D76E]/60" />
                                    <span className="text-sm font-light">Karachi, Pakistan</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] text-[#E5E5E5]/30 uppercase tracking-widest font-bold">
                        © 2026 Syed Mesum Ali Shah. Engineered with Precision.
                    </p>
                    <div className="flex items-center space-x-8 text-[10px] uppercase tracking-[0.2em] text-[#E5E5E5]/30 font-bold">
                        <span className="hover:text-[#F5D76E] transition-colors cursor-pointer">Privacy Protocol</span>
                        <span className="hover:text-[#F5D76E] transition-colors cursor-pointer">System Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}