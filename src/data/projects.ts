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

export const projects: Project[] = [
  {
    slug: "public-iot-for-new-york-city",
    title: "Public IoT for New York City",
    subtitle: "Experimental media and more-than-human worlds",
    category: "Design & Futures",
    description: "Exploring the future of public IoT infrastructure in urban environments.",
    fullDescription: "This is participatory design project exploring the design of public signage for IoT infrastructure in the City of New York. Activities included participatory design workshop with community members do develop transparency design principles and guidelines.",
    image: "/images/public-iot.jpg",
    gallery: ["/images/public-iot.jpg", "/images/public-iot-2.jpg"],
    year: "2024",
    client: "City of New York",
    publications: "",
    link: "https://sandjar.me/index.php/project/public-iot-for-new-york-city/",
  },
  {
    slug: "prof-practice",
    title: "UX Practice",
    subtitle: "Experience, projects, and outcomes",
    category: "Design",
    description: "Professional practice in design research and futures thinking.",
    fullDescription: "As a UX design and research leader, I have lead teams and programs aimed at building and improving delightful and effective digital for businesses and consumers. My experience spans \"Zero to One\" product development as well as evolution of existing products within complex matrixed organizations. I have also built and scaled design thinking, research and experimentation programs to help product, engineering, and design teams improve their understanding of user needs and accelerate the product development process. Currently, my role is building the next generation of marketing and accounting software to help small businesses thrive in the digital age of AI. Details and portfolio demonstrations are available upon request.",
    image: "/images/prof-practice.jpg",
    gallery: ["/images/prof-practice.jpg"],
    year: "2024",
    client: "N/A",
    publications: "",
    link: "https://sandjar.me/index.php/project/prof-practice/",
  },
  {
    slug: "stopnigma",
    title: "Stop Nigma",
    subtitle: "Participatory speculation through public art.",
    category: "Digital Media",
    description: "An interactive digital media project exploring new forms of engagement.",
    fullDescription: "Stop Nigma is a public art and speculative design project, part of the #freeartfriday and #freeart movement. Artists place their artwork in public spaces and share images on social media for their followers to find. Whoever finds the artwork can claim it and keep it. The project is based on a fictional future in which concealing one's identity is restricted or illegal. The designed artifact represents an internationally recognized symbol which is displayed as a public sign in areas with restricted privacy. In addition to collecting the artifacts, the audience participants in extending the speculation in their own ways by sharing stories and images. The project is ongoing and can be found on Instagram.",
    image: "/images/stopnigma.jpg",
    gallery: ["/images/stopnigma.jpg", "/images/stopnigma-2.jpg", "/images/stopnigma-3.jpg"],
    year: "2023",
    client: "N/A",
    publications: "Kozubaev, S. (2016, October). Stop Nigmas: Experimental Speculative Design through Pragmatic Aesthetics and Public Art. In Proceedings of the 9th Nordic Conference on Human-Computer Interaction (p. 76). ACM.",
    link: "https://sandjar.me/index.php/project/stopnigma/",
  },
  {
    slug: "designinnovation",
    title: "Design and Innovation Advisory",
    subtitle: "Experience strategy and design",
    category: "Design & Futures",
    description: "Innovative approaches to design thinking and methodology.",
    fullDescription: "These are series of consulting projects in design strategy and innovation. Custom participatory design tools are used to reframe problems, facilitate the design process, foster creativity and organizational alignment as well as develop internal design capabilities (coaching and training). Methods are drawn from different disciplines including human-centered design, strategic foresight, cultural anthropology and traditional business strategy (business modeling, competitive analysis, value proposition development etc.). Clients include senior executive teams as well as functional leaders in marketing, R&D, and product development groups at Fortune 500 companies. Industries include consumer goods, financial services, energy, automotive, media & communications and others. Roles: project lead, design strategist, coach, advisor.",
    image: "/images/design-innovation.jpg",
    gallery: ["/images/design-innovation.jpg", "/images/design-innovation-2.jpg", "/images/design-innovation-3.jpg", "/images/design-innovation-4.jpg", "/images/design-innovation-5.jpg"],
    year: "2023",
    client: "Various",
    publications: "N/A",
    link: "https://sandjar.me/index.php/project/designinnovation/",
  },
  {
    slug: "futures-out-loud",
    title: "Futures Out Loud",
    subtitle: "Participatory Design Game",
    category: "Futures",
    description: "A podcast and research project exploring futures thinking.",
    fullDescription: "Futures Out Loud is a design game to help participants think about futures in an engaging and approachable way. The game is intended to introduce participants to key futures concepts, weak signals about social, technological, political and other dimensions, along with prompts to stimulate a thought about how an issue could evolve over time. The game has been used in professional and educational settings. It has also been featured at PRIMER 2020, a conference on speculative design. The game is freely downloadable. Role: game design, research. Collaborators: Leigh Cook, Bo Roe, Eric Boye, Matt Rickard, Katelyn Bottoms.",
    image: "/images/futures-out-loud.jpg",
    gallery: ["/images/futures-out-loud.jpg", "/images/futures-out-loud-2.jpg"],
    year: "2023",
    client: "N/A",
    publications: "",
    link: "https://sandjar.me/index.php/project/futures-out-loud/",
  },
  {
    slug: "publichousing",
    title: "Smart Technology in Public Housing",
    subtitle: "Participatory design research for housing policy",
    category: "Design & Research",
    description: "Research and design for public housing communities.",
    fullDescription: "This project explored design and policy implications of using smart devices in public housing. The project was directed by Dr. Carl DiSalvo and Dr. Chris Le Dantec. Through a series of participatory design workshops, researchers and public housing residents collaborated on understanding the possibilities, constraints and challenges of using smart devices (sensors, smart speakers, cameras etc.) in this unique context. Role: design researcher, designer",
    image: "/images/public-housing.jpg",
    gallery: ["/images/public-housing.jpg", "/images/public-housing-2.jpg", "/images/public-housing-3.jpg", "/images/public-housing-4.jpg", "/images/public-housing-5.jpg"],
    year: "2022",
    client: "Atlanta Housing",
    publications: "Sandjar Kozubaev, Fernando Rochaix, Carl DiSalvo, and Christopher A. Le Dantec. 2019. Spaces and Traces: Implications of Smart Technology in Public Housing. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (CHI '19). ACM, New York, NY, USA, Paper 439, 13 pages.",
    link: "https://sandjar.me/index.php/project/publichousing/",
  },
];
