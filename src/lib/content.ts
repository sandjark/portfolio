import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Project, Publication, PublicationSection } from "./types";

/**
 * Frontmatter booleans can arrive as `true`, `"true"`, `yes`, `1`, etc.
 * depending on how the file was written (e.g. by hand, or by Obsidian's
 * property editor). Treat all of those as true so a checkbox toggle in
 * Obsidian can never silently fail.
 */
function isTruthy(value: unknown): boolean {
  if (value === true) return true;
  if (typeof value === "number") return value === 1;
  if (typeof value === "string") {
    const normalized = value.trim().toLowerCase();
    return normalized === "true" || normalized === "yes" || normalized === "1" || normalized === "on";
  }
  return false;
}

/**
 * Frontmatter numbers can arrive as `1` or `"1"` depending on how the file was
 * written. `undefined` means "no explicit value", which lets the sort fall back
 * to year and then title.
 */
function toNumber(value: unknown): number | undefined {
  if (typeof value === "number") return Number.isFinite(value) ? value : undefined;
  if (typeof value === "string" && value.trim() !== "") {
    const parsed = Number(value.trim());
    if (Number.isFinite(parsed)) return parsed;
  }
  return undefined;
}

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
        year: data.year != null ? String(data.year) : "",
        client: data.client != null ? String(data.client) : "",
        publications: data.publications != null ? String(data.publications) : "",
        link: data.link,
        featured: isTruthy(data.featured),
        order: toNumber(data.order),
      } as Project;
    });

  // Explicit `order` wins; otherwise newest first, then alphabetical. This
  // replaces the old fallback to filesystem (filename) order.
  return allProjects.sort((a, b) => {
    const orderA = a.order ?? Number.POSITIVE_INFINITY;
    const orderB = b.order ?? Number.POSITIVE_INFINITY;
    if (orderA !== orderB) return orderA - orderB;

    const yearA = Number.parseInt(a.year, 10);
    const yearB = Number.parseInt(b.year, 10);
    const safeYearA = Number.isFinite(yearA) ? yearA : 0;
    const safeYearB = Number.isFinite(yearB) ? yearB : 0;
    if (safeYearA !== safeYearB) return safeYearB - safeYearA;

    return a.title.localeCompare(b.title);
  });
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
