"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Tag, Clock, ArrowRight, ArrowLeft, Filter } from "lucide-react";

// Dataset
const ALL_POSTS = [
  {
    title: "Example",
    excerpt: "Exploring Lyapunov stability and backstepping controllers for complex robotic platforms.",
    date: "April 5, 2026",
    readTime: "12 min read",
    category: "Control",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    slug: "nonlinear-control"
  },

  {
    title: "Example",
    excerpt: "Practical implementation of frequency hopping countermeasures in SDR systems.",
    date: "Feb 10, 2026",
    readTime: "10 min read",
    category: "Robotics",
    image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?q=80&w=800",
    slug: "fpv-ew-protocols"
  },
  
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Control", "Math", "Robotics", "Embedded"];

  const filteredPosts = ALL_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-neutral-100">
      {/* Blog Top Navigation / Logo Area */}
      <nav className="border-b border-neutral-100 dark:border-neutral-900 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold tracking-tighter text-xl">
             <ArrowLeft className="w-4 h-4" /> Return
          </Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="mb-16 space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter italic">WRITINGS</h1>
          <p className="max-w-xl text-neutral-500 text-lg">
            A comprehensive collection of research, technical notes, and mathematical explorations.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 group-focus-within:text-blue-600 transition-colors" />
            <input 
              type="text" 
              placeholder="Search for equations, controllers, or hardware..." 
              className="w-full bg-neutral-100 dark:bg-neutral-900 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </header>

        {/* Categories */}
        <div className="flex gap-3 overflow-x-auto pb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                : "bg-neutral-100 dark:bg-neutral-900 text-neutral-500 hover:bg-neutral-200 dark:hover:bg-neutral-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post (Only if no search) */}
        {searchQuery === "" && activeCategory === "All" && (
           <section className="mb-20">
              <Link href={`/blog/${ALL_POSTS[0].slug}`} className="group grid md:grid-cols-2 gap-8 items-center bg-neutral-50 dark:bg-neutral-900/50 rounded-3xl overflow-hidden p-4">
                <div className="aspect-video rounded-2xl overflow-hidden">
                  <img src={ALL_POSTS[0].image} alt="Featured" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="space-y-4 pr-6">
                  <span className="text-blue-600 font-bold text-xs tracking-widest uppercase">Latest Release</span>
                  <h2 className="text-3xl font-bold leading-tight group-hover:text-blue-600 transition-colors">{ALL_POSTS[0].title}</h2>
                  <p className="text-neutral-500 leading-relaxed">{ALL_POSTS[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-xs font-medium opacity-50">
                    <span>{ALL_POSTS[0].date}</span>
                    <span>{ALL_POSTS[0].readTime}</span>
                  </div>
                </div>
              </Link>
           </section>
        )}

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredPosts.map((post) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/blog/${post.slug}`} className="group flex flex-col h-full">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 bg-neutral-200 dark:bg-neutral-800">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <Tag className="w-3 h-3 text-blue-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">{post.category}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-neutral-500 text-sm line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100 dark:border-neutral-900 mt-auto">
                    <div className="flex items-center gap-2 text-[10px] font-medium opacity-40">
                      <Clock className="w-3 h-3" /> {post.readTime}
                    </div>
                    <ArrowRight className="w-4 h-4 text-blue-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default BlogPage;