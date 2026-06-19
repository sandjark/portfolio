import { getProjectBySlug, getAllProjects } from "@/lib/content";
import { notFound } from "next/navigation";
import { ProjectDetail } from "./project-detail";

const projects = getAllProjects();

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
