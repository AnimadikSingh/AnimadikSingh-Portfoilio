import React from 'react';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Achievements } from './Achievements';
import { Contact } from './Contact';

export const Overlay: React.FC = () => {
  return (
    <div className="w-full min-h-screen text-white selection:bg-[#00D9FF] selection:text-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <Hero />
        <div className="relative z-20 space-y-32 pb-32">
            <About />
            <Projects />
            <Achievements />
            <Contact />
        </div>
      </div>
      <footer className="w-full py-8 text-center text-white/30 text-sm backdrop-blur-sm bg-black/20">
        © {new Date().getFullYear()} Animadik Singh. Built with React & Three.js.
      </footer>
    </div>
  );
};