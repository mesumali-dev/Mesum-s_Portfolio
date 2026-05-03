"use client";

import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";

export default function ContactSection() {


    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            res.json();


            form.reset();
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);

            }, 3000);
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send message.");
        }
    };
    const [showModal, setShowModal] = useState(false);


    return (
        <Element name="Contact">
            <section id="Contact" className="bg-[#020817] min-h-screen text-white overflow-hidden relative py-24 px-6 md:px-16">
                <div className="max-w-7xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <div className="p-4" data-aos="fade-right">
                            <div className="mb-12" data-aos="fade-up">
                                <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                                    <span className="relative z-10">Get in Touch</span>
                                </h2>
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-1 bg-gradient-to-r from-[#03b7e4] to-transparent rounded-full"></div>
                                    <span className="text-[#00ccff] text-sm font-medium uppercase tracking-wider">Connect with Me</span>
                                </div>
                            </div>
                            <p className="text-base text-white/90 leading-relaxed mb-8">
                                I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-xl font-semibold text-[#00ccff] mb-2">Phone</h3>
                                    <p className="text-base text-white/90 leading-relaxed">+92-331 2096750</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#00ccff] mb-2">Email</h3>
                                    <p className="text-base text-white/90 leading-relaxed">syedmesumjaffary@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#00ccff] mb-2">Location</h3>
                                    <p className="text-base text-white/90 leading-relaxed">Karachi, Pakistan</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-[#00ccff] mb-2">Follow Me</h3>
                                    <div className="flex gap-4 mt-2">
                                        <a
                                            href="https://www.linkedin.com/in/mesumaliofficial/"
                                            aria-label="LinkedIn profile of Mesum Ali"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#1e1e1e] p-2 rounded-md text-[#1595b6] hover:text-[#00ccff] transition-colors duration-300"
                                        >
                                            <FaLinkedinIn size={20} />
                                        </a>
                                        <a
                                            href="https://x.com/smesumofficial"
                                            aria-label="Twitter profile of Mesum Ali"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#1e1e1e] p-2 rounded-md text-[#1595b6] hover:text-[#00ccff] transition-colors duration-300"
                                        >
                                            <FaTwitter size={20} />
                                        </a>
                                        <a
                                            href="https://github.com/mesumaliofficial"
                                            aria-label="GitHub profile of Mesum Ali"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-[#1e1e1e] p-2 rounded-md text-[#1595b6] hover:text-[#00ccff] transition-colors duration-300"
                                        >
                                            <FaGithub size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl border border-white/10" data-aos="fade-left">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                                    <div className="w-full">
                                        <label htmlFor="name" className="text-sm font-medium text-white/90 mb-1 block">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your Name"
                                            className="bg-white/10 p-3 rounded-md w-full text-base text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00ccff] transition-all"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label htmlFor="phone" className="text-sm font-medium text-white/90 mb-1 block">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="Phone Number"
                                            className="bg-white/10 p-3 rounded-md w-full text-base text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00ccff] transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="text-sm font-medium text-white/90 mb-1 block">
                                        Your Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Your Email"
                                        className="bg-white/10 p-3 rounded-md w-full text-base text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00ccff] transition-all"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="text-sm font-medium text-white/90 mb-1 block">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your Message"
                                        rows={5}
                                        className="bg-white/10 p-3 rounded-md w-full text-base text-white/90 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#00ccff] transition-all"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="bg-[#1595b6] hover:bg-[#117a95] px-8 py-3 rounded-md text-white font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#1595b6]/30 w-full"
                                    aria-label="Send contact message"
                                >
                                    Send Message
                                </button>
                            </form>
                            {showModal && (
                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                                    <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                                        <h2 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h2>
                                        <p className="text-gray-700">Your message has been sent successfully.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00ccff]/10 blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#03b7e4]/10 blur-3xl"></div>
                </div>
            </section>
        </Element>
    );
}