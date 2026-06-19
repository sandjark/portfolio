import { getAllProjects } from "@/lib/content";
import ProjectsClient from "./projects-client";

const projects = getAllProjects();

export default function ProjectsPage() {
  return <ProjectsClient projects={projects} />;
}
