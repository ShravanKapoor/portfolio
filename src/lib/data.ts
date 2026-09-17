// ---------------------------------------------------------------------------
// SINGLE SOURCE OF CONTENT
// Edit this file to update the site. No copy lives inside components.
// Sourced from Shravan_Kapoor_Resume_AI_BA_DA.docx.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Shravan Kapoor",
  role: "AI Business Analyst",
  roleSecondary: "AI Data Analyst · Product Analyst",
  location: "New Delhi, India",
  tagline:
    "I turn business and compliance requirements into rules, workflows, and dashboards — then use AI to make the process faster.",
  subline:
    "MCA graduate specializing in business and data analysis, with hands-on experience translating requirements into technical rules, workflows, and dashboards using SQL, Excel, and Power BI. Currently an AI SDE Intern at Odin AI, mapping automation workflows; previously built a compliance analytics platform at Sensation Software Solutions. ISTQB Foundation Level certified, with working exposure to AI agents, RAG pipelines, and automation platforms as a differentiator.",
  email: "shravankapoor1@gmail.com",
  github: "https://github.com/ShravanKapoor",
  linkedin: "https://www.linkedin.com/in/shravan-kapoor-b2b78a273/",
  resumeUrl: "/resume.pdf",
  availability: "Open to full-time AI Business Analyst, AI Data Analyst & Product Analyst roles in Delhi NCR",
};

export const experience = [
  {
    org: "Odin AI",
    role: "AI SDE Intern",
    period: "Aug 2026 — Present",
    location: null,
    summary:
      "Gathering requirements from business stakeholders and translating them into workflow specifications for a recruitment automation platform and an AI lead-generation & outreach system. Analyzing lead, company, and candidate data to define qualification criteria, matching logic, and reply-classification rules, with daily stakeholder progress reporting.",
    stack: ["Requirements Gathering", "Workflow Design", "n8n", "Stakeholder Reporting"],
    note: null,
  },
  {
    org: "Sensation Software Solutions",
    role: "AI Full Stack Intern",
    period: "Jan 2026 — Jul 2026",
    location: null,
    summary:
      "Translated regulatory and business compliance requirements into a configurable rule engine, analyzed structured data to identify risk patterns, and built an interactive dashboard visualizing compliance status, risk scores, and flagged anomalies for stakeholder decision-making.",
    stack: ["Python", "Rule Engine", "Risk Analysis", "Dashboarding"],
    note: null,
  },
  {
    org: "Sensation Software Solutions",
    role: "MERN Stack Intern",
    period: "May 2025 — Jun 2025",
    location: null,
    summary:
      "Built and deployed web application modules using MongoDB, Express.js, React.js, and Node.js, owning both frontend and backend components as part of a structured Agile team.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    note: null,
  },
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Chitkara University",
    period: "2024 — 2026 · Punjab",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Guru Gobind Singh Indraprastha University",
    period: "2021 — 2024 · New Delhi",
  },
];

export const certifications = [
  {
    name: "ISTQB Foundation Level",
    issuer: "ISTQB",
    year: "",
    note: "A developer who studies test design isn't the norm — it shapes how I build and evaluate AI pipelines, not just how I ship features.",
  },
  { name: "Web Development", issuer: "", year: "", note: "" },
  { name: "Rudiments of AI & GenAI Tools", issuer: "", year: "", note: "" },
  { name: "Java Programming for Beginners", issuer: "", year: "", note: "" },
];

export type Project = {
  slug: string;
  name: string;
  oneLiner: string;
  problem: string;
  stack: string[];
  role: string;
  links: { repo?: string; demo?: string };
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-lead-generation-outreach-system",
    name: "AI Lead Generation & Outreach System",
    oneLiner:
      "A workflow that automates lead research, personalization, and follow-ups, then classifies replies to keep outreach data actionable.",
    problem:
      "Manually qualifying leads and following up at scale doesn't hold up. This system analyzes lead and company data to define matching criteria and outreach segmentation, then automates research, personalization, follow-ups, and reply-classification reporting.",
    stack: ["n8n", "LLM Integration", "Workflow Automation"],
    role: "Built during internship at Odin AI",
    links: { repo: "PLACEHOLDER_REPO_LINK" },
    featured: true,
  },
  {
    slug: "compliance-analysis-system",
    name: "Compliance Analysis System",
    oneLiner:
      "A RAG pipeline paired with a rule engine that flags compliance violations against a document corpus and explains why, instead of making someone search PDFs by hand.",
    problem:
      "Reviewing documents against compliance requirements manually is slow and error-prone. This system maps regulatory requirements into a rule engine, pairs it with a RAG pipeline (Hugging Face embeddings + Qdrant) that retrieves relevant regulatory text, and flags violations with explanations — surfaced through a stakeholder dashboard for real-time, auditable reporting.",
    stack: ["Python", "Hugging Face embeddings", "Qdrant", "Rule engine", "Dashboarding"],
    role: "Built during internship at Sensation Software Solutions",
    links: { repo: "PLACEHOLDER_REPO_LINK" },
    featured: true,
  },
  {
    slug: "rag-qa-system",
    name: "RAG Q&A System",
    oneLiner:
      "A self-directed retrieval-augmented Q&A system built to understand the RAG stack end to end, from chunking to generation.",
    problem:
      "Built to go deeper than tutorial-level RAG: covers chunking strategy, embedding choice, and retrieval quality, not just wiring an API together.",
    stack: ["Python", "FAISS", "Sentence-Transformers", "Groq (Llama 3.1)"],
    role: "Independent project",
    links: { repo: "https://github.com/ShravanKapoor/rag-qa-system" },
    featured: true,
  },
  {
    slug: "ai-people-tracking-system",
    name: "AI-Powered People Tracking & Analytical System",
    oneLiner:
      "MCA capstone: analyzes real-time crowd density from an ESP32 Wi-Fi sniffing setup to predict movement trends and trigger automated emergency alerts.",
    problem:
      "Explores passive people-tracking using Wi-Fi signal behavior rather than cameras. Analyzes real-time crowd density data to predict movement trends and trigger automated SMS alerts for emergency and traffic scenarios. Built as a team project.",
    stack: ["ESP32", "Wi-Fi sniffing", "Python", "Machine Learning"],
    role: "Team project — MCA capstone, supervised by Dr. Anchal Thakur",
    links: { repo: "PLACEHOLDER_REPO_LINK" },
    featured: true,
  },
  {
    slug: "eazywed",
    name: "EazyWed",
    oneLiner:
      "A full-stack wedding-planning platform connecting couples with vendors — built solo, end to end.",
    problem:
      "Wedding planning involves juggling many vendors and moving pieces. EazyWed centralizes discovery and coordination in one MERN application.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    role: "Independent project",
    links: { repo: "PLACEHOLDER_REPO_LINK", demo: "PLACEHOLDER_DEMO_LINK" },
    featured: true,
  },
  {
    slug: "tour-travel-platform",
    name: "Tour & Travel Booking Platform",
    oneLiner: "A solo-built MERN booking platform for tour and travel packages.",
    problem: "End-to-end booking flow: browse packages, book, manage listings.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    role: "Independent project",
    links: { repo: "PLACEHOLDER_REPO_LINK" },
    featured: false,
  },
  {
    slug: "ai-test-case-generator",
    name: "AI-Assisted Test Case Generator",
    oneLiner: "Generates candidate test cases from requirements or code context, drawing on ISTQB-grounded test design.",
    problem: "Reduces the manual overhead of writing first-pass test cases for a feature.",
    stack: ["Python", "LLM prompting"],
    role: "Independent project",
    links: { repo: "PLACEHOLDER_REPO_LINK" },
    featured: false,
  },
  {
    slug: "image-background-remover",
    name: "Image Background Remover",
    oneLiner: "A tool for automatic background removal from images.",
    problem: "PLACEHOLDER — add the specific technique/model used.",
    stack: ["Python", "PLACEHOLDER"],
    role: "Independent project",
    links: { repo: "PLACEHOLDER_REPO_LINK" },
    featured: false,
  },
  {
    slug: "rag-chatbot",
    name: "RAG Chatbot",
    oneLiner: "A conversational retrieval-augmented chatbot.",
    problem: "PLACEHOLDER — clarify how this differs from the RAG Q&A System above (or merge them).",
    stack: ["Python", "PLACEHOLDER"],
    role: "Independent project",
    links: { repo: "PLACEHOLDER_REPO_LINK" },
    featured: false,
  },
  {
    slug: "stock-signal-exploration",
    name: "Stock Market AI Signal Exploration",
    oneLiner: "Explored generating trading signals from historical price data using tree-based ML models.",
    problem: "An applied exploration of feature engineering and tree-based models (not a production trading system).",
    stack: ["Python", "yfinance", "Tree-based ML"],
    role: "Independent exploration",
    links: { repo: "PLACEHOLDER_REPO_LINK" },
    featured: false,
  },
];

export const skillGroups = [
  {
    label: "Business & Data Analysis",
    items: [
      "Requirements Gathering & Rule Mapping",
      "Business / Process Analysis",
      "Data Analysis (SQL)",
      "Dashboard & Insights Reporting",
      "Risk & Compliance Analysis",
      "Stakeholder Reporting & Communication",
    ],
  },
  {
    label: "Analytics Tools",
    items: ["SQL", "Power BI", "Excel (Pivot Tables, Formulas)", "Google Sheets"],
  },
  {
    label: "AI & Automation (Differentiator)",
    items: [
      "AI Agents & Multi-Agent Workflows",
      "RAG Pipelines",
      "LLM Integration (Claude, Groq/Llama)",
      "Hugging Face Embeddings",
      "Qdrant",
      "Prompt Design",
      "n8n",
    ],
  },
  {
    label: "Full-Stack Development",
    items: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    label: "Programming & Tools",
    items: ["Python", "Java", "Git", "Postman"],
  },
  {
    label: "Testing & QA",
    items: ["Manual Testing", "Test Case Design", "UAT", "STLC / SDLC"],
  },
];

export const exploring = [
  "Agentic AI frameworks — LangChain and LangGraph",
  "Multi-agent orchestration patterns for recruitment automation",
  "Deepening SQL and Power BI for analyst-track roles",
];

export const achievements: { title: string; detail: string }[] = [
  // PLACEHOLDER — no achievements on record yet.
  // Add entries here: { title: "...", detail: "..." }
];
