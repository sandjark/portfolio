"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { projects } from "@/data/projects";
import { use } from "react";

export function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug);

  const [selectedImage, setSelectedImage] = useState(0);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Back Link */}
        <Link
          href="/projects"
          className="inline-flex items-center text-sm text-accent hover:text-heading transition-colors mb-8"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M19 12H5m7-7l-7 7 7 7" />
          </svg>
          Back to Projects
        </Link>

        {/* Title & Subtitle */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 font-heading text-heading">
            {project.title}
          </h1>
          {project.subtitle && (
            <p className="text-lg md:text-xl text-muted font-mono-text">
              {project.subtitle}
            </p>
          )}
        </div>

        {/* Main Content + Sidebar Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Gallery (2/3 width) */}
          <div className="lg:col-span-2">
            {/* Main Gallery Image */}
            <div className="aspect-[16/10] bg-white rounded-none mb-4 border border-border shadow-sm overflow-hidden relative">
              <Image
                src={project.gallery[selectedImage]}
                alt={`${project.title} - Image ${selectedImage + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Gallery Thumbnails */}
            {project.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-none overflow-hidden border-2 transition-all duration-200 relative ${
                      selectedImage === index
                        ? "border-accent ring-2 ring-accent/30"
                        : "border-border hover:border-accent/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${project.title} thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Description + Sidebar Info */}
          <div>
            <div className="bg-[#f7f7f7] rounded-none p-6 border border-border space-y-6">
              {/* Project Description */}
              <div>
                <h2 className="text-2xl font-bold text-heading mb-4">
                  Project Details
                </h2>
                <p className="text-base leading-relaxed text-muted">
                  {project.fullDescription}
                </p>
              </div>

              {/* Divider */}
              <hr className="border-border" />

              {/* Client / Partner */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                  CLIENT/PARTNER
                </h3>
                <p className="text-sm text-heading">{project.client}</p>
              </div>

              {/* Related Publications */}
              {project.publications && project.publications !== "N/A" && (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                    RELATED PUBLICATIONS
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {project.publications}
                  </p>
                </div>
              )}

              {/* Category */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted mb-2">
                  CATEGORY
                </h3>
                <p className="text-sm text-heading">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
