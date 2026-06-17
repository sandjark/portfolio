"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function ProjectDetailPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-[#4975ef] hover:text-white transition-colors">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/projects"
            className="text-sm text-[#4975ef] hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Projects
          </Link>

          <div className="aspect-[16/9] bg-[#111] rounded-lg overflow-hidden mb-8 border border-[#222]">
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
              <span className="text-8xl opacity-10 font-bold">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>

          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold mb-2">{project.title}</h1>
              <p className="text-[#a0a0a0]">{project.category}</p>
            </div>
            <span className="text-lg text-[#4975ef] whitespace-nowrap">{project.year}</span>
          </div>

          <p className="text-lg text-[#a0a0a0] leading-relaxed mb-8">
            {project.fullDescription}
          </p>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#4975ef] text-white rounded-lg hover:bg-[#3a5fc7] transition-colors"
            >
              View Project →
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
}
