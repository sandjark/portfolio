import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, Publication, PublicationSection } from "./types";

const projectsDirectory = path.join(process.cwd(), "content/projects");
const publicationsDirectory = path.join(process.cwd(), "content/publications");

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const fullPath = path.join(projectsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug: data.slug,
        title: data.title,
        subtitle: data.subtitle,
        category: data.category,
        description: data.description,
        fullDescription: content.trim(),
        image: data.image,
        gallery: data.gallery || [],
        year: data.year || "",
        client: data.client || "",
        publications: data.publications || "",
        link: data.link,
      } as Project;
    });

  return allProjects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  const allProjects = getAllProjects();
  return allProjects.find((project) => project.slug === slug);
}

function parsePublicationBlock(block: string): Publication | null {
  const lines = block.trim().split("\n");
  if (lines.length < 2) return null;

  const titleLine = lines[0].replace(/^##\s+/, "").trim();
  if (!titleLine) return null;

  const pub: Publication = {
    title: titleLine,
    authors: "",
    venue: "",
    year: "",
  };

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].replace(/^-\s*\*\*(.+?):\*\*\s*/, "$1|").trim();
    const separatorIndex = line.indexOf("|");
    if (separatorIndex === -1) continue;

    const key = line.substring(0, separatorIndex).trim().toLowerCase();
    const value = line.substring(separatorIndex + 1).trim();

    switch (key) {
      case "authors":
        pub.authors = value;
        break;
      case "venue":
        pub.venue = value;
        break;
      case "year":
        pub.year = value;
        break;
      case "link":
        pub.link = value;
        break;
      case "pdf":
        pub.pdf = value;
        break;
      case "doi":
        pub.doi = value;
        break;
      case "note":
        pub.note = value;
        break;
    }
  }

  return pub;
}

export function getPublicationSections(): PublicationSection[] {
  const fileNames = fs.readdirSync(publicationsDirectory);
  const sections: PublicationSection[] = [];

  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;

    const fullPath = path.join(publicationsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const sectionTitle = data.section || fileName.replace(".md", "");
    const blocks = content.split(/\n## /).filter(Boolean);

    const items: Publication[] = [];
    for (const block of blocks) {
      const pub = parsePublicationBlock(block.startsWith("## ") ? block : `## ${block}`);
      if (pub && pub.title) {
        items.push(pub);
      }
    }

    sections.push({
      title: sectionTitle,
      items,
    });
  }

  return sections;
}
