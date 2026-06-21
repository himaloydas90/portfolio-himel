"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Briefcase, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import { BsTwitter } from 'react-icons/bs';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-slate-800/60 pt-20 pb-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column with Fixed Logo */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/#home" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-slate-800/50">
                <Image 
                  src="/logo.png" 
                  alt="Logo" 
                  fill
                  className="object-cover"
                />
              </div>
              <span className="text-3xl font-black text-white tracking-tighter">
                DEV<span className="text-purple-500">HIMEL.</span>
              </span>
            </Link>
            
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm mb-6">
              Crafting high-performance web experiences with modern architecture. 
              Join the journey of building faster, cleaner, and smarter digital products.
            </p>
            
            <div className="flex gap-3">
              {[
                { icon: <FaGithub />, href: 'https://github.com/himaloydas90' },
                { icon: <BsTwitter />, href: 'https://twitter.com/your-username' },
                { icon: <LiaLinkedin />, href: 'https://linkedin.com/in/your-username' },
                { icon: <FaFacebook />, href: 'https://www.facebook.com/himaloydas.amit/' },
                { icon: <Mail />, href: 'mailto:your-email@example.com' }
              ].map((social, i) => (
                <motion.a 
                  key={i} 
                  whileHover={{ y: -5 }} 
                  whileTap={{ scale: 0.9 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-purple-400 hover:border-purple-500/50 transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Menu</h4>
            <ul className="space-y-4">
              {[
                { label: 'Home', path: '/' },
                { label: 'Blog', path: '/#blog' },
                { label: 'Contact', path: '/#contact' },
                { label: 'Projects', path: '/#projects' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="text-sm text-slate-300 hover:text-purple-400 transition-colors flex items-center group">
                    {item.label}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
              <Briefcase className="w-3 h-3" /> Career
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                { label: 'Remote Work', path: '/career/remote' },
                { label: 'Open Source', path: '/career/open-source' },
                { label: 'Interviews', path: '/career/interviews' },
                { label: 'Burnout Care', path: '/career/burnout-care' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="hover:text-purple-400 transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6 flex items-center gap-2">
              <BookOpen className="w-3 h-3" /> Resources
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              {[
                { label: 'Newsletter', path: '/newsletter' },
                { label: 'Style Guide', path: '/style-guide' },
                { label: 'Code Snippets', path: '/snippets' },
                { label: 'Support', path: '/support' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.path} className="hover:text-purple-400 transition-colors block">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500"
        >
          <p>© {currentYear} DevHimel. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-red-500">♥</span> using Next.js & Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}