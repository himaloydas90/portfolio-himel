"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaPalette, FaLightbulb, FaRocket } from 'react-icons/fa';

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const statistics = useMemo(() => [
    { number: "5+", label: "Years Experience" },
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "24/7", label: "Dedicated Support" }
  ], []);

  const coreValues = useMemo(() => [
    { 
      icon: <FaCode className="text-amber-400 text-2xl" />, 
      title: "Clean Code", 
      desc: "Writing maintainable, scalable, and pixel-perfect code following industry best practices." 
    },
    { 
      icon: <FaPalette className="text-orange-400 text-2xl" />, 
      title: "UI/UX Driven", 
      desc: "Crafting beautiful interfaces with a deep focus on user experience and seamless interactions." 
    },
    { 
      icon: <FaLightbulb className="text-blue-400 text-2xl" />, 
      title: "Creative Solutions", 
      desc: "Approaching complex problems with outside-the-box thinking and robust engineering." 
    },
    { 
      icon: <FaRocket className="text-purple-400 text-2xl" />, 
      title: "Performance", 
      desc: "Optimizing asset loaders, minimizing latency, and striving for 100% PageSpeed scores." 
    }
  ], []);

  return (
    <main id='about' className="w-full min-h-screen text-white pt-[14vh] pb-20 overflow-hidden relative">
      
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 space-y-24">
        
        {/* SECTION 1: HERO BRIEF */}
        <motion.div 
          initial="hidden" animate="visible" variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
            <motion.span variants={fadeInUp} className="text-amber-400 font-mono text-sm tracking-wider uppercase font-semibold block">
              Our Story / Who I Am
            </motion.span>
            {/* Hero Brief Heading এর জন্য এই অংশটি ব্যবহার করুন */}
<motion.h1 
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100"
>
  Crafting Digital Spaces with <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
    Purpose & Precision.
  </span>
</motion.h1>
            <motion.p variants={fadeInUp} className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Hello! I am a passionate developer committed to bridging the gap between elegant UI design and powerhouse backend architecture.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-72 h-72 sm:w-85 sm:h-85 rounded-2xl overflow-hidden border border-slate-800 p-3 bg-slate-900/40 backdrop-blur-md shadow-2xl group">
              <Image src="/amit.png" alt="About Studio Workspace" fill priority className="object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500 p-3" />
            </div>
          </motion.div>
        </motion.div>

        {/* SECTION 2: METRICS */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900/40 border border-slate-800/60 backdrop-blur-xs rounded-2xl p-8 shadow-xl"
        >
          {statistics.map((stat, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="text-center space-y-1">
              <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wide">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* SECTION 3: CORE VALUES / PHILOSOPHY */}
        <div className="space-y-12">
          <div className="text-center space-y-3">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-orange-400 font-mono text-sm tracking-wider uppercase font-semibold block"
            >
              My Philosophy
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold tracking-tight"
            >
              The Core Pillars of My Work
            </motion.h2>
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: 64, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" 
            />
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {coreValues.map((value, idx) => (
              <motion.div 
                key={idx} variants={fadeInUp}
                whileHover={{ y: -6, borderColor: "rgba(251, 191, 36, 0.3)" }}
                className="bg-slate-900/30 border border-slate-800/80 p-6 rounded-xl transition-all duration-300 backdrop-blur-md shadow-sm space-y-4"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800/60 flex items-center justify-center border border-slate-700/40">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100">{value.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </main>
  );
};

export default AboutSection;