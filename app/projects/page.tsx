"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, Terminal, Cpu, Github, Layers, 
  BookOpen, Code2, Lightbulb, Settings2 
} from "lucide-react";
import Link from "next/link";

// Examples
const PROJECTS = [
  {
    id: "fpv-ew",
    title: "FPV Drone EW System",
    category: "Electronic Warfare",
    tech: ["SDR", "Python", "Signal Processing"],
    description: "An SDR-based electronic warfare prototype designed to counter FPV drone threats.",
    demoType: "simulation",
    demoUrl: "https://your-wasm-sim-url.com",
    github: "https://github.com/lezgin/fpv-ew",
    fullWriteup: {
      problem: "Traditional jamming methods are often too broad and power-inefficient. FPV drones use frequency hopping (FHSS) which requires a more surgical approach.",
      solution: "Implemented a real-time spectral analyzer using HackRF. The system detects the hopping pattern and injects noise only in the target's active sub-bands.",
      math: "The signal-to-noise ratio ($SNR$) required for successful jamming was calculated using: $J/S = \frac{P_j \cdot G_{jt} \cdot G_{rj} \cdot R^2_{tr} \cdot L}{P_t \cdot G_t \cdot G_r \cdot R^2_{jr} \cdot B_j}$",
      steps: [
        "Spectrum sensing via Fast Fourier Transform (FFT).",
        "Threshold detection for hopping burst identification.",
        "Triggering the localized noise generator via GNU Radio."
      ]
    }
  },


];

const ProjectsPage = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0]);

  return (
    <div className="flex h-screen bg-[#fafafa] dark:bg-[#080808] text-neutral-900 dark:text-neutral-100 overflow-hidden">
      
      {/* --- SOL SIDEBAR (Aynı Kalıyor) --- */}
      <aside className="w-80 border-r border-neutral-200 dark:border-neutral-800 flex flex-col bg-white dark:bg-black">
        <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
          <Link href="/" className="flex items-center gap-2 text-xs font-bold opacity-50 hover:opacity-100 transition mb-4">
            <ArrowLeft className="w-3 h-3" /> BACK TO HOME
          </Link>
          <h1 className="text-xl font-black tracking-tighter">PROJECTS</h1>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">
          {PROJECTS.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                activeProject.id === project.id 
                ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800" 
                : "hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-transparent"
              }`}
            >
              <h3 className={`font-bold text-sm ${activeProject.id === project.id ? "text-blue-600" : ""}`}>{project.title}</h3>
              <span className="text-[10px] opacity-50 uppercase font-bold">{project.category}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* --- SAĞ TARAF: Proje Detayı --- */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 md:p-16 max-w-4xl mx-auto space-y-20"
          >
            {/* 1. KISIM: Hero & Simulation */}
            <section className="space-y-8">
              <header className="space-y-4">
                <h2 className="text-6xl font-black tracking-tighter">{activeProject.title}</h2>
                <div className="flex gap-2">
                  {activeProject.tech.map(t => <span key={t} className="px-2 py-1 bg-neutral-200 dark:bg-neutral-800 text-[10px] font-bold rounded">{t}</span>)}
                </div>
              </header>
              <div className="aspect-video bg-black rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl">
                {/* Buraya Iframe veya Demo gelecek */}
                <div className="w-full h-full flex items-center justify-center text-neutral-500 font-mono text-xs">
                  [ Interactive Simulation Stage ]
                </div>
              </div>
            </section>

            {/* 2. KISIM: Blog-Style Deep Dive (YENİ EKLENEN YER) */}
            <section className="grid gap-16 border-t border-neutral-200 dark:border-neutral-800 pt-16">
              
              {/* Problem & Motivation */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-blue-600">
                  <Lightbulb className="w-4 h-4" /> The Challenge
                </div>
                <div className="md:col-span-2 text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {activeProject.fullWriteup.problem}
                </div>
              </div>

              {/* Implementation Details */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center gap-2 font-bold text-sm uppercase tracking-widest text-blue-600">
                  <Settings2 className="w-4 h-4" /> Implementation
                </div>
                <div className="md:col-span-2 space-y-6">
                  <p className="text-neutral-600 dark:text-neutral-400">{activeProject.fullWriteup.solution}</p>
                  
                  {/* Kod / Denklem Kutusu */}
                  <div className="bg-neutral-100 dark:bg-neutral-900 p-6 rounded-2xl font-mono text-sm border border-neutral-200 dark:border-neutral-800">
                    <div className="text-blue-600 mb-2 font-bold text-[10px]">// Mathematical Model</div>
                    <div className="text-neutral-800 dark:text-neutral-200 italic_font_style">
                      {activeProject.fullWriteup.math}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-bold flex items-center gap-2"><Code2 className="w-4 h-4" /> Execution Steps</h4>
                    <ul className="grid gap-3">
                      {activeProject.fullWriteup.steps.map((step, i) => (
                        <li key={i} className="flex gap-4 text-sm text-neutral-500">
                          <span className="text-blue-600 font-bold">0{i+1}</span> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Engineering Outcome */}
              <div className="p-8 bg-blue-50 dark:bg-blue-950/20 rounded-3xl border border-blue-100 dark:border-blue-900/30">
                <h3 className="font-bold mb-4 flex items-center gap-2 text-blue-600">
                  <BookOpen className="w-4 h-4" /> Engineering Takeaway
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  This implementation proves that high-frequency signals can be manipulated using open-source hardware (SDR) with minimal latency if the FFT buffer is optimized correctly. Further research will focus on automated jamming via machine learning classifiers.
                </p>
              </div>

            </section>

            <footer className="py-12 text-center border-t border-neutral-100 dark:border-neutral-900">
              <p className="text-xs text-neutral-400 uppercase tracking-widest font-bold">End of Documentation</p>
            </footer>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default ProjectsPage;