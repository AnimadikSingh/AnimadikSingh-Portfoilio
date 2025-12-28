import React from 'react';
import { SectionId, Project } from '../types';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Github, Activity, Layers, ArrowUpRight, BarChart2, CheckSquare, Music } from 'lucide-react';

interface ExtendedProject extends Omit<Project, 'id'> {
    id: number;
    icon: React.ReactNode;
    color: string;
}

const projects: ExtendedProject[] = [
  {
    id: 1,
    title: "MEDIBUDDY",
    description: "An intelligent medical analysis platform designed to track health data and interpret medical reports. Features condition-based alerts, emergency notifications, and a professional dashboard with an integrated AI chatbot for health monitoring.",
    tags: ["React", "TypeScript", "HealthTech", "AI Integration"],
    link: "https://github.com/AnimadikSingh/Medical-Report-Summary",
    icon: <Activity />,
    color: "#00D9FF"
  },
  {
    id: 2,
    title: "AlgoVisualizer",
    description: "Interactive pathfinding and sorting algorithm visualizer. Demonstrates complex data structure algorithms like Dijkstra, A*, QuickSort, and MergeSort in real-time with adjustable speed and input size controls.",
    tags: ["React", "Algorithms", "DSA", "Interactive"],
    link: "https://github.com/AnimadikSingh", 
    icon: <BarChart2 />,
    color: "#FFD700"
  },
  {
    id: 3,
    title: "TaskFlow Manager",
    description: "A comprehensive project management tool featuring drag-and-drop Kanban boards, team collaboration features, and real-time updates. Built with the MERN stack to ensure seamless synchronization across devices.",
    tags: ["MERN Stack", "Socket.io", "MongoDB", "Redux"],
    link: "https://github.com/AnimadikSingh", 
    icon: <CheckSquare />,
    color: "#FF0055"
  },
  {
    id: 4,
    title: "MusicFy",
    description: "An immersive AI-powered music streaming experience. Generates mood-based playlists using OpenAI, features real-time lyrics synchronization, and includes a WebGL audio visualizer. Designed for a seamless, high-fidelity listening session.",
    tags: ["React", "OpenAI API", "Web Audio", "Tailwind"],
    link: "https://github.com/AnimadikSingh", 
    icon: <Music />,
    color: "#10B981"
  },
  {
    id: 5,
    title: "Animadik Portfolio",
    description: "The immersive 3D experience you are viewing right now. A high-performance personal portfolio built with React Three Fiber for WebGL rendering, Framer Motion for complex physics-based animations, and a custom glassmorphism design system.",
    tags: ["Three.js", "React Fiber", "Framer Motion", "Tailwind"],
    link: "https://github.com/AnimadikSingh", 
    icon: <Layers />,
    color: "#9D4EDD"
  }
];

function ProjectCard({ project }: { project: ExtendedProject }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative border border-white/10 bg-white/[0.02] overflow-hidden rounded-2xl transition-colors hover:border-white/20"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect Gradient */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${project.color}15,
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative h-full p-8 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Icon Column */}
          <div className="shrink-0 relative">
             <div 
                className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center bg-black/40 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl"
                style={{ color: project.color, boxShadow: `0 0 0 1px ${project.color}10` }}
             >
                {React.cloneElement(project.icon as React.ReactElement<any>, { size: 36, strokeWidth: 1.5 })}
             </div>
             {/* Connector Line (Desktop) */}
             <div className="absolute top-10 left-full w-8 h-[1px] bg-gradient-to-r from-white/20 to-transparent hidden md:block" />
          </div>

          {/* Content Column */}
          <div className="flex-1 z-10">
              <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                        {project.title}
                    </h3>
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2 rounded-full bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
                  >
                      <ArrowUpRight size={20} />
                  </a>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8 font-light text-lg">
                  {project.description}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/5 pt-6">
                  <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 text-xs font-mono font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors">
                              {tag}
                          </span>
                      ))}
                  </div>

                  <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-gray-300 hover:text-[#00D9FF] transition-colors"
                  >
                      <Github size={18} /> 
                      <span className="hidden sm:inline">Source Code</span>
                      <span className="sm:hidden">View</span>
                  </a>
              </div>
          </div>
      </div>
    </motion.div>
  );
}

export const Projects: React.FC = () => {
  return (
    <section id={SectionId.WORK}>
      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-6">Featured Projects</h2>
        <div className="h-1 w-20 bg-[#00D9FF] rounded-full" />
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};