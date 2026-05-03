import {
    FaHome,
    FaUserAlt,
    FaProjectDiagram,
    FaCog,
    FaLaptopCode,
    FaEnvelope,
    FaLinkedinIn,
    FaTwitter,
    FaGithub,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#121212] text-white overflow-hidden relative pb-7 pt-14 px-6 md:px-16 border-t border-gray-800">

            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1595b6] opacity-20 rounded-full blur-3xl z-0"></div>
            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#1595b6] opacity-20 rounded-full blur-3xl z-0"></div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 justify-between">
                {/* Logo and Description */}
                <div className="flex flex-col max-w-xs">
                    <div className="flex flex-row items-center mb-4 gap-4">
                        <div className="w-20 h-20 bg-gradient-to-l from-[#1595b6] to-[#1f2667cc] rounded-full flex items-center justify-center text-white font-extrabold shadow-md text-2xl mb-4">
                            &lt;/&gt;
                        </div>
                        <h1 className="text-2xl md:text-4xl font-bold">Mesum.dev</h1>
                    </div>
                    <p className="text-sm leading-relaxed">
                        Empowering digital experiences with clean, maintainable code and
                        sustainable web solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:w-3/5">
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#1595b6]">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2 hover:text-[#1595b6] cursor-pointer transition-colors">
                                <FaHome /> Home
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#1595b6] cursor-pointer transition-colors">
                                <FaUserAlt /> About
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#1595b6] cursor-pointer transition-colors">
                                <FaProjectDiagram /> Project
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#1595b6] cursor-pointer transition-colors">
                                <FaCog /> How do I work
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#1595b6] cursor-pointer transition-colors">
                                <FaLaptopCode /> Skills
                            </li>
                            <li className="flex items-center gap-2 hover:text-[#1595b6] cursor-pointer transition-colors">
                                <FaEnvelope /> Contact
                            </li>
                        </ul>
                    </div>

                    {/* Why Us */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#1595b6]">Why Choose Us?</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">Clean Code</li>
                            <li className="flex items-center gap-2">Responsive Design</li>
                            <li className="flex items-center gap-2">Modern Technologies</li>
                        </ul>

                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-6 text-[#1595b6]">
                            <a
                                href="https://www.linkedin.com/in/mesumaliofficial/"
                                target="_blank"
                                aria-label="LinkedIn"
                                className="bg-black p-2 rounded-md text-white hover:text-blue-700 transition"
                            >
                                <FaLinkedinIn size={20} />
                            </a>
                            <a
                                href="https://x.com/smesumofficial"
                                aria-label="Twitter"
                                className="bg-black p-2 rounded-md text-white hover:text-blue-500 transition"
                            >
                                <FaTwitter size={20} />
                            </a>
                            <a
                                href="https://github.com/mesumaliofficial"
                                target="_blank"
                                aria-label="GitHub"
                                className="bg-black p-2 rounded-md text-white hover:text-gray-400 transition"
                            >
                                <FaGithub size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-[#1595b6]">Contact</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-2">
                                Phone: <span className="font-medium">+92 331 2096750</span>
                            </li>
                            <li className="flex items-center gap-2">
                                Email: <span className="font-medium">syedmesumjaffary@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-10 pt-6 border-t border-gray-500 text-center text-sm">
                © 2025 Mesum.dev. All Rights Reserved.
            </div>
        </footer>
    );
}
