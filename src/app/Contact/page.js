"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, ArrowRight } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

export default function AnimatedContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 🎯 Scroll triggered animation variables
  const scrollFadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.8 } 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <main id='contact' className="min-h-screen text-slate-100 py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 🔮 Animated Studio Glow Lights */}
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1], 
          opacity: [0.04, 0.08, 0.04],
          x: [0, 40, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px] pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1], 
          opacity: [0.03, 0.06, 0.03],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 🎯 Heading section with viewport trigger */}
        <motion.div 
          variants={scrollFadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Niche theke scroll korlei heading show hobe
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-full mb-4">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Let's Start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Project Together</span>
          </h1>
          <p className="text-slate-400 font-light text-base sm:text-lg">
            Have a question, a brilliant idea, or just want to say hello? Drop a message and let's craft something incredible.
          </p>
        </motion.div>

        {/* Contact Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
          
          {/* Left Column: Contact Cards with Viewport Motion */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="space-y-4">
              
              {/* Mail Card */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(168, 85, 247, 0.4)" }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex gap-4 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-1">Email Me</h3>
                  <p className="text-xs text-slate-500 mb-1">Available for freelance/roles</p>
                  <a href="mailto:admin@example.com" className="text-sm text-white hover:text-purple-400 transition-colors font-medium">himaloydas90@gmail.com</a>
                </div>
              </motion.div>

              {/* Call Card */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(34, 211, 238, 0.4)" }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex gap-4 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-1">Call Me</h3>
                  <p className="text-xs text-slate-500 mb-1">Mon - Fri • 9am - 6pm</p>
                  <a href="tel:+880123456789" className="text-sm text-white hover:text-cyan-400 transition-colors font-medium">+880 1620 580307</a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div 
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.01, borderColor: "rgba(168, 85, 247, 0.4)" }}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md flex gap-4 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-slate-300 mb-1">Location</h3>
                  <p className="text-xs text-slate-500 mb-1">Remote worldwide</p>
                  <span className="text-sm text-slate-200 font-medium">Dhaka, Bangladesh</span>
                </div>
              </motion.div>

            </div>

            {/* Social Links Section */}
            <motion.div 
              variants={cardVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/60 to-purple-950/10 border border-slate-800/50 backdrop-blur-md"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">Connect Socially</h4>
              <div className="flex gap-3">
                {[
                  { icon: <FaGithub />, link: 'https://github.com/himaloydas90', hover: 'hover:text-white hover:border-white' },
                  { icon: <FaLinkedin />, link: 'https://www.facebook.com/himaloydas.amit/', hover: 'hover:text-blue-400 hover:border-blue-400' },
                  { icon: <BsTwitter />, link: 'https://www.facebook.com/himaloydas.amit/', hover: 'hover:text-cyan-400 hover:border-cyan-400' },
                  { icon: <FaFacebook />, link: 'https://www.facebook.com/himaloydas.amit/', hover: 'hover:text-purple-400 hover:border-purple-400' }
                ].map((social, idx) => (
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    key={idx} href={social.link} 
                    className={`w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-850 flex items-center justify-center text-slate-400 transition-all text-base ${social.hover}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Contact Form with Viewport Slide In */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={scrollFadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/60 to-slate-900/20 border border-slate-800/80 backdrop-blur-xl relative"
            >
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">✓</div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-sm text-slate-400 max-w-sm mx-auto font-light mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                  <button onClick={() => setSubmitted(false)} className="text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-1">
                    Send another message <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-slate-500" /> Full Name</label>
                      <input type="text" required name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" className="w-full bg-slate-950/60 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-slate-500" /> Email Address</label>
                      <input type="email" required name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" className="w-full bg-slate-950/60 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-slate-500" /> Subject</label>
                    <input type="text" required name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Discussion" className="w-full bg-slate-950/60 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-slate-500" /> Your Message</label>
                    <textarea required name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." className="w-full bg-slate-950/60 border border-slate-850 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors resize-none" />
                  </div>
                  <motion.button whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} type="submit" disabled={isSubmitting} className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium text-sm py-4 flex items-center justify-center gap-2 transition-all disabled:opacity-50 group">
                    {isSubmitting ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <>Send Message <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" /></>}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>

        </div>

      </div>
    </main>
  );
}