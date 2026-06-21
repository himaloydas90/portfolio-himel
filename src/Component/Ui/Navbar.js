'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

/**
 * Navbar.jsx
 * Fully responsive navbar for Next.js (App Router) + Tailwind CSS.
 * - Desktop (≥ 880px / lg breakpoint): inline links + CTA in the bar.
 * - Mobile/tablet: links collapse behind a hamburger icon that opens
 * a slide-in side drawer from the right, with overlay + focus handling.
 */

// 📢 আইডি'র সাথে ম্যাচ করার জন্য এবং অন্য পেজ থেকে কাজ করার জন্য পাথ রিলিজ করা হলো
const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Contact', href: '/#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close on Escape, close automatically if resized back to desktop
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    function handleResize() {
      if (window.innerWidth >= 880) setIsOpen(false);
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

 // 📢 হোম পেজ এবং অন্যান্য অন-পেজ স্ক্রোলিং পারফেক্টলি হ্যান্ডেল করার জন্য আপডেট করা ফাংশন
  const handleSmoothScroll = (e, href) => {
    // ১. যদি ইউজার হোমে ক্লিক করে এবং অলরেডি হোম পেজেই থাকে
    if (href === '/') {
      if (window.location.pathname === '/') {
        e.preventDefault();
        window.scrollTo({
          top: 0, // একদম উপরে চলে যাবে
          behavior: 'smooth'
        });
      }
      return;
    }

    // ২. যদি লিংকটি কোনো অন-পেজ আইডি হয় (যেমন: /#about)
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে
        
        // ধীর গতিতে স্ক্রোল ডাউন করবে
        window.scrollTo({
          top: element.offsetTop - 80, // ৮০ হচ্ছে নেভবারের হাইট
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <>
      {/* ---------- TOP BAR ---------- */}
      <nav className="sticky top-0 z-50 flex h-20 items-center justify-between border-b border-[#2a2d35] bg-[#13151a] px-4 sm:px-8">
        {/* Brand */}
        <Link href="/#home">
          <img
            src="/logo.png"
            alt="Nordlight Logo"
            className="h-28 w-28 rounded-full object-cover"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)} // 📢 ক্লিক লজিক কানেক্ট করা হলো
                className="group relative py-1.5 text-2xl font-bold text-[#ff5d2a] transition-colors hover:text-[#f6f4ee]"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#ff5d2a] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-7">
          {/* Desktop CTA */}
          <Link
            href="/Contact"
            className="hidden rounded-full bg-[#ff5d2a] px-5 py-2.5 text-sm font-semibold text-[#13151a] transition-[filter] hover:brightness-110 lg:inline-block"
          >
            Start a project
          </Link>

          {/* Hamburger (mobile trigger) */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
            aria-expanded={isOpen}
            aria-controls="side-drawer"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-md border border-[#3a3d46] lg:hidden"
          >
            <span className="block h-0.5 w-5 rounded-full bg-[#f6f4ee]" />
            <span className="block h-0.5 w-5 rounded-full bg-[#f6f4ee]" />
            <span className="block h-0.5 w-5 rounded-full bg-[#f6f4ee]" />
          </button>
        </div>
      </nav>

      {/* ---------- OVERLAY ---------- */}
      <div
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/55 transition-opacity duration-300 ${
          isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      />

      {/* ---------- SIDE DRAWER ---------- */}
      <aside
        id="side-drawer"
        aria-hidden={!isOpen}
        className={`fixed right-0 top-0 z-50 flex h-full w-[82vw] max-w-80 flex-col bg-[#1b1e25] shadow-[-8px_0_30px_rgba(0,0,0,0.3)] transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header */}
        <div className="flex h-16 items-center justify-between border-b border-[#2a2d35] px-5">
          <span className="font-serif text-lg text-white">Menu</span>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-md border border-[#3a3d46] text-[#f6f4ee] hover:bg-[#262931]"
          >
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <ul className="overflow-y-auto px-2 py-3">
          {NAV_LINKS.map((link, i) => (
            <li key={link.label} className="mt-0.5 first:mt-0">
              <Link
                href={link.href}
                onClick={(e) => {
                  handleSmoothScroll(e, link.href); // 📢 মোবাইল স্ক্রোল হ্যান্ডলার
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 rounded-lg px-4 py-3.5 text-[16.5px] text-[#e7e8ec] transition-all hover:bg-[#242730] hover:pl-5 hover:text-white"
              >
                <span className="w-5 font-serif text-xs text-[#ff5d2a]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Drawer footer */}
        <div className="mt-auto border-t border-[#2a2d35] p-5">
          <Link
            href="/Contact"
            onClick={() => setIsOpen(false)}
            className="block rounded-[10px] bg-[#ff5d2a] py-3.5 text-center font-semibold text-[#13151a]"
          >
            Start a project
          </Link>
          <p className="mt-3.5 text-xs leading-relaxed text-[#7b7e87]">
            Nordlight Studio · Open for new work, 2026 slots filling.
          </p>
        </div>
      </aside>
    </>
  );
}