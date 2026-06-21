"use client";

import React, { use } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Share2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';

// স্লাইডার পেজ থেকে সরাসরি ডেটা ইমপোর্ট করা হচ্ছে
import { blogData } from '../page'; 

export default function BlogDetailsPage({ params }) {
  const resolvedParams = use(params);
  const { id } = resolvedParams; 

  // আইডি ম্যাচ করে ডেটা আনা হচ্ছে
  const blog = blogData.find(item => item.id === id) || blogData[0];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareOnFacebook = () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');

  return (
    <main className="min-h-screen bg-[#070b19] text-slate-100 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Glow Lights */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center justify-between mb-12">
          <Link href="/#blog" className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-purple-400 transition-colors group">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to Journal
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-light">
            <span>Home</span> <ChevronRight className="w-3 h-3" />
            <span>Blog</span> <ChevronRight className="w-3 h-3" />
            <span className="text-purple-400 truncate max-w-[150px]">{blog.title}</span>
          </div>
        </div>

        {/* Header */}
        <header className="mb-10">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase bg-purple-500/10 border border-purple-500/20 text-purple-300 px-3 py-1 rounded-full mb-6">
            {blog.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15] mb-6">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-900/80">
            <div className="flex items-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                  <User className="w-3 h-3 text-purple-400" />
                </div>
                By <span className="text-slate-200 font-medium">{blog.author || 'Admin'}</span>
              </span>
              <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-slate-500" /> {blog.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-slate-500" /> {blog.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={shareOnFacebook} className="p-2 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-purple-500/30 hover:text-purple-400 transition-all text-slate-400">
                <FaFacebook className="w-4 h-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Big Banner Image */}
        <div className="relative aspect-[21/10] w-full rounded-2xl overflow-hidden border border-slate-800/60 mb-12 bg-slate-950">
          <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
        </div>

        {/* 🎯 এখানে রেন্ডার হচ্ছে আপনার দেওয়া এক্সট্রা কন্টেন্টটি */}
        <article 
          className="prose prose-invert max-w-none text-slate-300 font-light leading-relaxed text-sm sm:text-base
            prose-headings:text-white prose-headings:font-bold
            prose-p:mb-6
            prose-blockquote:border-l-2 prose-blockquote:border-purple-500 prose-blockquote:bg-purple-500/[0.02] prose-blockquote:px-6 prose-blockquote:py-1"
          dangerouslySetInnerHTML={{ __html: blog.content || `<p>${blog.excerpt}</p>` }} 
        />

        {/* Footer Tags */}
        <footer className="mt-16 pt-8 border-t border-slate-900 flex justify-between items-center">
          <div className="flex gap-2">
            {['Next.js', 'WebDev'].map((tag) => (
              <span key={tag} className="text-[11px] font-mono bg-slate-900/80 text-slate-400 px-3 py-1 rounded-md border border-slate-800">
                #{tag}
              </span>
            ))}
          </div>
        </footer>

      </div>
    </main>
  );
}