export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  gallery: string[];
  year: string;
  client: string;
  publications: string;
  link?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
  pdf?: string;
  doi?: string;
  note?: string;
}

export interface PublicationSection {
  title: string;
  items: Publication[];
}
