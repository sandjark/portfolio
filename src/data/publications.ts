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

export const publicationSections: PublicationSection[] = [
  {
    title: "Peer-Reviewed",
    items: [
      {
        title: '"Tuning in and listening to the current": Understanding Remote Ritual Practice in Sufi Communities',
        authors: "Kozubaev, S. and Howell, N.",
        venue: "In Proceedings of the 2024 ACM Designing Interactive Systems Conference (DIS '24). ACM, New York, NY, USA, 2633–2648",
        year: "2024",
        pdf: "/pdfs/kozubaev-howell-2024-tuning-in.pdf",
        doi: "https://dl.acm.org/doi/10.1145/3643834.3661593",
      },
      {
        title: "Futures in Things: Locating the Promise of Infrastructures in Public Libraries",
        authors: "Kozubaev, S., DiSalvo, C.",
        venue: "Ethnographic Praxis in Industry Conference (EPIC)",
        year: "2021",
        doi: "https://anthrosource.onlinelibrary.wiley.com/doi/10.1111/epic.12078",
      },
      {
        title: "Cracking Public Space Open: Design for Public Librarianship",
        authors: "Kozubaev, S., DiSalvo, C.",
        venue: "In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems. ACM.",
        year: "2021",
        pdf: "/pdfs/Library-Paper-CHI-21-Camera-Ready.pdf",
        doi: "https://dl.acm.org/doi/10.1145/3411764.3445730",
      },
      {
        title: "Expanding Modes of Reflection in Design Futuring",
        authors: "Kozubaev, S., Elsden, C., Howell, N., Søndergaard, M.L.J., Merrill, N., Schulte, B., Wong, R.Y.",
        venue: "In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems. ACM.",
        year: "2020",
        pdf: "/pdfs/kozubaev_etal_design_futures_CHI2020.pdf",
        doi: "https://dl.acm.org/doi/abs/10.1145/3313831.3376526",
      },
      {
        title: "Future of Libraries as Convivial Spaces: A Design Fiction",
        authors: "Kozubaev, S., DiSalvo, C.",
        venue: "In Proceedings of the 2020 ACM Conference on Supporting Group Work. ACM.",
        year: "2020",
        pdf: "/pdfs/Convivial_Public_Libraries_GROUP_2020.pdf",
        doi: "https://dl.acm.org/doi/abs/10.1145/3323994.3369901",
      },
      {
        title: "Spaces and Traces: Implications of Smart Technology in Public Housing",
        authors: "Kozubaev, S., Rochaix, F., DiSalvo, C., & Le Dantec, C. A.",
        venue: "In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (p. 439). ACM.",
        year: "2019",
        pdf: "/pdfs/kozubaev_et_al_CHI_2019.pdf",
        doi: "https://dl.acm.org/doi/abs/10.1145/3290605.3300669",
      },
      {
        title: "Stop Nigmas: Experimental Speculative Design through Pragmatic Aesthetics and Public Art",
        authors: "Kozubaev, S.",
        venue: "In Proceedings of the 9th Nordic Conference on Human-Computer Interaction (p. 76). ACM.",
        year: "2016",
        pdf: "/pdfs/kozubaev_nordichi_2016.pdf",
        doi: "https://dl.acm.org/citation.cfm?id=2993921",
      },
    ],
  },
  {
    title: "Professional & Popular",
    items: [
      {
        title: "Futures in Things: Locating the Promise of Infrastructures in Public Libraries",
        authors: "Kozubaev, S., DiSalvo C.",
        venue: "Ethnographic Practice in Industry Conference (EPIC) 2021",
        year: "2021",
        link: "https://2021.epicpeople.org/",
      },
      {
        title: "The Future of Service Design in a Post-Human World",
        authors: "Kozubaev, S.",
        venue: "Touchpoint Journal of Service Design, Vol 10-2. (p.44) Service Design Network",
        year: "2018",
        link: "https://www.service-design-network.org/touchpoint/vol-10-2-designing-the-future/the-future-of-service-design-in-a-post-human-world",
        note: "paywall",
      },
      {
        title: "Futures as Design: Explorations, Images, and Participations",
        authors: "Kozubaev, S.",
        venue: "ACM Interactions, March-April (p.44). ACM.",
        year: "2018",
        link: "http://interactions.acm.org/archive/view/march-april-2018/futures-as-design",
      },
      {
        title: "Service Design and Transmedia Storytelling: A Convergence of Practices",
        authors: "Kozubaev, S.",
        venue: "Touchpoint Journal of Service Design, Vol 8-1. (p.41) Service Design Network",
        year: "2015",
        link: "https://www.service-design-network.org/touchpoint/touchpoint-8-1-service-design-and-cx/service-design-and-transmedia-storytelling",
        note: "paywall",
      },
      {
        title: "How to Imagine Future(s) of Your Business",
        authors: "Kozubaev, S.",
        venue: "Fast Company",
        year: "2018",
        link: "https://www.fastcompany.com/3040267/how-to-imagine-the-futures-of-your-business",
      },
    ],
  },
  {
    title: "Talks, Presentations and Workshops",
    items: [
      {
        title: "Temporal Scales In Infrastructures: Locating Socio-Material Futures",
        authors: "Kozubaev, S.",
        venue: "Reconsidering Scale and Scaling In CSCW Research. CSCW 2020 Conference Workshop",
        year: "2020",
        link: "https://www.researchgate.net/publication/344719764_Temporal_Scales_In_Infrastructures_Locating_Socio-Material_Futures",
      },
      {
        title: "Applied Theater for Developing Participatory Design Fictions in Virtual Reality",
        authors: "Kozubaev, S.",
        venue: "Communicate, Critique and Co-create (CCC) Future Technologies through Design Fictions in VR Environments. DIS 2020 Conference Workshop",
        year: "2020",
        link: "https://www.researchgate.net/publication/343046753_Applied_Theater_for_Developing_Participatory_Design_Fictions_in_Virtual_Reality",
      },
      {
        title: "Participatory Workbooks For Speculation: Exploring Library Futures",
        authors: "Kozubaev, S.",
        venue: "Speculative and Critical Design in Education: Practice and Perspectives. DIS 2020 Conference Workshop",
        year: "2020",
        link: "https://www.researchgate.net/publication/343053875_Participatory_Workbooks_For_Speculation_Exploring_Library_Futures",
      },
      {
        title: "Libraries as Convivial Spaces – Lost In The Stacks Podcast",
        authors: "Kozubaev, S.",
        venue: "WREK Radio",
        year: "2020",
        link: "https://podcasts.apple.com/us/podcast/episode-457-libraries-as-convivial-spaces/id692734472?i=1000464950074",
      },
      {
        title: "Games & Strategy: Exploring Participation and Design in Futures",
        authors: "Kozubaev, S.",
        venue: "Speculative Futures Atlanta Chapter Event. A workshop on using participatory design games to explore futures.",
        year: "2019",
      },
      {
        title: "Questioning Futures through STS and Design",
        authors: "Kozubaev, S.",
        venue: "Georgia Institute of Technology, Atlanta, GA. Presentation on how conceptual resources from Science and Technology Studies (STS) can be used in speculative design practices and research.",
        year: "2019",
      },
      {
        title: "Long(er) Term Design Thinking",
        authors: "Kozubaev, S.",
        venue: "University of Washington. Workshop on the intersection of design and long-term thinking.",
        year: "2018",
      },
      {
        title: "Utopian Objects: Vannevar Bush's Memex and Speculating with Things",
        authors: "Kozubaev, S.",
        venue: "Society of Utopian Studies Conference, Memphis, TN. A presentation exploring the relationship between design and utopian studies, using the Memex machine as an example.",
        year: "2017",
      },
      {
        title: "Transmedia Storytelling for Service Design",
        authors: "Kozubaev, S.",
        venue: "Service Design Global Conference, New York, NY. A presentation exploring commonalities between the theory of transmedia storytelling to the practice of service design.",
        year: "2015",
      },
      {
        title: "Ahead of the Game: Insights and Practicalities for Developing Foresight Games",
        authors: "Kozubaev, S.",
        venue: "World Future Society Conference, San Francisco, CA. A workshop aimed at scholars and practitioners about the application of games design in futures studies.",
        year: "2015",
      },
      {
        title: "Future Worlding for Design",
        authors: "Kozubaev, S.",
        venue: "Academic Design Management Conference, London, UK. A workshop aimed at design management scholars and practitioners to teach futures studies and world-building.",
        year: "2014",
      },
      {
        title: "Future Worlding for Service Design",
        authors: "Kozubaev, S.",
        venue: "ServDes Conference, Lancaster University, UK. A workshop aimed at service design scholars and practitioners to teach futures studies and its applications in service design.",
        year: "2014",
      },
    ],
  },
];

// Keep the flat list for backward compatibility
export const publications: Publication[] = publicationSections.flatMap(
  (section) => section.items
);
