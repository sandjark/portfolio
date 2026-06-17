"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight font-heading">
            Sandjar Kozubaev
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed font-mono-text">
            Design, Futures, Digital Media
          </p>
          <p className="text-base text-[#666] mt-4 max-w-xl leading-relaxed">
            Exploring the intersection of design research, futures thinking, and digital media
            to create meaningful experiences and innovative solutions.
          </p>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold font-heading">Featured Projects</h2>
          <Link
            href="/projects"
            className="text-sm text-accent hover:text-white transition-colors"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="aspect-[16/10] bg-card rounded-lg overflow-hidden mb-4 border border-border group-hover:border-accent/50 transition-all duration-300">
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e] group-hover:scale-105 transition-transform duration-500">
                    <span className="text-4xl opacity-20 group-hover:opacity-40 transition-opacity">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium group-hover:text-accent transition-colors font-heading">
                      {project.title}
                    </h3>
                    <p className="text-sm text-[#666] mt-1">{project.category}</p>
                  </div>
                  <span className="text-sm text-accent whitespace-nowrap">
                    {project.year}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Links */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/publications"
            className="group p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
          >
            <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors font-heading">
              Publications
            </h3>
            <p className="text-sm text-[#666]">
              Academic papers and articles on design research and futures thinking.
            </p>
          </Link>
          <Link
            href="/bio"
            className="group p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
          >
            <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors font-heading">
              Bio
            </h3>
            <p className="text-sm text-[#666]">
              Background, experience, and research interests.
            </p>
          </Link>
          <Link
            href="/contact"
            className="group p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300"
          >
            <h3 className="text-lg font-medium mb-2 group-hover:text-accent transition-colors font-heading">
              Contact
            </h3>
            <p className="text-sm text-[#666]">
              Get in touch for collaborations and inquiries.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
