import { getAllProjects } from "@/lib/content";
import HomeClient from "./home-client";

const projects = getAllProjects();

export default function Home() {
  return <HomeClient projects={projects} />;
}
