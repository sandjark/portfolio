export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  year: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "public-iot-for-new-york-city",
    title: "Public IoT for New York City",
    category: "Design & Futures",
    description: "Exploring the future of public IoT infrastructure in urban environments.",
    fullDescription: "A comprehensive exploration of how Internet of Things technologies can be deployed in public spaces to improve urban life, with a focus on New York City's unique challenges and opportunities.",
    image: "/images/public-iot.jpg",
    year: "2024",
    link: "https://sandjar.me/index.php/project/public-iot-for-new-york-city/",
  },
  {
    slug: "prof-practice",
    title: "Professional Practice",
    category: "Design",
    description: "Professional practice in design research and futures thinking.",
    fullDescription: "An examination of professional practice methodologies in design research, combining futures thinking with practical design applications.",
    image: "/images/prof-practice.jpg",
    year: "2024",
    link: "https://sandjar.me/index.php/project/prof-practice/",
  },
  {
    slug: "stopnigma",
    title: "Stopnigma",
    category: "Digital Media",
    description: "An interactive digital media project exploring new forms of engagement.",
    fullDescription: "Stopnigma is an experimental digital media project that pushes the boundaries of interactive storytelling and user engagement.",
    image: "/images/stopnigma.jpg",
    year: "2023",
    link: "https://sandjar.me/index.php/project/stopnigma/",
  },
  {
    slug: "designinnovation",
    title: "Design Innovation",
    category: "Design & Futures",
    description: "Innovative approaches to design thinking and methodology.",
    fullDescription: "Exploring cutting-edge design innovation methodologies and their application across various domains and industries.",
    image: "/images/design-innovation.jpg",
    year: "2023",
    link: "https://sandjar.me/index.php/project/designinnovation/",
  },
  {
    slug: "futures-out-loud",
    title: "Futures Out Loud",
    category: "Futures",
    description: "A podcast and research project exploring futures thinking.",
    fullDescription: "Futures Out Loud is a multi-platform project that brings futures thinking to a broader audience through podcasting, workshops, and public engagement.",
    image: "/images/futures-out-loud.jpg",
    year: "2023",
    link: "https://sandjar.me/index.php/project/futures-out-loud/",
  },
  {
    slug: "publichousing",
    title: "Public Housing",
    category: "Design & Research",
    description: "Research and design for public housing communities.",
    fullDescription: "A research-driven design project focused on improving public housing communities through participatory design methods and community engagement.",
    image: "/images/public-housing.jpg",
    year: "2022",
    link: "https://sandjar.me/index.php/project/publichousing/",
  },
];
