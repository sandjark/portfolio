import { projects } from "@/data/projects";
import { ProjectDetail } from "./project-detail";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  return <ProjectDetail params={params} />;
}
