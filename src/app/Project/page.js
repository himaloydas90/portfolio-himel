"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Globe, Server, Smartphone } from 'lucide-react';
import { GiThunderBlade } from 'react-icons/gi';

const projectsData = [
  {
    title: 'InOut - Daily Ledger',
    description: 'A secured personal finance and transaction ledger application to track daily income, expenses, and savings with real-time analytics.',
    tags: ['React', 'Redux Toolkit', 'Tailwind CSS', 'LocalStorage'],
    github: 'https://github.com/himaloydas90/IN_OUT-PROJECT',
    live: 'https://in-out-project.vercel.app/',
    icon: <Globe className="w-5 h-5 text-cyan-400" />,
    image: '/inout.png'
  },
  {
    title: 'AI SaaS Dashboard',
    description: 'An AI-powered dashboard integrated with OpenAI API to generate dynamic copy and graphics.',
    tags: ['React', 'TypeScript', 'Node.js', 'OpenAI'],
    github: '#',
    live: '#',
    icon: <Server className="w-5 h-5 text-purple-400" />,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'Fitness Tracker App',
    description: 'Mobile-responsive tracking application with interactive charts, goals, and workout plans.',
    tags: ['React Native', 'Tailwind', 'Firebase'],
    github: '#',
    live: '#',
    icon: <Smartphone className="w-5 h-5 text-emerald-400" />,
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'Dev Portfolio Premium',
    description: 'A highly optimized, clean developer portfolio featuring modern physics-based animations.',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    github: '#',
    live: '#',
    icon: <FolderGit2 className="w-5 h-5 text-amber-400" />,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=500&auto=format&fit=crop'
  }
];

const duplicatedProjects = [...projectsData, ...projectsData, ...projectsData];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export default function UltimatePremiumProjects() {
  const [isHovered, setIsHovered] = useState(false);
  const dragConstraintsRef = useRef(null);

  return (
    <section id='projects' className="py-24 px-4 sm:px-6 lg:px-8 xl:px-12 text-slate-100 relative overflow-hidden">
      {/* Dynamic Studio Lights (Glow effects) */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[140px] pointer-events-none animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Premium Header Design */}
        <div className="text-center mb-20 overflow-hidden">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full backdrop-blur-md mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
            <span className="text-xs font-bold tracking-widest text-indigo-300 uppercase">My Creations</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tight sm:text-6xl text-white"
          >
            Crafting Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">Masterpieces</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-slate-400 leading-relaxed font-light"
          >
            A curated showcase of dynamic full-stack applications built with architectural precision and high UI fidelity.
          </motion.p>
        </div>
      </div>

      {/* Infinite Horizontal Track Wrapper */}
      <motion.div 
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={fadeInUp.viewport}
        transition={{ duration: 0.7, delay: 0.3 }}
        ref={dragConstraintsRef}
        className="relative flex w-full overflow-hidden py-6 cursor-grab active:cursor-grabbing group/track"
        style={{
          maskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, white 15%, white 85%, transparent)'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Track */}
        <motion.div 
          className="flex gap-8 whitespace-nowrap px-6"
          drag="x"
          dragConstraints={dragConstraintsRef}
          dragElastic={0.2}
          dragMomentum={true} // Inertia scrolling effect
          animate={isHovered ? {} : { x: [0, -1450] }}
          transition={{
            ease: "linear",
            duration: 35, // Premium slower, smooth scroll
            repeat: Infinity,
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <div
              key={index}
              className="inline-block w-[310px] sm:w-[390px] shrink-0 whitespace-normal bg-gradient-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-xl border border-slate-800/60 rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-500 group hover:shadow-2xl hover:shadow-indigo-500/[0.04]"
            >
              {/* MacBook Window Mockup Header */}
              <div className="bg-slate-950/60 px-4 py-2.5 flex items-center justify-between border-b border-slate-900">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-slate-600 font-mono tracking-wider">production.env</span>
              </div>

              {/* Project Image Box with Hover Reveal Effect */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 pointer-events-none filter brightness-[0.85] group-hover:brightness-100"
                />
                
                {/* Modern Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                {/* Floating Category Badge inside image */}
                <span className="absolute bottom-3 left-4 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md text-[10px] border border-slate-800 text-slate-300 font-medium px-2.5 py-1 rounded-md">
                  {project.icon} Tech Canvas
                </span>
              </div>

              {/* Card Bottom Body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-400 transition-colors tracking-tight mb-2">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed line-clamp-2 h-[40px] mb-5 font-light">
                  {project.description}
                </p>

                {/* Glassmorphic Project Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex}
                      className="text-[10px] font-mono bg-indigo-500/[0.04] text-indigo-300/90 px-2.5 py-0.5 rounded border border-indigo-500/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Elegant Link Trigger Section */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-900">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group/btn"
                  >
                    <GiThunderBlade className="w-4 h-4 text-slate-500 group-hover/btn:text-white transition-colors" /> 
                    <span>Source Code</span>
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-cyan-400 transition-colors group/link"
                  >
                    <span>View Project</span> 
                    <ExternalLink className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}