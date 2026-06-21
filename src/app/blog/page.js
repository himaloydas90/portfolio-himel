"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight, User, BookOpen } from 'lucide-react';
import Link from 'next/link'; 

export const blogData = [
  // === Development Articles ===
  {
    id: 'nextjs-server-components',
    title: 'Mastering Next.js Server Components for Scalable Architecture',
    excerpt: 'Deep dive into React Server Components (RSC) and how they optimize loading performance for modern web apps.',
    category: 'Development',
    date: 'June 18, 2026',
    readTime: '5 min read',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80',
    detailsImage: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80', 
    content: `
      <p>React Server Components (RSC) represent a paradigm shift in how we build modern web applications. By shifting component rendering to the server, we can drastically reduce the JavaScript bundle size sent to the client, improving initial page loads and Core Web Vitals.</p>
      
      <h3>Why Server Components Matter</h3>
      <p>Traditionally, React applications rendered everything on the client-side. This meant users had to download large JS bundles before seeing any interactive elements. With Next.js Server Components, data fetching and rendering happen right next to your database, minimizing network latency.</p>
      
      
      <blockquote>"The best code is the code that never runs on the user's device. RSC takes this literally by keeping dependencies server-bound."</blockquote>
      
      <h3>Key Caching and Hydration Strategies</h3>
      <p>Next.js optimizes this further by introducing advanced caching matrices. Content can be statically generated at build time or dynamically fetched per request, ensuring your frontend architecture remains lightning-fast, secure, and universally scalable.</p>
      

    `
  },
  {
    id: 'react-custom-hooks',
    title: 'Building Clean and Reusable UI Systems with React Custom Hooks',
    excerpt: 'Stop rewriting useEffect logic. Learn how to extract clean abstract hooks for state synchronization and API wrappers.',
    category: 'Development',
    date: 'June 10, 2026',
    readTime: '6 min read',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80',
    detailsImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80',
    content: `
      <p>Custom hooks are the ultimate way to share logic between components without duplicating code. If you find yourself copying and pasting useEffect or useState patterns across multiple views, it is time to abstract them.</p>
      
      <h3>The Rules of State Synchronization</h3>
      <p>When custom hooks handle lifecycle side-effects, cleanup operations become vital. Properly returning a clearance callback inside your hook prevents ghost execution, unexpected state updates on unmounted nodes, and layout shifts.</p>
      
      <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80" alt="React Hook Architecture" class="w-full rounded-xl my-8 border border-slate-800/80" />

      <h3>Building Real-World API Wrappers</h3>
      <p>By capturing loading status, error metrics, and success payloads within a dynamic hook, you isolate complex state machinery away from presentational structures. This creates a highly clean, bulletproof codebase.</p>
    `
  },
  {
    id: 'typescript-generics',
    title: 'Advanced TypeScript Generics for Frontend Developers',
    excerpt: 'Unleash the full power of type safety by building dynamic, self-inferring components and strict data interfaces.',
    category: 'Development',
    date: 'May 29, 2026',
    readTime: '7 min read',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1581291518655-9523c932dedf?q=80',
    detailsImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80',
    content: `
      <p>Generics are to TypeScript what parameters are to standard JavaScript functions. They transform rigid, static type definitions into highly adaptive templates that maintain absolute type safety across complex data flows.</p>
      
      <h3>Mastering Dynamic Self-Inference</h3>
      <p>When building global reusable controls—like tables or select dropdowns—types should flow implicitly from the dataset passed to them. Generics enable React properties to seamlessly conform to unique interface boundaries.</p>
      
      <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80" alt="TypeScript Strict Types" class="w-full rounded-xl my-8 border border-slate-800/80" />

      <h3>Strict Identity Constraints</h3>
      <p>Using structural utilities like <code>extends keyof</code> allows engineers to tightly control object property tracking. This eliminates unexpected execution errors at runtime, paving the way for predictable builds.</p>
    `
  },
  {
    id: 'nextjs-optimization-guide',
    title: 'Ultimate Guide to Image and Font Optimization in Next.js',
    excerpt: 'Achieve a perfect 100 Lighthouse score by correctly prioritizing layout shifts and layout masking techniques.',
    category: 'Development',
    date: 'May 14, 2026',
    readTime: '4 min read',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80',
    detailsImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80',
    content: `
      <p>Performance directly influences user retention. Next.js gives us robust, out-of-the-box infrastructure to compress binary assets, eliminate layout jitter, and maximize Core Web Vitals automatically.</p>
      
      <h3>Defeating Cumulative Layout Shift (CLS)</h3>
      <p>Unbounded media rendering can severely disorient navigating readers. Utilizing aspect-ratio skeletons or pre-calculated dimension fields guarantees that the browser accurately reserves spatial real-estate during load.</p>
      
      <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80" alt="SEO Core Web Vitals" class="w-full rounded-xl my-8 border border-slate-800/80" />

      <h3>Local Font Interception Matrices</h3>
      <p>By hosting critical variable typefaces locally via Next.js Font sub-systems, applications bypass blocking external requests entirely. This delivers flawless text rendering without flash-of-unstyled-text side effects.</p>
    `
  },

  // === Design Articles ===
  {
    id: 'tailwind-arbitrary-variants',
    title: 'Advanced Tailwind CSS Tricks Every Developer Should Know',
    excerpt: 'Learn how to handle dynamic arbitrary variants, custom plugins, and extreme fluid layout designs effortlessly.',
    category: 'Design',
    date: 'May 24, 2026',
    readTime: '4 min read',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1541462608141-ad4979e408c9?q=80',
    detailsImage: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80',
    content: `
      <p>Tailwind utility classes are incredibly fast, but true styling control unlocks when you dive into arbitrary variants, adaptive sub-selector targets, and unified core configuration utilities.</p>
      
      <h3>Bespoke Nested Child Targeted Selection</h3>
      <p>Instead of repetitive declaration setups, advanced nested hooks like <code>[&_span]:text-purple-400</code> enable rapid state definitions. This technique streamlines clean dashboard component layout production.</p>
      
      <img src="https://images.unsplash.com/photo-1541462608141-ad4979e408c9?q=80" alt="Tailwind Workspace" class="w-full rounded-xl my-8 border border-slate-800/80" />

      <h3>Architecting Fluid Scaling Configurations</h3>
      <p>Using arbitrary value syntax coupled with advanced fluid math calculations lets you create perfectly proportional layouts. Elements scale fluidly from compact mobile devices to massive desktop screens.</p>
    `
  },
  {
    id: 'framer-motion-physics',
    title: 'The Art of Creating Physics-Based Fluid UI Animations',
    excerpt: 'Explore structural animation tools like Framer Motion to elevate user experience with subtle micro-interactions.',
    category: 'Design',
    date: 'March 05, 2026',
    readTime: '6 min read',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80',
    detailsImage: 'https://images.unsplash.com/photo-1618401471353-b98aedd07871?q=80',
    content: `
      <p>Traditional rigid linear tweens often feel mechanical and break immersion. Physics-driven movement matrices create micro-interactions that feel natural, intuitive, and responsive to user input.</p>
      
      <h3>The Magic of Spring Configuration Tuning</h3>
      <p>By abandoning time-based durations and adjusting mass, stiffness, and damping parameters, your interfaces inherit life-like weights. Buttons and sliding menus behave with convincing structural realism.</p>
      
      <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80" alt="Abstract Animation Wave" class="w-full rounded-xl my-8 border border-slate-800/80" />

      <h3>Layout Propagation States</h3>
      <p>Framer Motion's <code>layoutId</code> parameter enables fluid global mutations across distinct rendering steps. It blends complex UI modifications into continuous, unified motion streams.</p>
    `
  },
  {
    id: 'dark-mode-ux-design',
    title: 'Designing Dark Mode Interfaces Without Burning Users Eyes',
    excerpt: 'Contrast ratios, pure blacks vs deep grays, and managing theme synchronization state shifts cleanly.',
    category: 'Design',
    date: 'Feb 18, 2026',
    readTime: '5 min read',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80',
    detailsImage: 'https://images.unsplash.com/photo-1541462608141-ad4979e408c9?q=80',
    content: `
      <p>Good dark mode architecture requires more than just swapping a white background for absolute black. Forcing high-contrast text onto pure #000 fields often causes severe eye strain on modern screens.</p>
      
      <h3>The Nuance of Layered Gray Palettes</h3>
      <p>Using rich charcoal tones or deep midnight blue bases diffuses intense glare while keeping layouts accessible. Elevating interactive elements with subtle, lighter gray shades builds natural visual depth.</p>
      
      <img src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80" alt="UI Wireframe Contrast" class="w-full rounded-xl my-8 border border-slate-800/80" />

      <h3>Seamless Global State Coordination</h3>
      <p>Synchronizing color modes across localStorage cache states and server-rendered hydration pipelines protects users from distracting, flash-of-white rendering artifacts on initial load.</p>
    `
  },
  {
    id: 'micro-interactions-guide',
    title: 'How Micro-Interactions Keep Users Hooked to Your Dashboard',
    excerpt: 'Little hover details, button state transformations, and seamless active indicator tabs analyzed deeply.',
    category: 'Design',
    date: 'Jan 22, 2026',
    readTime: '4 min read',
    author: 'Admin',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80',
    detailsImage: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80',
    content: `
      <p>Outstanding digital interfaces succeed because they focus on small details. Micro-interactions turn repetitive web actions into rewarding, interactive moments for your users.</p>
      
      <h3>Designing Tactile Button Interactions</h3>
      <p>A simple hover transition is not always enough for deep user engagement. Subtle physical responses, like scaling down slightly on press or emitting soft ambient color glows, validate user actions instantly.</p>
      
      <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80" alt="Dashboard Micro-interactions" class="w-full rounded-xl my-8 border border-slate-800/80" />

      <h3>Fluid Navigation Trackers</h3>
      <p>When switching tabs or moving items, an active indicator should slide smoothly into place rather than popping in instantly. This small detail helps users stay oriented and enjoy browsing your app.</p>
    `
  }
];

const categories = ['All', 'Development', 'Design', 'Architecture'];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

export default function PremiumBlogMarquee() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [isHovered, setIsHovered] = useState(false);
  const dragConstraintsRef = useRef(null);

  const filteredBlogs = activeCategory === 'All'
    ? blogData
    : blogData.filter(blog => blog.category === activeCategory);

  // প্রোজেক্ট পেজের মতো ডেটাকে ডুপ্লিকেট করা ইনফিনিট লুপ ট্র্যাকিংয়ের জন্য
  const duplicatedBlogs = [...filteredBlogs, ...filteredBlogs, ...filteredBlogs];

  return (
    <section id='blog' className="py-24 text-slate-100 relative overflow-hidden px-4 sm:px-6 lg:px-8 xl:px-12 select-none">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Layout */}
        <div className="text-center mb-16 overflow-hidden">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 px-4 py-1.5 rounded-full backdrop-blur-md mb-4"
          >
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-bold tracking-widest text-purple-300 uppercase">Articles & Insights</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={fadeInUp.viewport}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-black tracking-tight sm:text-5xl text-white"
          >
            Latest From The <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">Journal</span>
          </motion.h2>
        </div>

        {/* Dynamic Category Tabs */}
        <motion.div 
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={fadeInUp.viewport}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center items-center gap-2 mb-16 bg-slate-900/60 p-2 rounded-2xl max-w-md mx-auto border border-slate-800 backdrop-blur-md"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-colors duration-300 ${
                activeCategory === category ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeBlogTab"
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Infinite Horizontal Track Wrapper (Framer Motion Drag Constraints) */}
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
        {/* Horizontal Moving Track */}
        <motion.div 
          className="flex gap-8 whitespace-nowrap px-6"
          drag="x"
          dragConstraints={dragConstraintsRef}
          dragElastic={0.2}
          dragMomentum={true}
          animate={isHovered ? {} : { x: [0, -1450] }}
          transition={{
            ease: "linear",
            duration: 35, // প্রোজেক্ট পেজের মতো একদম সেম প্রিমিয়াম স্পিড
            repeat: Infinity,
          }}
        >
          {duplicatedBlogs.map((blog, index) => (
            <div
              key={index}
              className="inline-block w-[310px] sm:w-[380px] shrink-0 whitespace-normal bg-gradient-to-b from-slate-900/80 to-slate-950/90 backdrop-blur-xl border border-slate-800/60 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-500 group/card hover:shadow-2xl hover:shadow-purple-500/[0.04]"
            >
              {/* Card Window Mockup Top */}
              <div className="bg-slate-950/60 px-4 py-2.5 flex items-center justify-between border-b border-slate-900">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-slate-600 font-mono tracking-wider">article.md</span>
              </div>

              {/* Blog Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  loading="lazy"
                  className="w-full h-full object-cover scale-100 group-hover/card:scale-105 transition-transform duration-700 pointer-events-none filter brightness-[0.85] group-hover/card:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                
                <span className="absolute bottom-3 left-4 text-[10px] font-semibold tracking-wider uppercase bg-purple-500/90 text-white px-2.5 py-1 rounded-md">
                  {blog.category}
                </span>
              </div>

              {/* Card Body & Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-[11px] text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {blog.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {blog.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 group-hover/card:text-purple-400 transition-colors line-clamp-2 h-[54px] mb-2 tracking-tight">
                  {blog.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 h-[54px] mb-5 font-light">
                  {blog.excerpt}
                </p>

                {/* Next.js Route Trigger Button */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-900">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 text-slate-500" />
                    <span className="text-[11px] font-medium text-slate-400">{blog.author}</span>
                  </div>
                  
                  <Link href={`/blog/${blog.id}`} passHref>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-purple-400 hover:text-pink-400 transition-colors cursor-pointer group/link">
                      Read Article 
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}