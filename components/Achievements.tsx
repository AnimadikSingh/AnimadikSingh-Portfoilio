import React from 'react';
import { SectionId } from '../types';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, Terminal, BarChart2, ArrowUpRight, Target, Zap, Award, BadgeCheck, ExternalLink } from 'lucide-react';

const profiles = [
  { 
      name: 'LeetCode', 
      specialty: 'Algorithms',
      link: 'https://leetcode.com/u/Animadik/', 
      icon: <Code size={28} />,
      color: '#FFA116', // LeetCode Orange
      gradient: 'from-[#FFA116]/20 to-transparent'
  },
  { 
      name: 'GeeksForGeeks', 
      specialty: 'Data Structures',
      link: 'https://www.geeksforgeeks.org/profile/animadiksryri?tab=overview', 
      icon: <Terminal size={28} />,
      color: '#2F8D46', // GFG Green
      gradient: 'from-[#2F8D46]/20 to-transparent'
  },
  { 
      name: 'CodeForces', 
      specialty: 'Contests',
      link: 'https://codeforces.com/profile/Animadik', 
      icon: <BarChart2 size={28} />,
      color: '#1F8ACB', // Codeforces Blue
      gradient: 'from-[#1F8ACB]/20 to-transparent'
  }
];

const certifications = [
    {
        title: 'Young Turks Achievement',
        issuer: 'Naukri.com',
        date: '2025',
        link: 'https://www.naukri.com/campus/certificates/young_turks25_round_1_achievement/v0/68d9be7cabe8a1724df79091?utm_source=certificate&utm_medium=copy&utm_campaign=68d9be7cabe8a1724df79091',
        icon: <Award size={32} />,
        color: '#FF6B6B',
        desc: 'Recognized for top-tier problem solving skills in Round 1.',
        badge: 'Round 1'
    },
    {
        title: 'NPTEL Certification',
        issuer: 'IIT / NPTEL',
        date: '2024',
        link: 'https://drive.google.com/file/d/18_jNyjoYICg0bnhcbYRRHTT45QWXkJoo/view?usp=sharing',
        icon: <BadgeCheck size={32} />,
        color: '#4CC9F0',
        desc: 'Advanced level certification with Elite status.',
        badge: 'Elite'
    }
];

const ProfileCard = ({ profile, index }: { profile: any, index: number }) => {
  // Motion values for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for the tilt
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{ perspective: 1000 }}
      className="h-full w-full"
    >
      <motion.a
        href={profile.link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="block relative h-full w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:border-white/20 group"
      >
        {/* Ambient Glow Gradient */}
        <div 
            className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${profile.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} 
            style={{ transform: "translateZ(-20px)" }}
        />

        {/* Card Content with Parallax Depth */}
        <div className="relative p-8 h-full flex flex-col justify-between" style={{ transform: "translateZ(30px)" }}>
            
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div 
                    className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-black/50 shadow-lg"
                    style={{ color: profile.color, boxShadow: `0 0 0 1px ${profile.color}20` }}
                >
                    {profile.icon}
                </div>
                <div className="p-2 rounded-full bg-white/5 text-gray-500 group-hover:text-white group-hover:bg-white/20 transition-all duration-300">
                    <ArrowUpRight size={18} />
                </div>
            </div>

            {/* Body */}
            <div>
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:tracking-wide transition-all duration-300">
                    {profile.name}
                </h3>
                
                {/* Stats Grid - Just Focus Area now */}
                <div className="mt-4">
                    <div className="bg-white/5 rounded-lg p-4 border border-white/5 group-hover:border-white/10 transition-colors backdrop-blur-md flex items-center justify-between">
                        <div>
                            <p className="text-[10px] uppercase tracking-wider text-gray-500 mb-1 font-mono">Primary Focus</p>
                            <div className="flex items-center gap-2 text-white font-bold text-sm">
                                <Target size={14} className="text-gray-400" />
                                {profile.specialty}
                            </div>
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5">
                             <Zap size={14} style={{ color: profile.color }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Tech Elements */}
            <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <Zap size={80} strokeWidth={1} />
            </div>
        </div>
      </motion.a>
    </motion.div>
  );
};

const CertificationCard = ({ cert, index }: { cert: any, index: number }) => {
    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            style={{ perspective: 1000 }}
            className="w-full h-full"
        >
            <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={handleMouseMove}
                onMouseLeave={() => { x.set(0); y.set(0); }}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="group relative block h-full w-full bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/30 transition-all duration-300"
            >
                {/* Holographic Sheen */}
                <div 
                    className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" 
                    style={{ transform: "translateZ(10px)" }}
                />

                <div className="relative p-6 flex items-start gap-4 h-full" style={{ transform: "translateZ(20px)" }}>
                    {/* Icon Box */}
                    <div 
                        className="shrink-0 p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                        style={{ color: cert.color, boxShadow: `0 0 15px -5px ${cert.color}40` }}
                    >
                        {cert.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                         <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-gray-400 font-mono mt-1">{cert.issuer}</p>
                            </div>
                            <ExternalLink size={16} className="text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100" />
                         </div>

                         <div className="mt-4 pt-4 border-t border-white/5">
                             <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                                 {cert.desc}
                             </p>
                             
                             <div className="flex items-center justify-between">
                                 <span className="text-[10px] bg-white/5 px-2 py-1 rounded border border-white/5 text-gray-500 font-mono">{cert.date}</span>
                                 <span 
                                    className="text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors"
                                    style={{ color: cert.color }}
                                 >
                                     {cert.badge}
                                 </span>
                             </div>
                         </div>
                    </div>
                </div>
            </motion.a>
        </motion.div>
    );
};

export const Achievements: React.FC = () => {
  return (
    <section id={SectionId.ACHIEVEMENTS} className="py-20 relative">
      {/* Coding Profiles Section */}
      <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <div>
                <h2 className="text-4xl font-bold mb-2">Coding Profiles</h2>
                <div className="h-1 w-20 bg-[#9D4EDD] rounded-full" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <ProfileCard key={profile.name} profile={profile} index={index} />
            ))}
          </div>
      </div>

      {/* Certifications Section */}
      <div>
          <div className="flex items-center gap-4 mb-12">
            <div>
                <h2 className="text-4xl font-bold mb-2">Certifications</h2>
                <div className="h-1 w-20 bg-[#00D9FF] rounded-full" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {certifications.map((cert, index) => (
                 <CertificationCard key={cert.title} cert={cert} index={index} />
             ))}
          </div>
      </div>
    </section>
  );
};