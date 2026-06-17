"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { useState } from "react";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4 font-heading">Projects</h1>
          <p className="text-muted max-w-xl mb-12">
            A selection of projects spanning design research, futures thinking, and digital media.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent border-accent text-white"
                  : "border-border text-muted hover:border-accent/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              layout
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="aspect-[16/10] bg-card rounded-lg overflow-hidden mb-4 border border-border group-hover:border-accent/50 transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] group-hover:scale-105 transition-transform duration-500">
                    <span className="text-6xl opacity-10 group-hover:opacity-30 transition-opacity font-bold">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-medium group-hover:text-accent transition-colors font-heading">
                      {project.title}
                    </h2>
                    <p className="text-sm text-[#666] mt-1">{project.category}</p>
                    <p className="text-sm text-muted mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-sm text-accent whitespace-nowrap mt-1">
                    {project.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-[#666] py-20">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}
