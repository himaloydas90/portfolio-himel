"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  // Static Roles Memoized pattern
  const roles = useMemo(() => [
    "Full-Stack Web Developer.",
    "UI/UX Designer.",
    "React Specialist.",
    "Problem Solver."
  ], []);

  const [currentRole, setCurrentRole] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const fullText = roles[currentRole];
    const speed = isDeleting ? 50 : 90;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(fullText.slice(0, displayed.length + 1));
        if (displayed.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayed(fullText.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => timeoutRef.current && clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, currentRole, mounted, roles]);

  // Animation Framework Variables
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  const techStack = ['React', 'Next.js', 'Tailwind', 'Node.js', 'TypeScript'];

  return (
    <section id='home' className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden pt-[12vh]">
      {/* Background Animated Ambient Light Loop */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500/20 blur-[120px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column Content Header */}
        <motion.div 
          initial="hidden" animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="flex-1 text-center md:text-left space-y-6"
        >
          <motion.span variants={fadeInUp} className="text-amber-400 font-mono tracking-wider text-sm md:text-base font-semibold block">
            Hi, my name is
          </motion.span>
          
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 min-h-[160px] sm:min-h-[180px] md:min-h-[220px]">
            Himel Das. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 inline-block relative pr-2">
              I am a {displayed}
              <span className="absolute right-0 bottom-1 w-[3px] h-[85%] bg-orange-400 animate-pulse ml-1" aria-hidden="true" />
            </span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
            I'm a Full-Stack Web Developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on crafting responsive, user-centric applications.
          </motion.p>

          {/* Tech Stack Mapping Array */}
          <motion.div variants={containerVariants} className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            {techStack.map((tech) => (
              <motion.span 
                key={tech} variants={badgeVariants}
                whileHover={{ scale: 1.05, borderColor: "rgb(251, 191, 36)" }}
                className="px-3 py-1 text-xs font-mono bg-slate-800/60 border border-slate-700 rounded-full text-slate-300 cursor-default transition-colors duration-200"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Action Anchors */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-4">
            <motion.a 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#projects" 
              className="px-8 py-3 rounded-lg font-medium bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 hover:opacity-90 shadow-lg shadow-orange-500/20 text-center transition-all duration-200"
            >
              View My Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} href="#contact" 
              className="px-8 py-3 rounded-lg font-medium border border-slate-600 hover:border-amber-400 hover:text-amber-400 text-center transition-all duration-200"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Dynamic Canvas Media Panel */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center relative"
        >
          <motion.div 
            animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-slate-700/50 p-3 bg-slate-800/40 backdrop-blur-sm shadow-2xl"
          >
            <Image 
              src="/bannar.jpg" alt="Developer Coding Portfolio" fill priority
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              className="object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500 p-3"
            />
          </motion.div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-amber-500/60 rounded-br-xl hidden sm:block" />
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-blue-500/60 rounded-tl-xl hidden sm:block" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;