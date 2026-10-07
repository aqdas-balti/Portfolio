// Saara portfolio content yahan se aata hai. CV update ho to sirf yeh file edit karo.

export const profile = {
  name: "Aqdas Ali",
  initials: "AA",
  role: "Full-Stack Developer",
  // Hero mein typing animation inhi lines ko baari baari likhta hai.
  roles: ["Full-Stack Developer", "NestJS & React Developer", "Multi-tenant SaaS Builder", "Django Developer"],
  location: "Islamabad, Pakistan",
  email: "aqdasali584@gmail.com",
  siteUrl: "https://aqdas-ali.vercel.app",
  // Apne links yahan daalo. Khaali string ho to woh button/link nahi dikhega.
  github: "https://github.com/aqdas-balti",
  linkedin: "https://www.linkedin.com/in/aqdas-ali-python-developer",
  // public/ folder mein resume.pdf rakho, phir yeh "/resume.pdf" kar do.
  resumeUrl: "",
  // public/ folder mein apni photo (e.g. avatar.jpg) rakho, phir yeh "/avatar.jpg" kar do.
  // Khaali ho to photo ki jagah initials dikhte hain.
  photo: "",
  available: true,
  tagline:
    "I build multi-tenant SaaS products end-to-end: APIs, databases, third-party integrations and the deployments that keep them running.",
  about: [
    "I'm a full-stack developer working mainly with TypeScript (NestJS, React) and Python (Django). For the past year I've been building Agentawk, a multi-channel customer messaging platform, from API and database design through to live production deployment.",
    "Before that, I helped turn KajShip, a live logistics system for a UAE client, into IntelliShip, a multi-tenant SaaS platform. I've also built Feelix AI, a multi-tenant platform for WhatsApp AI agents that answer questions from a business's own documents and book real appointments. I like work where product thinking and backend engineering meet: billing, automation engines, integrations and keeping production stable.",
  ],
  highlights: [
    { value: "140+", label: "Features & fixes shipped" },
    { value: "5", label: "Backend services in production" },
    { value: "6", label: "Messaging channels integrated" },
    { value: "11", label: "Currencies in a multi-tenant SaaS" },
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Ezauq",
    period: "Jan 2026 – Present",
    summary:
      "Building Agentawk, a unified inbox that brings WhatsApp Business Cloud API, WhatsApp QR, Instagram, Facebook Messenger, Telegram and web chat into one place.",
    points: [
      "Designed and shipped a subscription billing system with plan tiers, usage-based limits, payment gateway integration and coupon management across agency and workspace tenants.",
      "Built “Smart Flows”, a no-code automation engine with conditional branching, AI-powered conversational steps and scheduled or triggered engagement on every channel.",
      "Built a CSAT feedback system with interactive surveys, cooldown logic and real-time analytics dashboards for response rate, sentiment and agent performance.",
      "Handled production reliability: root-causing live incidents, running SSH/Docker deployments across 5 backend services and carrying out database migrations with zero data loss.",
      "Used AI coding agents in a structured workflow to ship 140+ documented features and fixes across the NestJS backend and React frontend.",
    ],
    stack: ["TypeScript", "NestJS", "React", "Prisma", "MySQL", "RabbitMQ", "AWS S3", "Docker"],
  },
  {
    role: "Python/Django Intern",
    company: "Cyberbeak",
    period: "Jun 2025 – Dec 2025",
    summary:
      "Converted KajShip, a live shipping and logistics system for a UAE client, into IntelliShip, a multi-tenant SaaS platform.",
    points: [
      "Implemented row-level tenant isolation so each company's data stays separate within one shared deployment.",
      "Built the Super Admin console in React, Vite and MUI for managing tenants across the platform.",
      "Built the public marketing site with Next.js and Tailwind CSS.",
      "Added a per-tenant multi-currency system supporting 11 currencies.",
    ],
    stack: ["Python", "Django", "React", "Vite", "MUI", "Next.js", "Tailwind CSS"],
  },
];

export type Project = {
  title: string;
  label: string;
  description: string;
  points: string[];
  stack: string[];
  link?: string;
  repo?: string;
};

export const projects: Project[] = [
  {
    title: "Agentawk",
    label: "Production SaaS · Ezauq",
    description:
      "Multi-channel customer messaging platform with a single inbox for WhatsApp, Instagram, Messenger, Telegram and web chat.",
    points: [
      "Subscription billing with plans, usage limits and coupons",
      "Smart Flows no-code automation engine with AI steps",
      "CSAT surveys and live analytics dashboards",
    ],
    stack: ["NestJS", "React", "RabbitMQ", "Docker", "WhatsApp Cloud API"],
  },
  {
    title: "Feelix AI",
    label: "Multi-tenant AI SaaS",
    description:
      "Lets businesses deploy customizable AI chatbot agents on WhatsApp for customer support and appointment booking.",
    points: [
      "Each agent is trained on the business's own documents (RAG with Qdrant + GPT-4o)",
      "Connected to a live booking calendar to manage real appointments end-to-end",
      "Async processing with Celery & Redis, deployed with Docker and Kubernetes",
    ],
    stack: ["Django REST Framework", "PostgreSQL", "Celery", "Redis", "OpenAI GPT-4o", "Qdrant", "WhatsApp Cloud API", "React", "Kubernetes", "GitHub Actions"],
  },
  {
    title: "IntelliShip",
    label: "Multi-tenant SaaS · Cyberbeak",
    description:
      "A live logistics product for a UAE client, re-architected into a multi-tenant SaaS platform.",
    points: [
      "Row-level tenant isolation",
      "Super Admin console and public marketing site",
      "Per-tenant multi-currency (11 currencies)",
    ],
    stack: ["Django", "React", "MUI", "Next.js", "Tailwind CSS"],
  },
  {
    title: "AI MediCare System",
    label: "Final Year Project",
    description:
      "Django-based assistant that predicts likely diseases from user-reported symptoms.",
    points: [
      "Trained and compared several Scikit-learn classifiers",
      "Best model (SVC) reached 98% accuracy",
      "Clean, responsive Tailwind CSS interface",
    ],
    stack: ["Python", "Django", "Scikit-learn", "Pandas", "Tailwind CSS"],
  },
  {
    title: "AI Automation Workflows",
    label: "n8n",
    description:
      "Booking and scheduling agents that connect to Google Calendar and Google Sheets through REST APIs and webhooks.",
    points: [
      "Automated booking and scheduling flows",
      "Google Calendar and Sheets integration",
      "Webhook-driven triggers",
    ],
    stack: ["n8n", "REST", "Webhooks", "Google APIs"],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Backend",
    items: ["TypeScript", "Node.js", "NestJS", "Python", "Django", "Django REST Framework", "Celery", "Prisma", "REST API design", "JWT auth"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "MUI"],
  },
  {
    group: "Data & Infrastructure",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Docker", "Kubernetes", "GitHub Actions", "AWS S3", "GCP", "Linux / SSH"],
  },
  {
    group: "AI & Integrations",
    items: ["OpenAI API (GPT-4o)", "RAG", "Qdrant", "WhatsApp Business Cloud API", "Instagram / Messenger", "Telegram", "n8n", "Scikit-learn", "Pandas"],
  },
];

export const education = {
  degree: "BS Computer Science",
  school: "Federal Urdu University of Arts, Sciences and Technology, Islamabad",
  period: "2022 – 2026",
  detail: "Final Year Project: AI MediCare System",
  certifications: ["Python & Django (Udemy)", "AI/Data Science Basics (UniAthena)"],
};
