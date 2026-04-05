"use client";

import React from "react";
import Link from "next/link";
// Unused Card imports removed for a cleaner build

const HomePage = () => {
  return (
    <main className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-blue-100">
      <section className="max-w-2xl mx-auto pt-20 pb-10 px-6">
        
        {/* Intro Section */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tighter mb-4 italic">Lezgin Alimoglu</h1>
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg italic_font_style">
            Hello! This is my personal website where you can learn more about me, check out my projects, read my blog, and get in touch.
          </p>
        </header>

        {/* Minimal Navigation */}
        <nav className="flex flex-wrap gap-x-6 gap-y-2 mb-16 text-sm font-medium border-b border-neutral-200 dark:border-neutral-800 pb-6 uppercase tracking-widest">
          <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-blue-600 transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Writings</Link>
        </nav>

        {/* Featured Works */}
        <div className="space-y-8">
          <h2 className="text-[10px] uppercase tracking-[0.2em] font-black text-neutral-400">Selected Projects</h2>
          
          <div className="grid gap-4">
            {/* MÜHENDİS NOTU: Linkleri doğrudan /projects sayfasına yönlendiriyoruz 
               çünkü orada sidebar yapımız var. 
            */}
            <Link href="/projects">
              <div className="group border border-neutral-200 dark:border-neutral-800 p-5 rounded-2xl hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-none transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold group-hover:text-blue-600 transition-colors">FPV Drone EW System</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">2026</span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  Electronic warfare prototype utilizing SDR and Python for signal analysis and mitigation.
                </p>
              </div>
            </Link>

            <Link href="/projects">
              <div className="group border border-neutral-200 dark:border-neutral-800 p-5 rounded-2xl hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:shadow-neutral-200/50 dark:hover:shadow-none transition-all duration-300">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold group-hover:text-blue-600 transition-colors">MuJoCo Physics Lab</h3>
                  <span className="text-[10px] text-neutral-400 font-mono">2025</span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  High-fidelity 6-DOF robotic arm simulations focused on Control Theory principles.
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-10 border-t border-neutral-200 dark:border-neutral-800 flex justify-between items-center">
            <p className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest">© 2026 / Lezgin Alimoglu</p>
            <div className="flex gap-4">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" title="Available for projects"></div>
            </div>
        </footer>

      </section>
    </main>
  );
};

export default HomePage;