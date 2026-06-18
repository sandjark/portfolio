import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">
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

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm text-accent font-medium">{project.category}</span>
            <span className="text-sm text-muted">·</span>
            <span className="text-sm text-muted">{project.year}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 font-heading text-heading">
            {project.title}
          </h1>
        </div>

        {/* Project Image Placeholder */}
        <div className="aspect-[16/9] bg-white rounded-xl mb-12 border border-border shadow-sm overflow-hidden">
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#e8edf5] to-[#d6dce8]">
            <span className="text-8xl opacity-10 text-heading font-bold">
              {project.title.charAt(0)}
            </span>
          </div>
        </div>

        {/* Project Description */}
        <div className="prose prose-gray max-w-none">
          <p className="text-lg leading-relaxed text-muted">
            {project.fullDescription}
          </p>
        </div>

        {/* External Link */}
        {project.link && (
          <div className="mt-12 pt-8 border-t border-border">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors text-sm font-medium"
            >
              View Project
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
