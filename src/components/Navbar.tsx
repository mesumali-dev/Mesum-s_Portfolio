"use client";

import { Link } from 'react-scroll';
import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuMenu, LuDownload } from "react-icons/lu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", to: "Home" },
        { name: "About", to: "About" },
        { name: "Specializations", to: "HowDoIWork" },
        { name: "Experience", to: "Experience" },
        { name: "Projects", to: "Projects" },
        { name: "Insights", to: "Insights" },
        { name: "Contact", to: "Contact" },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-center ${scrolled ? "pt-4" : "pt-0"}`}>
            <div className={`transition-all duration-500 flex justify-between items-center ${scrolled ? "w-[95%] md:w-[90%] lg:w-[85%] bg-[#0a0a0a]/90 backdrop-blur-xl py-3 px-8 rounded-full border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.8)]" : "w-full bg-transparent py-4 px-6 md:px-12"}`}>

                {/* Logo Section */}
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

                {/* Desktop Navigation Links */}
                <ul className="hidden lg:flex items-center space-x-1">
                    {navLinks.map((link) => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                activeClass="bg-white/5 text-[#F5D76E]"
                                className="px-5 py-2 rounded-full text-sm font-medium text-[#E5E5E5]/70 hover:text-white hover:bg-white/5 transition-all duration-300 cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right Side: CTA */}
                <div className="hidden md:flex items-center">
                    <a
                        href="/Resume.pdf"
                        download="Mesum_Ali_Resume.pdf"
                        className="group flex items-center space-x-2 bg-transparent border-2 border-[#F5D76E]/20 hover:border-[#F5D76E] hover:bg-[#F5D76E]/5 text-white px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 cursor-pointer"
                    >
                        <span>Download CV</span>
                        <LuDownload size={14} className="group-hover:translate-y-0.5 transition-transform duration-300 text-[#F5D76E]" />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <IoClose size={24} /> : <LuMenu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[105] lg:hidden transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-[280px] sm:w-[350px] bg-[#0a0a0a] z-[108] lg:hidden transition-transform duration-500 ease-in-out shadow-2xl ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex flex-col h-full p-8">
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center space-x-3">
                            <div className="w-9 h-9 bg-[#F5D76E] rounded flex items-center justify-center text-black font-bold text-lg">M</div>
                            <span className="text-lg tracking-tight text-white leading-tight">
                                <span className="font-light">Mesum</span><span className="font-bold text-[#F5D76E]">Ali</span>
                            </span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white p-2">
                            <IoClose size={24} />
                        </button>
                    </div>

                    <ul className="space-y-2">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    activeClass="text-[#F5D76E] bg-white/5"
                                    className="text-lg text-[#E5E5E5]/80 hover:text-[#F5D76E] hover:bg-white/5 font-medium transition-all duration-300 block py-3 px-4 rounded-xl cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto space-y-8">
                        <div className="flex items-center space-x-6 px-4">
                            {[
                                { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/mesumali-dev/" },
                                { icon: <FaTwitter size={20} />, url: "https://x.com/mesumali_dev" },
                                { icon: <FaGithub size={20} />, url: "https://github.com/mesumali-dev/" }
                            ].map((social, index) => (
                                <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-[#E5E5E5]/40 hover:text-[#F5D76E] transition-all duration-300">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                        <a
                            href="/Resume.pdf"
                            download="Mesum_Ali_Resume.pdf"
                            className="group w-full flex items-center justify-center space-x-3 bg-[#F5D76E] hover:bg-[#d4b74e] text-black py-3.5 rounded-full font-bold text-sm shadow-lg shadow-[#F5D76E]/10 transition-all duration-300 transform hover:-translate-y-0.5"
                            onClick={() => setIsOpen(false)}
                        >
                            <span>Download CV</span>
                            <LuDownload size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;