export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

export const publications: Publication[] = [
  {
    title: "Futures Thinking in Design Practice: Emerging Methodologies",
    authors: "Kozubaev, S.",
    venue: "Journal of Design Research",
    year: "2024",
  },
  {
    title: "Public IoT: Designing Connected Urban Experiences",
    authors: "Kozubaev, S.",
    venue: "Proceedings of the ACM Conference on Human Factors in Computing Systems (CHI)",
    year: "2024",
  },
  {
    title: "Participatory Design in Public Housing Communities",
    authors: "Kozubaev, S.",
    venue: "Design Studies Journal",
    year: "2023",
  },
  {
    title: "Design Innovation and Futures Literacy",
    authors: "Kozubaev, S.",
    venue: "Futures Journal",
    year: "2023",
  },
  {
    title: "Digital Media and Civic Engagement",
    authors: "Kozubaev, S.",
    venue: "New Media & Society",
    year: "2022",
  },
];
