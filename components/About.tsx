import React from 'react';
import { SectionId } from '../types';
import { motion } from 'framer-motion';
import { 
  Code2, Database, Terminal, Layout, Server, Globe, GitBranch, Box, Coffee, FileJson, 
  Trophy, BrainCircuit, Sparkles, FolderGit2, GraduationCap, School, BookOpen, MapPin, Calendar, Award,
  Cpu, Layers
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  tag: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <Terminal size={20} />, color: '#3776AB', tag: '.py' },
      { name: 'Java', icon: <Coffee size={20} />, color: '#E76F00', tag: '.java' },
      { name: 'TypeScript', icon: <FileJson size={20} />, color: '#3178C6', tag: '.ts' },
      { name: 'JavaScript', icon: <FileJson size={20} />, color: '#F7DF1E', tag: '.js' },
      { name: 'C++', icon: <Code2 size={20} />, color: '#00599C', tag: '.cpp' }
    ]
  },
  {
    title: 'Frontend & 3D',
    skills: [
      { name: 'React', icon: <Layout size={20} />, color: '#61DAFB', tag: 'JSX' },
      { name: 'Next.js', icon: <Layout size={20} />, color: '#FFFFFF', tag: 'SSR' },
      { name: 'Three.js', icon: <Box size={20} />, color: '#FFFFFF', tag: 'WebGL' },
      { name: 'Tailwind', icon: <Layers size={20} />, color: '#38B2AC', tag: 'CSS' }
    ]
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'SQL', icon: <Database size={20} />, color: '#4479A1', tag: 'DB' },
      { name: 'MongoDB', icon: <Server size={20} />, color: '#47A248', tag: 'NoSQL' },
      { name: 'Git', icon: <GitBranch size={20} />, color: '#F05032', tag: 'VCS' },
      { name: 'VS Code', icon: <Terminal size={20} />, color: '#007ACC', tag: 'IDE' }
    ]
  }
];

const highlights = [
  { label: 'Projects Done', value: '8+', icon: <FolderGit2 size={24} />, color: '#00D9FF' },
  { label: 'Hackathons', value: '10+', icon: <Trophy size={24} />, color: '#FFD700' },
  { label: 'Exploring', value: 'AI / ML', icon: <BrainCircuit size={24} />, color: '#9D4EDD' },
  { label: 'Learning', value: 'GenAI & LLMs', icon: <Sparkles size={24} />, color: '#FF0055' },
];

const educationData = [
  { 
    title: "B.Tech in CSE", 
    place: "GLA University, Mathura", 
    desc: "Pursuing Computer Science and Engineering with a focus on Full Stack Development and DSA.", 
    status: "Present",
    type: "University",
    icon: <GraduationCap size={24} />,
    color: "#00D9FF" 
  },
  { 
    title: "Class XII (CBSE)", 
    place: "Delhi Public School, Kalyanpur", 
    grade: "80%", 
    status: "Completed",
    type: "High School",
    icon: <School size={24} />,
    color: "#9D4EDD" 
  },
  { 
    title: "Class X (CBSE)", 
    place: "Delhi Public School, Kalyanpur", 
    grade: "90%", 
    status: "Completed",
    type: "Secondary School",
    icon: <BookOpen size={24} />,
    color: "#FF0055" 
  }
];

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="relative py-20">
      <div className="flex flex-col gap-24">
        
        {/* Education Section */}
        <div className="w-full">
            <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-12"
            >
                <div className="p-3 rounded-2xl bg-[#00D9FF]/10 text-[#00D9FF] border border-[#00D9FF]/20">
                    <GraduationCap size={28} />
                </div>
                <div>
                    <h2 className="text-4xl font-bold text-white">Education</h2>
                    <p className="text-gray-400 text-sm mt-1">Academic background and qualifications</p>
                </div>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {educationData.map((edu, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.15 }}
                        className="group relative h-full"
                    >
                         {/* Animated Background Glow */}
                         <div 
                             className="absolute inset-0 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" 
                             style={{ backgroundColor: edu.color }} 
                         />
                         
                         <div className="relative h-full flex flex-col p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/50">
                             
                             {/* Card Header */}
                             <div className="flex justify-between items-start mb-6">
                                 <div 
                                    className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-white transition-all duration-300 group-hover:scale-110 shadow-lg"
                                    style={{ color: edu.color, boxShadow: `0 0 0 1px ${edu.color}15` }}
                                 >
                                     {edu.icon}
                                 </div>
                                 <div className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-mono uppercase tracking-widest text-gray-400 flex items-center gap-2 group-hover:bg-white/10 transition-colors">
                                     <div className={`w-1.5 h-1.5 rounded-full ${edu.status === 'Present' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                                     {edu.status}
                                 </div>
                             </div>
                             
                             {/* Card Content */}
                             <div className="mb-6 flex-1">
                                 <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                                     {edu.title}
                                 </h3>
                                 <div className="flex items-start gap-2 text-sm text-gray-400 mb-4 font-medium">
                                     <MapPin size={14} className="mt-0.5 shrink-0 text-gray-500" />
                                     <span>{edu.place}</span>
                                 </div>
                                 
                                 {edu.desc && (
                                     <p className="text-sm text-gray-400 leading-relaxed border-t border-white/5 pt-4 opacity-80 group-hover:opacity-100 transition-opacity">
                                         {edu.desc}
                                     </p>
                                 )}
                             </div>
                             
                             {/* Card Footer */}
                             {edu.grade && (
                                 <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                                     <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">Aggregate</span>
                                     <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                                         <Award size={14} style={{ color: edu.color }} />
                                         <span className="text-sm font-bold text-white">{edu.grade}</span>
                                     </div>
                                 </div>
                             )}
                             
                             {!edu.grade && (
                                 <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-end group-hover:border-white/10">
                                     <span className="text-[10px] font-mono text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">{edu.type}</span>
                                 </div>
                             )}
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>

        {/* Technical Skills Section */}
        <div className="w-full">
            <h2 className="text-4xl font-bold mb-6">Technical Skills</h2>
            <div className="h-1 w-20 bg-[#9D4EDD] mb-10 rounded-full" />
            
            <div className="flex flex-col gap-8">
              {skillCategories.map((category, catIndex) => (
                <div key={category.title}>
                  <h3 className="text-lg font-bold text-gray-400 mb-4 uppercase tracking-wider text-sm flex items-center gap-2">
                     <span className="w-2 h-2 rounded-full bg-[#00D9FF]"></span>
                     {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: catIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover="hover"
                        className="group relative h-16 bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden flex items-center px-4 justify-between backdrop-blur-sm rounded-sm cursor-default"
                        style={{
                            clipPath: "polygon(0 0, 100% 0, 100% 70%, 90% 100%, 0 100%)"
                        }}
                      >
                         <div 
                           className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                           style={{ background: `linear-gradient(90deg, transparent, ${skill.color})` }}
                         />
                         
                         <div className="flex items-center gap-3 relative z-10">
                            <div 
                                className="p-1.5 rounded bg-black/50 text-gray-400 group-hover:text-white transition-colors duration-300 border border-white/5"
                                style={{ color: skill.color }} 
                            >
                                {skill.icon}
                            </div>
                            <span className="font-bold text-gray-200 group-hover:text-white tracking-wide text-sm">{skill.name}</span>
                         </div>

                         <div className="flex flex-col items-end gap-1 relative z-10">
                            <span className="text-[10px] font-mono text-gray-500 group-hover:text-[#00D9FF] transition-colors">{skill.tag}</span>
                            <div className="flex gap-1">
                                <motion.div 
                                    className="w-1.5 h-1.5 rounded-sm bg-gray-700"
                                    variants={{ hover: { backgroundColor: skill.color } }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.div 
                                    className="w-1.5 h-1.5 rounded-sm bg-gray-700"
                                    variants={{ hover: { backgroundColor: skill.color } }}
                                    transition={{ duration: 0.2, delay: 0.1 }}
                                />
                            </div>
                         </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
        </div>

        {/* Current Status (Highlights) */}
        <div className="w-full">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-10 h-[1px] bg-gray-600"></span>
                Current Status
                <span className="w-full h-[1px] bg-gray-600/30"></span>
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {highlights.map((item, idx) => (
                    <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ y: -8, backgroundColor: "rgba(255,255,255,0.08)" }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-5 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00D9FF]/30 transition-all group relative overflow-hidden"
                    >
                         {/* Hover glow effect */}
                         <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex justify-between items-start mb-2 relative z-10">
                            <span className="text-gray-400 text-xs font-mono uppercase">{item.label}</span>
                            <div style={{ color: item.color }} className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                                {item.icon}
                            </div>
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-[#00D9FF] transition-colors relative z-10">
                            {item.value}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};