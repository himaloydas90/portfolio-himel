"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Layout, Database, Terminal, Cpu, Layers } from 'lucide-react';

const skillsData = [
  { name: 'JavaScript (ES6+)', category: 'Frontend', level: 90, icon: <Code2 className="w-6 h-6 text-yellow-400" /> },
  { name: 'React.js', category: 'Frontend', level: 95, icon: <Layout className="w-6 h-6 text-cyan-400" /> },
  { name: 'Next.js', category: 'Frontend', level: 90, icon: <Layers className="w-6 h-6 text-white" /> },
  { name: 'Tailwind CSS', category: 'Frontend', level: 95, icon: <Layout className="w-6 h-6 text-sky-400" /> },
  { name: 'TypeScript', category: 'Frontend', level: 80, icon: <Code2 className="w-6 h-6 text-blue-500" /> },
  { name: 'Node.js', category: 'Backend', level: 85, icon: <Terminal className="w-6 h-6 text-green-500" /> },
  { name: 'Express.js', category: 'Backend', level: 80, icon: <Cpu className="w-6 h-6 text-gray-400" /> },
  { name: 'MongoDB', category: 'Database', level: 75, icon: <Database className="w-6 h-6 text-emerald-500" /> },
  { name: 'PostgreSQL', category: 'Database', level: 70, icon: <Database className="w-6 h-6 text-blue-400" /> },
  { name: 'Git & GitHub', category: 'Tools', level: 85, icon: <Terminal className="w-6 h-6 text-orange-500" /> },
  { name: 'Docker', category: 'Tools', level: 60, icon: <Cpu className="w-6 h-6 text-sky-500" /> },
];

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools'];

// Common variants for clean bottom-to-top scroll animation
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export default function ProfessionalSkills() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id='skills' className="min-h-screen text-slate-100 py-20 px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-full mx-auto relative z-10">
        
        {/* Header Section with Scroll Animations */}
        <div className="text-center mb-16 overflow-hidden">
          <motion.span 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-full"
          >
            Expertise
          </motion.span>
          
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl font-black tracking-tight sm:text-5xl text-white"
          >
            Technical Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Tools</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-xl mx-auto text-base text-slate-400 leading-relaxed"
          >
            A look into the stack and technologies I use to build scalable, high-performance web applications.
          </motion.p>
        </div>

        {/* Filter Tabs with Scroll Animation */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUp.viewport}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-14 bg-slate-900/60 p-2 rounded-2xl max-w-xl mx-auto border border-slate-800 backdrop-blur-md"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-300 ${
                activeCategory === category ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                key={skill.name}
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/[0.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h4>
                      <span className="text-xs text-slate-500">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-cyan-400/80">{skill.level}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: (index * 0.05) + 0.2, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}