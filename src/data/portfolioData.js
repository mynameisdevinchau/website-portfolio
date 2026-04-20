export const profile = {
  name: "Devin Chau",
  title: "Data Scientist",
  location: "California",
  email: "chau.devin031602@gmail.com",
  intro:
    "My work spans software engineering, analytics, and product design. I am most interested in taking something complex or messy and shaping it into something dependable, clear, and easy to use.",
  summary:
    "My work sits at the intersection of software engineering, analytics, and product thinking. I enjoy turning messy processes into reliable systems, then shaping them into interfaces people actually want to use.",
  links: {
    github: "https://github.com/mynameisdevinchau",
    linkedin: "https://linkedin.com/in/devin-chau-66b5b2208",
    email: "mailto:chau.devin031602@gmail.com",
  },
  focusAreas: ["Software Engineering", "Data Tools", "Applied ML"],
  techStack: [
    "Python",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Flask",
    "scikit-learn",
  ],
};

export const experience = [
  {
    company: "Verzena",
    role: "Software Developer Intern",
    period: "Jun 2025 – Present",
    location: "Remote",
    summary:
      "Shipping internal tools and backend features that make operations faster, more stable, and easier to manage.",
    bullets: [
      "Built and maintained internal dashboards with React and Node.js to support day-to-day operations workflows.",
      "Improved backend performance by roughly 50% through SQL query optimization and targeted caching.",
      "Developed a PostgreSQL-backed messaging system for real-time notifications and more responsive product behavior.",
      "Partnered on UI iterations, debugging, and release validation to keep features stable in production.",
    ],
    tech: ["React", "Node.js", "JavaScript", "PostgreSQL"],
  },
  {
    company: "Data Glacier",
    role: "Data Science Intern",
    period: "Oct 2024 – Feb 2025",
    location: "Remote",
    summary:
      "Worked across analytics, modeling, and lightweight deployment to turn client datasets into usable products and insights.",
    bullets: [
      "Built an inference service with Flask by serializing a trained scikit-learn model, enabling real-time predictions.",
      "Cleaned and analyzed large datasets to surface client-facing insights through dashboards and visualizations.",
      "Implemented regression and classification models with scikit-learn and communicated results in stakeholder meetings.",
    ],
    tech: ["Python", "Flask", "Pandas", "scikit-learn"],
  },
  {
    company: "Think Neuro",
    role: "Research Intern",
    period: "Dec 2023 – Feb 2024",
    location: "Remote",
    summary:
      "Used research and bibliometric analysis to translate large publication sets into clear trends and presentation-ready findings.",
    bullets: [
      "Analyzed publication metadata in R and Excel to support a study on computational models of memory and learning.",
      "Built visualizations for citation trends, research growth, and high-impact contributors across the field.",
      "Coordinated workflow and presentation deliverables within a 10-person cohort under tight deadlines.",
    ],
    tech: ["R", "Excel", "Research Analysis"],
  },
];

export const projects = [
  {
    title: "Starbucks Marketing Funnel Analysis",
    repoUrl: "https://github.com/mynameisdevinchau/starbucks-analysis",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    summary:
      "Offer-level funnel analysis used to understand where customers dropped off and which campaign types converted best.",
    bullets: [
      "Built a received → viewed → completed funnel to compare offer performance across campaign types.",
      "Identified the biggest drop-off points and surfaced stronger retention from BOGO-style offers.",
      "Turned raw behavioral data into business-facing visuals and takeaways for marketing strategy.",
    ],
    categories: ["da", "ds"],
  },
  {
    title: "Wildfire Severity Prediction",
    repoUrl: "https://github.com/Sthearye/Wildfire-Severity-Website",
    stack: ["Python", "Dash", "Machine Learning", "Google Cloud"],
    summary:
      "Interactive analytics and prediction platform for exploring wildfire severity patterns across California.",
    bullets: [
      "Combined wildfire, weather, and census data into a modeling and dashboard workflow.",
      "Engineered predictive features and trained models such as Random Forest and stacking-based approaches.",
      "Built dynamic visualizations for geographic and temporal trend analysis and deployed the app to the cloud.",
    ],
    categories: ["ds", "da"],
  },
  {
    title: "Event Management System",
    repoUrl: "https://github.com/mynameisdevinchau/EventManagementSystem",
    stack: ["Java Servlets", "MySQL", "JDBC", "Apache Tomcat"],
    summary:
      "Role-based ticketing and event management platform designed for organizers and customers in one application.",
    bullets: [
      "Implemented authentication, event creation, venue management, and ticket-purchasing flows.",
      "Built backend logic with Java Servlets and JDBC on top of a MySQL persistence layer.",
      "Designed the product around end-to-end workflows instead of isolated feature demos.",
    ],
    categories: ["swe"],
  },
  {
    title: "Weather and Energy Demand Pipeline",
    repoUrl: "https://github.com/mynameisdevinchau/weather-energy-pipeline",
    stack: ["Python", "AWS Lambda", "S3", "Glue", "Athena", "PySpark", "SQL"],
    summary:
      "An end-to-end AWS pipeline that ingests weather and electricity demand data, transforms it into curated datasets, and makes it queryable for downstream analysis.",
    bullets: [
      "Built an EventBridge-triggered Lambda workflow to pull daily data from Open-Meteo and EIA APIs into partitioned S3 storage.",
      "Used AWS Glue and PySpark to parse multiline JSON, enforce types, join data by city and date, and write curated Parquet datasets.",
      "Modeled the project like a production-style pipeline with cloud storage layers and Athena-ready query workflows.",
    ],
    categories: ["de", "da"],
  },
  {
    title: "PaperLink",
    repoUrl: "https://github.com/SShahparnia/paperlink",
    stack: ["Python", "Claude", "FastAPI", "Lava", "Fish Audio"],
    summary:
      "A Runner-up CalHacks project that generates concise research digests from arXiv papers in under 1 minute, with a Next.js UI and audio-first accessibility features.",
    bullets: [
      "Built a CalHacks AI research companion that generates arXiv digests in under 1 minute (MiniLM embeddings, Chroma clustering, Claude summaries via Lava).",
      "Developed a Next.js 14 UI with Browse/Digest modes and daily/weekly/monthly briefings per topic",
      "Added sentence-level text-to-speech playback with Fish Audio to improve accessibility for audio-first users.",
    ],
    categories: ["swe"],
  },
  {
    title: "Death Penalty Status Analysis",
    repoUrl:
      "https://github.com/mynameisdevinchau/Death-Penalty-Status-Analysis-",
    stack: ["R"],
    summary:
      "An analysis of death penalty status across US states, exploring geographic and temporal trends in capital punishment.",
    bullets: [
      "Manipulated, cleaned, and processed data to examine the correlation between death penalty status and crime rates in the U.S",
      "Created visualizations using RStudio to present trends and insights for data-driven decision-making.",
      "Enhanced the understanding of the relationship between the death penalty and crime rates, providing nuanced insights into its implications and potential approaches for addressing crime in America.",
    ],
    categories: ["da"],
  },
];
