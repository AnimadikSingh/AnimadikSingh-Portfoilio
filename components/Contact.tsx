import React, { useState } from 'react';
import { SectionId } from '../types';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const mailtoLink = `mailto:animadiksingh904@gmail.com?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`)}`;
        window.location.href = mailtoLink;
    };

  return (
    <section id={SectionId.CONTACT} className="py-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Text & Info */}
        <div className="space-y-8">
            <div>
                 <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                 <p className="text-gray-400 text-lg leading-relaxed">
                    Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
                    Open to opportunities, creative projects, or just a chat.
                 </p>
            </div>

            <div className="space-y-4">
                 <h3 className="text-xl font-semibold text-white">Connect with me</h3>
                 <div className="flex flex-col gap-4">
                    <a 
                        href="mailto:animadiksingh904@gmail.com"
                        className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#00D9FF]/50 hover:bg-white/10 transition-all group"
                    >
                        <div className="p-3 rounded-full bg-[#00D9FF]/10 text-[#00D9FF] group-hover:scale-110 transition-transform">
                            <Mail size={20} />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="text-white font-medium">animadiksingh904@gmail.com</p>
                        </div>
                    </a>

                    <div className="grid grid-cols-2 gap-4">
                        <a 
                            href="https://in.linkedin.com/in/animadik-singh-36166031a"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#0077b5]/50 hover:bg-white/10 transition-all group"
                        >
                            <Linkedin size={20} className="text-gray-400 group-hover:text-[#0077b5] transition-colors" />
                            <span className="text-white font-medium">LinkedIn</span>
                        </a>
                        <a 
                            href="https://github.com/AnimadikSingh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group"
                        >
                            <Github size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                            <span className="text-white font-medium">GitHub</span>
                        </a>
                    </div>
                 </div>
            </div>
        </div>

        {/* Right Column: Form */}
        <div className="relative">
             {/* Decor */}
             <div className="absolute -inset-1 bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] rounded-2xl opacity-20 blur-lg transition-opacity duration-500 hover:opacity-30"></div>
             
             <form onSubmit={handleSubmit} className="relative bg-black border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Your name"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] outline-none transition-all placeholder:text-gray-600 text-white"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="your@email.com"
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] outline-none transition-all placeholder:text-gray-600 text-white"
                            required
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-gray-300">Subject</label>
                    <input 
                        type="text" 
                        id="subject" 
                        name="subject" 
                        value={formState.subject}
                        onChange={handleChange}
                        placeholder="Project inquiry"
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] outline-none transition-all placeholder:text-gray-600 text-white"
                        required
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <textarea 
                        id="message" 
                        name="message" 
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project..."
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-[#00D9FF] focus:ring-1 focus:ring-[#00D9FF] outline-none transition-all placeholder:text-gray-600 text-white resize-none"
                        required
                    />
                </div>

                <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-[#00D9FF] text-black font-bold rounded-lg hover:bg-[#00c2e6] transition-colors flex items-center justify-center gap-2"
                >
                    <Send size={18} />
                    Send Message
                </motion.button>
             </form>
        </div>
      </div>
    </section>
  );
};