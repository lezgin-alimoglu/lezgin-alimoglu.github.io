"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FileDown, ArrowLeft, BrainCircuit, Bot, Target, Mail } from "lucide-react";


const pageVariants: Variants = { 
  initial: {
    opacity: 0,
    y: 10, 
  },
  animate: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const, // Buraya "as const" ekledik
      staggerChildren: 0.1, 
    },
  },
};
const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
};

const AboutPage = () => {
  return (
    <motion.main
      className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 antialiased selection:bg-blue-100"
      initial="initial"
      animate="animate"
      variants={pageVariants}
    >
      <section className="max-w-2xl mx-auto pt-16 pb-16 px-6">
        
        <motion.div variants={itemVariants} className="mb-10">
          <Link href="/" className="group flex items-center gap-2 text-sm text-neutral-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Home
          </Link>
        </motion.div>

        <motion.header variants={itemVariants} className="mb-12">
          <h1 className="text-4xl font-bold tracking-tighter mb-4">About Me</h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">Hello, I'm Lezgin</p>
        </motion.header>

<motion.div variants={itemVariants} className="prose prose-neutral dark:prose-invert leading-relaxed space-y-6 text-neutral-800 dark:text-neutral-300">
          <p>
            I'm a senior student at METU, navigating the worlds of Electrical Engineering and Mathematics. To me, engineering is the craft, but math is the language. I spend most of my time exploring Control Theory, seeking the perfect balance between the theoretical and the practical.
          </p>
          <p>
            When I'm not solving ODEs or designing controllers, I'm likely <span className="italic">off the grid</span>, probably finding new systems to break or refine.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-4 my-16">
          <FocusCard icon={BrainCircuit} title="Control Theory" desc="PID, MPC, Kalman" />
          <FocusCard icon={Bot} title="Robotics" desc="ROS2, MuJoCo, Gazebo" />
          <FocusCard icon={Target} title="Embedded Systems" desc="STM32, ESP32, Python" />
        </motion.div>


        <motion.div variants={itemVariants} className="mt-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mb-4">Resume</h2>
          
          <a 
            href="/lezgin-cv.pdf"
            download="Lezgin_CV.pdf" 
            className="group flex items-center justify-between gap-6 border border-neutral-200 dark:border-neutral-800 p-6 rounded-2xl bg-white dark:bg-[#111] hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-lg hover:shadow-blue-50/50 dark:hover:shadow-blue-950/30 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-xl text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900 group-hover:scale-110 transition-transform">
                <FileDown className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-black dark:text-white">Curriculum Vitae</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">The Summary of my Education, Experience, and Technical Capability.</p>
                <span className="text-xs text-neutral-400 dark:text-neutral-500 mt-1 block">PDF - 1.2 MB</span>
              </div>
            </div>
            
            <div className="text-sm font-medium text-blue-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
              Download →
            </div>
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16">
          <h2 className="text-xs uppercase tracking-widest font-semibold text-neutral-500 mb-6">Connect</h2>
          
          <div className="flex flex-col gap-3">
            {/* GitHub */}
            <a 
              href="https://github.com/lezgin-alimoglu" 
              target="_blank" 
              className="group flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
            >
              <Github className="w-5 h-5 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              <span className="text-sm font-medium">GitHub</span>
              <span className="text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">/lezgin-alimoglu</span>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://tr.linkedin.com/in/lezgin-alimo%C4%9Flu-2988b1224" 
              target="_blank" 
              className="group flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
            >
              <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-sm font-medium">LinkedIn</span>
              <span className="text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">/in/lezgin-alimoğlu</span>
            </a>

            {/* Mail */}
            <a 
              href="mailto:lezgin@metu.edu.tr" 
              className="group flex items-center gap-4 p-3 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
            >
              <Mail className="w-5 h-5 text-neutral-400 group-hover:text-red-500 transition-colors" />
              <span className="text-sm font-medium">Email</span>
              <span className="text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">lezgin2003@gmail.com</span>
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer variants={itemVariants} className="mt-24 pt-10 border-t border-neutral-200 dark:border-neutral-800 text-center">
          <p className="text-xs text-neutral-400">Let's build something complex together.</p>
        </motion.footer>

      </section>
    </motion.main>
  );
};


const FocusCard = ({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) => (
  <div className="border border-neutral-200 dark:border-neutral-800 p-5 rounded-xl bg-white dark:bg-[#111]">
    <Icon className="w-6 h-6 text-blue-600 mb-3" />
    <h4 className="font-medium text-black dark:text-white text-sm">{title}</h4>
    <p className="text-xs text-neutral-500 mt-1">{desc}</p>
  </div>
);

const Github = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

export default AboutPage;