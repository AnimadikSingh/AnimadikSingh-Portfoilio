import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Code2, Terminal, Cpu, Braces, Mail, Sparkles, Instagram, Linkedin, Send } from 'lucide-react';
import { SectionId } from '../types';

export const Hero: React.FC = () => {
  // Mouse position state for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  // Tilt rotation mapping
  const rotateX = useTransform(mouseY, [-0.5, 0.5], [8, -8]); 
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;
    
    const xPct = clientX / width - 0.5;
    const yPct = clientY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id={SectionId.HOME} 
      className="min-h-screen flex items-center justify-center pt-20 relative perspective-container"
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="relative w-full max-w-6xl mx-auto p-4 md:p-12"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Holographic Glass Container */}
        <div 
          className="absolute inset-0 bg-white/[0.02] rounded-[3rem] border border-white/5 shadow-2xl backdrop-blur-[2px]"
          style={{ transform: "translateZ(-40px)" }}
        >
             {/* Tech Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20 rounded-[3rem] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            {/* Dynamic Glow Gradient */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#00D9FF]/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#9D4EDD]/10 rounded-full blur-3xl" />
        </div>

        {/* Floating 3D Tech Icons (Parallax Layer) */}
        <motion.div 
            className="hidden md:block absolute -top-12 right-12 text-[#00D9FF]/20 z-0" 
            style={{ transform: "translateZ(30px)" }}
        >
            <Braces size={140} strokeWidth={1} />
        </motion.div>
        <motion.div 
            className="hidden md:block absolute bottom-20 -left-8 text-[#9D4EDD]/20 z-0" 
            style={{ transform: "translateZ(50px)" }}
        >
            <Terminal size={120} strokeWidth={1} />
        </motion.div>
         <motion.div 
            className="hidden md:block absolute top-1/2 right-20 text-white/5 z-0" 
            style={{ transform: "translateZ(20px)" }}
        >
            <Cpu size={100} strokeWidth={0.5} />
        </motion.div>

        {/* Main Content Layer */}
        <div className="relative z-10 md:pl-8" style={{ transform: "translateZ(60px)" }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/20 text-[#00D9FF] text-sm font-semibold mb-8 backdrop-blur-md"
            >
              <Code2 size={16} /> B.Tech CSE Student
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-tight mb-8 tracking-tight"
            >
              I am <span className="relative inline-block group">
                  <span className="absolute inset-0 blur-lg bg-gradient-to-r from-[#00D9FF] to-[#9D4EDD] opacity-30 group-hover:opacity-60 transition-opacity duration-300"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] via-white to-[#9D4EDD] hover:text-white transition-colors duration-300 cursor-default">
                    Animadik Singh
                  </span>
              </span>.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-2xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light"
            >
              Crafting <span className="text-gray-100 font-medium">immersive digital experiences</span>. Full Stack Developer & Competitive Programmer building the future of the web with React & AI.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              {/* Unique View Projects Button */}
              <a
                href={`#${SectionId.WORK}`}
                onClick={(e) => handleScrollTo(e, SectionId.WORK)}
                className="group relative px-8 py-4 bg-white text-black rounded-xl font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
              >
                 <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00D9FF] to-[#00B4D8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                 <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                    View Projects <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </span>
              </a>

              {/* Unique Contact Me Button */}
              <a
                href={`#${SectionId.CONTACT}`}
                onClick={(e) => handleScrollTo(e, SectionId.CONTACT)}
                className="group relative px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md text-white rounded-xl font-bold overflow-hidden transition-all hover:scale-105 hover:border-[#9D4EDD]/50 hover:shadow-[0_0_40px_rgba(157,78,221,0.3)] flex items-center gap-2"
              >
                <div className="absolute inset-0 bg-[#9D4EDD]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail size={18} className="text-[#9D4EDD] group-hover:rotate-12 transition-transform relative z-10" />
                <span className="relative z-10">Contact Me</span>
              </a>

              {/* Social Links Divider (Desktop only) */}
              <div className="h-8 w-[1px] bg-white/10 hidden sm:block mx-2"></div>

              {/* Social Icons */}
              <div className="flex items-center gap-4">
                 {/* Instagram */}
                 <a 
                   href="https://www.instagram.com/anixx_1209?igsh=YThnZ2Vkdzd4MjJr"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#E1306C]/50 hover:text-[#E1306C] hover:shadow-[0_0_20px_rgba(225,48,108,0.3)] transition-all hover:scale-110"
                   title="Instagram"
                 >
                   <Instagram size={20} />
                 </a>

                 {/* Telegram */}
                 <a 
                   href="https://t.me/Animadik_singh"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0088cc]/50 hover:text-[#0088cc] hover:shadow-[0_0_20px_rgba(0,136,204,0.3)] transition-all hover:scale-110"
                   title="Telegram"
                 >
                   <Send size={20} />
                 </a>

                 {/* LinkedIn */}
                 <a 
                   href="https://www.linkedin.com/in/animadik-singh"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#0077b5]/50 hover:text-[#0077b5] hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] transition-all hover:scale-110"
                   title="LinkedIn"
                 >
                   <Linkedin size={20} />
                 </a>
              </div>
            </motion.div>
        </div>
      </motion.div>
    </section>
  );
};