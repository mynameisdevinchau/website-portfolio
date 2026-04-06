export const profile = {
  name: 'Devin Chau',
  title: 'Software Engineer',
  location: 'California',
  email: 'chau.devin031602@gmail.com',
  intro:
    'I build full-stack products, data tools, and ML-backed workflows with a strong focus on clarity, performance, and user experience.',
  summary:
    'My work sits at the intersection of software engineering, analytics, and product thinking. I enjoy turning messy processes into reliable systems, then shaping them into interfaces people actually want to use.',
  links: {
    github: 'https://github.com/mynameisdevinchau',
    linkedin: 'https://linkedin.com/in/devin-chau-66b5b2208',
    email: 'mailto:chau.devin031602@gmail.com',
  },
  focusAreas: ['Full-Stack Apps', 'Data Products', 'ML Workflows'],
  techStack: [
    'Python',
    'JavaScript',
    'React',
    'Node.js',
    'SQL',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Flask',
    'scikit-learn',
  ],
};

export const experience = [
  {
    company: 'Verzena',
    role: 'Software Developer Intern',
    period: 'Jun 2025 – Present',
    location: 'Remote',
    summary:
      'Shipping internal tools and backend features that make operations faster, more stable, and easier to manage.',
    bullets: [
      'Built and maintained internal dashboards with React and Node.js to support day-to-day operations workflows.',
      'Improved backend performance by roughly 50% through SQL query optimization and targeted caching.',
      'Developed a PostgreSQL-backed messaging system for real-time notifications and more responsive product behavior.',
      'Partnered on UI iterations, debugging, and release validation to keep features stable in production.',
    ],
    tech: ['React', 'Node.js', 'JavaScript', 'PostgreSQL'],
  },
  {
    company: 'Data Glacier',
    role: 'Data Science Intern',
    period: 'Oct 2024 – Feb 2025',
    location: 'Remote',
    summary:
      'Worked across analytics, modeling, and lightweight deployment to turn client datasets into usable products and insights.',
    bullets: [
      'Built an inference service with Flask by serializing a trained scikit-learn model, enabling real-time predictions.',
      'Cleaned and analyzed large datasets to surface client-facing insights through dashboards and visualizations.',
      'Implemented regression and classification models with scikit-learn and communicated results in stakeholder meetings.',
    ],
    tech: ['Python', 'Flask', 'Pandas', 'scikit-learn'],
  },
  {
    company: 'Think Neuro',
    role: 'Research Intern',
    period: 'Dec 2023 – Feb 2024',
    location: 'Remote',
    summary:
      'Used research and bibliometric analysis to translate large publication sets into clear trends and presentation-ready findings.',
    bullets: [
      'Analyzed publication metadata in R and Excel to support a study on computational models of memory and learning.',
      'Built visualizations for citation trends, research growth, and high-impact contributors across the field.',
      'Coordinated workflow and presentation deliverables within a 10-person cohort under tight deadlines.',
    ],
    tech: ['R', 'Excel', 'Research Analysis'],
  },
];

export const projects = [
  {
    title: 'AI Discord Bot',
    repoUrl: 'https://github.com/rohankhatri7/rohanbot',
    stack: ['Python', 'Meta-Llama', 'AWS EC2', 'Flask', 'Discord API'],
    summary:
      'A personality-driven Discord bot that fine-tunes a small language model on community messages and serves responses through a production-style deployment setup.',
    bullets: [
      'Fine-tuned TinyLlama 1.1B on 40k+ Discord messages to replicate a user-specific conversation style.',
      'Deployed the model on AWS EC2 through Flask with Docker-based serving across 3 servers.',
      'Built preprocessing workflows that converted 1,000+ messages to JSONL while filtering sensitive information.',
    ],
  },
  {
    title: 'Starbucks Marketing Funnel Analysis',
    repoUrl: 'https://github.com/mynameisdevinchau/starbucks-analysis',
    stack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    summary:
      'Offer-level funnel analysis used to understand where customers dropped off and which campaign types converted best.',
    bullets: [
      'Built a received → viewed → completed funnel to compare offer performance across campaign types.',
      'Identified the biggest drop-off points and surfaced stronger retention from BOGO-style offers.',
      'Turned raw behavioral data into business-facing visuals and takeaways for marketing strategy.',
    ],
  },
  {
    title: 'Wildfire Severity Prediction',
    repoUrl: 'https://github.com/Sthearye/Wildfire-Severity-Website',
    stack: ['Python', 'Dash', 'Machine Learning', 'Google Cloud'],
    summary:
      'Interactive analytics and prediction platform for exploring wildfire severity patterns across California.',
    bullets: [
      'Combined wildfire, weather, and census data into a modeling and dashboard workflow.',
      'Engineered predictive features and trained models such as Random Forest and stacking-based approaches.',
      'Built dynamic visualizations for geographic and temporal trend analysis and deployed the app to the cloud.',
    ],
  },
  {
    title: 'Event Management System',
    repoUrl: 'https://github.com/mynameisdevinchau/EventManagementSystem',
    stack: ['Java Servlets', 'MySQL', 'JDBC', 'Apache Tomcat'],
    summary:
      'Role-based ticketing and event management platform designed for organizers and customers in one application.',
    bullets: [
      'Implemented authentication, event creation, venue management, and ticket-purchasing flows.',
      'Built backend logic with Java Servlets and JDBC on top of a MySQL persistence layer.',
      'Designed the product around end-to-end workflows instead of isolated feature demos.',
    ],
  },
];
